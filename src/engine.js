const { SISTEMA, SIGLAS, TEMPO_LINHA, TEMPO_BALDEACAO } = require('../data/sistema');

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
  return TODAS_ESTACOES.find(e => norm(e).includes(busca)) || null;
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

function dijkstra(origem, destino) {
  const dist = {};
  const prev = {};
  const fila = [];

  for (const linha of linhasDaEstacao(origem)) {
    const k = `${origem}|${linha}`;
    dist[k] = 0;
    fila.push([0, origem, linha]);
  }

  const popMin = () => {
    let best = 0;
    for (let i = 1; i < fila.length; i++) if (fila[i][0] < fila[best][0]) best = i;
    return fila.splice(best, 1)[0];
  };

  while (fila.length) {
    const [custo, estacao, linha] = popMin();
    const k = `${estacao}|${linha}`;
    if (estacao === destino) return { path: _reconstruir(prev, k), tempo: Math.round(custo) };
    if (dist[k] !== undefined && custo > dist[k]) continue;

    const lista = SISTEMA[linha].estacoes;
    const idx = lista.indexOf(estacao);
    for (const delta of [-1, 1]) {
      const viz = lista[idx + delta];
      if (!viz) continue;
      const nc = custo + TEMPO_LINHA[linha];
      const nk = `${viz}|${linha}`;
      if (dist[nk] === undefined || nc < dist[nk]) {
        dist[nk] = nc; prev[nk] = k;
        fila.push([nc, viz, linha]);
      }
    }
    for (const outra of linhasDaEstacao(estacao)) {
      if (outra === linha) continue;
      const nc = custo + TEMPO_BALDEACAO;
      const nk = `${estacao}|${outra}`;
      if (dist[nk] === undefined || nc < dist[nk]) {
        dist[nk] = nc; prev[nk] = k;
        fila.push([nc, estacao, outra]);
      }
    }
  }
  return null;
}

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
  let t = 0;
  for (let i = 1; i < path.length; i++) {
    t += path[i].linha !== path[i - 1].linha ? TEMPO_BALDEACAO : TEMPO_LINHA[path[i].linha];
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
      bal.push({ estacao: path[i].estacao, de: path[i-1].linha, para: path[i].linha });
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
  agruparSegmentos, terminalDirecao, periodoAtual
};
