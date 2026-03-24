const { SISTEMA, SIGLAS, TEMPO_LINHA, TEMPO_BALDEACAO } = require('../data/sistema');

// ==========================================
// TEMPO REAL DE TRANSBORDO POR ESTAÇÃO
// Baseado na distância real entre plataformas
// ==========================================
const TEMPO_TRANSBORDO = {
  'Los Heroes':                     6,  // L1↔L2: corredor longo ~6 min
  'Puente Cal y Canto':             7,  // L2↔L3: percurso interno ~7 min
  'Universidad de Chile':           5,  // L1↔L3: mezanino central ~5 min
  'Baquedano':                      4,  // L1↔L5: mesma plataforma ~4 min
  'San Pablo':                      3,  // L1↔L5: plataformas próximas ~3 min
  'Tobalaba':                       4,  // L1↔L4: ~4 min
  'Los Leones':                     3,  // L1↔L6: ~3 min
  'Santa Ana':                      4,  // L2↔L5: ~4 min
  'Franklin':                       3,  // L2↔L6: ~3 min
  'Bio Bio':                        3,  // L2↔L6: ~3 min
  'Lo Valledor':                    3,  // L2↔L6: ~3 min
  'Presidente Pedro Aguirre Cerda': 5,  // L2↔L6: ~5 min
  'La Cisterna':                    4,  // L2↔L4A: ~4 min
  'San Ramon':                      4,  // L2↔L4A: ~4 min
  'Plaza de Armas':                 5,  // L3↔L5: ~5 min
  'Irarrazaval':                    4,  // L3↔L5: ~4 min
  'Plaza Egana':                    4,  // L3↔L4: ~4 min
  'Nunoa':                          3,  // L3↔L6: ~3 min
  'Vicuna Mackenna':                4,  // L4↔L4A: ~4 min
  'Vicente Valdes':                 3,  // L4↔L5: ~3 min
  'Nuble':                          4,  // L5↔L6: ~4 min
};

// ==========================================
// PENALIDADE DE HORÁRIO DE PICO
// ==========================================
const FATOR_PICO = 1.3;  // 30% mais lento no pico

// ==========================================
// CACHE E UTILITÁRIOS
// ==========================================
const _cacheLinhas = {};
function linhasDaEstacao(nome) {
  if (_cacheLinhas[nome]) return _cacheLinhas[nome];
  _cacheLinhas[nome] = Object.keys(SISTEMA).filter(l => SISTEMA[l].estacoes.includes(nome));
  return _cacheLinhas[nome];
}

const TODAS_ESTACOES = [...new Set(Object.values(SISTEMA).flatMap(l => l.estacoes))].sort();

