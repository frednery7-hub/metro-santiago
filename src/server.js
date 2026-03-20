const express = require('express');
const path = require('path');
const {
  encontrarEstacao, buscarSugestoes, bfs, dijkstra, calcularTempo,
  paradasUnicas, detectarBaldeacoes, agruparSegmentos, terminalDirecao,
  periodoAtual, TODAS_ESTACOES
} = require('./engine');
const { SISTEMA, ALERTAS, SEM_ELEVADOR, OPERACAO } = require('../data/sistema');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/sugestoes', (req, res) => {
  const { q = '', limite = 8 } = req.query;
  const sugestoes = buscarSugestoes(q, Number(limite));
  const resultado = sugestoes.map(nome => ({
    nome,
    linhas: Object.keys(SISTEMA).filter(l => SISTEMA[l].estacoes.includes(nome)),
    cores: Object.entries(SISTEMA)
      .filter(([, v]) => v.estacoes.includes(nome))
      .reduce((acc, [k, v]) => ({ ...acc, [k]: v.cor }), {})
  }));
  res.json(resultado);
});

app.post('/api/rota', (req, res) => {
  const { origem: ov, destino: dv, modo = 'paradas', acessivel = false } = req.body;
  const origem = encontrarEstacao(ov);
  const destino = encontrarEstacao(dv);

  if (!origem)  return res.status(400).json({ erro: 'Origem não reconhecida' });
  if (!destino) return res.status(400).json({ erro: 'Destino não reconhecido' });
  if (origem === destino) return res.status(400).json({ erro: 'Origem e destino são iguais' });

  let path, tempo;
  if (modo === 'rapida') {
    const r = dijkstra(origem, destino);
    if (!r) return res.status(404).json({ erro: 'Rota não encontrada' });
    path = r.path; tempo = r.tempo;
  } else {
    path = bfs(origem, destino);
    if (!path) return res.status(404).json({ erro: 'Rota não encontrada' });
    tempo = calcularTempo(path);
  }

  const paradas = paradasUnicas(path);
  const baldeacoes = detectarBaldeacoes(path);
  const segmentos = agruparSegmentos(path);

  const segmentosRich = segmentos.map(seg => {
    const terminal = terminalDirecao(seg.linha, seg.estacoes[0], seg.estacoes[seg.estacoes.length - 1]);
    return {
      linha: seg.linha,
      cor: SISTEMA[seg.linha].cor,
      nomeLinha: SISTEMA[seg.linha].nome,
      estacoes: seg.estacoes,
      terminal,
      intermediarias: seg.estacoes.slice(1, -1)
    };
  });

  const estacoesNaRota = [...new Set(path.map(n => n.estacao))];
  const alertas = estacoesNaRota.filter(e => ALERTAS[e]).map(e => ({ estacao: e, mensagem: ALERTAS[e] }));
  const restricoes = acessivel ? estacoesNaRota.filter(e => SEM_ELEVADOR.has(e)) : [];

  res.json({
    origem, destino, modo, tempo,
    numParadas: paradas.length - 1,
    numBaldeacoes: baldeacoes.length,
    periodo: periodoAtual(),
    segmentos: segmentosRich,
    baldeacoes, alertas,
    restricoesAcessibilidade: restricoes
  });
});

app.get('/api/estacao', (req, res) => {
  const nome = encontrarEstacao(req.query.q || '');
  if (!nome) return res.status(404).json({ encontrada: false });
  const linhas = Object.keys(SISTEMA).filter(l => SISTEMA[l].estacoes.includes(nome));
  res.json({
    encontrada: true, nome, linhas,
    cores: linhas.reduce((acc, l) => ({ ...acc, [l]: SISTEMA[l].cor }), {}),
    alerta: ALERTAS[nome] || null,
    semElevador: SEM_ELEVADOR.has(nome)
  });
});

app.get('/api/sistema', (req, res) => {
  const agora = new Date();
  const dow = agora.getDay();
  const opKey = dow === 0 ? 'domingo' : dow === 6 ? 'sabado' : 'semana';
  res.json({
    linhas: Object.entries(SISTEMA).map(([id, l]) => ({
      id, nome: l.nome, cor: l.cor,
      total: l.estacoes.length,
      inicio: l.estacoes[0],
      fim: l.estacoes[l.estacoes.length - 1],
      estacoes: l.estacoes
    })),
    totalEstacoes: TODAS_ESTACOES.length,
    operacao: OPERACAO[opKey],
    periodo: periodoAtual()
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log('');
  console.log('  ╔══════════════════════════════════════╗');
  console.log('  ║   🚇  Metro Santiago Navigator       ║');
  console.log('  ╠══════════════════════════════════════╣');
  console.log(`  ║   http://localhost:${PORT}               ║`);
  console.log('  ║                                      ║');
  console.log('  ║   npm start  →  app web              ║');
  console.log('  ║   npm run cli → terminal             ║');
  console.log('  ╚══════════════════════════════════════╝');
  console.log('');
});