function norm(texto) {
  return (texto || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

function encontrarEstacao(termo) {
  if (!termo) return null;
  const sigla = SIGLAS[termo.toUpperCase()];
  if (sigla) return sigla;
  const busca = norm(termo);
  if (busca.length < 2) return null;
  return TODAS_ESTACOES.find(e => norm(e) === busca)
      || TODAS_ESTACOES.find(e => norm(e).includes(busca))
      || null;
}

function buscarSugestoes(termo, limite = 8) {
  if (!termo || termo.length < 2) return [];
  const busca = norm(termo);
  const sig = termo.toUpperCase();
  const result = [];
  for (const [k, v] of Object.entries(SIGLAS)) {
    if (k.startsWith(sig) && !result.includes(v)) result.push(v);
  }
  for (const e of TODAS_ESTACOES) {
    if (!result.includes(e) && norm(e).includes(busca)) result.push(e);
  }
  return result.slice(0, limite);
}

// ==========================================
// FILA DE PRIORIDADE (MIN-HEAP)
// ==========================================
class MinHeap {
  constructor() { this.heap = []; }

  push(item) {
    this.heap.push(item);
    this._bubbleUp(this.heap.length - 1);
  }

  pop() {
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._sinkDown(0);
    }
    return top;
  }

  get size() { return this.heap.length; }

  _bubbleUp(i) {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent][0] <= this.heap[i][0]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  _sinkDown(i) {
    const n = this.heap.length;
    while (true) {
      let min = i;
      const l = 2 * i + 1, r = 2 * i + 2;
      if (l < n && this.heap[l][0] < this.heap[min][0]) min = l;
      if (r < n && this.heap[r][0] < this.heap[min][0]) min = r;
      if (min === i) break;
      [this.heap[min], this.heap[i]] = [this.heap[i], this.heap[min]];
      i = min;
    }
  }
}

// ==========================================
// BFS — rota por menor número de estações
// ==========================================
function bfs(origem, destino) {
  const linhasIniciais = linhasDaEstacao(origem);
  if (!linhasIniciais.length) return null;
  const fila = [[{ estacao: origem, linha: linhasIniciais[0] }]];
  const visitados = new Set([`${origem}|${linhasIniciais[0]}`]);

  while (fila.length) {
    const caminho = fila.shift();
    const { estacao, linha } = caminho[caminho.length - 1];
    if (estacao === destino) return caminho;

    const lista = SISTEMA[linha].estacoes;
    const idx = lista.indexOf(estacao);
    for (const delta of [-1, 1]) {
      const viz = lista[idx + delta];
      if (!viz) continue;
      const chave = `${viz}|${linha}`;
      if (!visitados.has(chave)) {
        visitados.add(chave);
        fila.push([...caminho, { estacao: viz, linha }]);
      }
    }
    for (const outraLinha of linhasDaEstacao(estacao)) {
      if (outraLinha === linha) continue;
      const chave = `${estacao}|${outraLinha}`;
      if (!visitados.has(chave)) {
        visitados.add(chave);
        fila.push([...caminho, { estacao, linha: outraLinha }]);
      }
    }
  }
  return null;
}

// ==========================================
// DIJKSTRA — rota por menor tempo real
// Usa tempo real de transbordo por estação
// Aplica fator de pico quando necessário
// ==========================================
function dijkstra(origem, destino, usarPico = true) {
  const periodo = periodoAtual();
  const fatorTempo = (usarPico && periodo === 'pico') ? FATOR_PICO : 1.0;

  const dist = {};
  const prev = {};
  const heap = new MinHeap();

  for (const linha of linhasDaEstacao(origem)) {
    const k = `${origem}|${linha}`;
    dist[k] = 0;
    heap.push([0, origem, linha]);
  }

  while (heap.size > 0) {
    const [custo, estacao, linha] = heap.pop();
    const k = `${estacao}|${linha}`;

    if (estacao === destino) {
      return { path: _reconstruir(prev, k), tempo: Math.round(custo) };
    }

    if (dist[k] !== undefined && custo > dist[k]) continue;

    // Vizinhos na mesma linha
    const lista = SISTEMA[linha].estacoes;
    const idx = lista.indexOf(estacao);
    for (const delta of [-1, 1]) {
      const viz = lista[idx + delta];
      if (!viz) continue;
      const nc = custo + (TEMPO_LINHA[linha] * fatorTempo);
      const nk = `${viz}|${linha}`;
      if (dist[nk] === undefined || nc < dist[nk]) {
        dist[nk] = nc;
        prev[nk] = k;
        heap.push([nc, viz, linha]);
      }
    }

    // Baldeação com tempo real por estação
    for (const outra of linhasDaEstacao(estacao)) {
      if (outra === linha) continue;
      const tempoBaldeacao = TEMPO_TRANSBORDO[estacao] ?? TEMPO_BALDEACAO;
      const nc = custo + (tempoBaldeacao * fatorTempo);
      const nk = `${estacao}|${outra}`;
      if (dist[nk] === undefined || nc < dist[nk]) {
        dist[nk] = nc;
        prev[nk] = k;
        heap.push([nc, estacao, outra]);
      }
    }
  }
  return null;
}

// ==========================================
// FUNÇÕES AUXILIARES
// ==========================================
function _reconstruir(prev, fim) {
  const path = [];
  let cur = fim;
  while (cur) {
    const [e, l] = cur.split('|');
    path.unshift({ estacao: e, linha: l });
    cur = prev[cur];
  }
  return path;
}

function calcularTempo(path) {
  const periodo = periodoAtual();
  const fator = periodo === 'pico' ? FATOR_PICO : 1.0;
  let t = 0;
  for (let i = 1; i < path.length; i++) {
    if (path[i].linha !== path[i - 1].linha) {
      const tempoBaldeacao = TEMPO_TRANSBORDO[path[i].estacao] ?? TEMPO_BALDEACAO;
      t += tempoBaldeacao * fator;
    } else {
      t += TEMPO_LINHA[path[i].linha] * fator;
    }
  }
  return Math.round(t);
}

function paradasUnicas(path) {
  return path.filter((n, i, a) => i === 0 || n.estacao !== a[i - 1].estacao);
}

function detectarBaldeacoes(path) {
  const bal = [];
  for (let i = 1; i < path.length; i++) {
    if (path[i].linha !== path[i-1].linha && path[i].estacao === path[i-1].estacao) {
      const tempo = TEMPO_TRANSBORDO[path[i].estacao] ?? TEMPO_BALDEACAO;
      bal.push({
        estacao: path[i].estacao,
        de: path[i-1].linha,
        para: path[i].linha,
        tempo
      });
    }
  }
  return bal;
}

function agruparSegmentos(path) {
  const segs = [];
  let i = 0;
  while (i < path.length) {
    const linhaAtual = path[i].linha;
    let j = i;
    while (j < path.length && path[j].linha === linhaAtual) j++;
    const uniq = [...new Set(path.slice(i, j).map(n => n.estacao))];
    segs.push({ linha: linhaAtual, estacoes: uniq });
    i = j;
  }
  return segs;
}

function terminalDirecao(linha, estacaoInicio, estacaoFim) {
  const lista = SISTEMA[linha].estacoes;
  const idxI = lista.indexOf(estacaoInicio);
  const idxF = lista.indexOf(estacaoFim);
  return idxF > idxI ? lista[lista.length - 1] : lista[0];
}

function periodoAtual() {
  const hora = new Date().getHours();
  if ((hora >= 7 && hora < 9) || (hora >= 17 && hora < 20)) return 'pico';
  if (hora >= 6 && hora < 23) return 'normal';
  return 'baixo';
}

module.exports = {
  linhasDaEstacao, TODAS_ESTACOES, norm, encontrarEstacao, buscarSugestoes,
  bfs, dijkstra, calcularTempo, paradasUnicas, detectarBaldeacoes,
  agruparSegmentos, terminalDirecao, periodoAtual,
  TEMPO_TRANSBORDO, FATOR_PICO
};
