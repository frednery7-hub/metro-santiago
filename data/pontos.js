const { buscarPonto, estacaoDoPoint, pontosPorEstacao } = require('../data/pontos');

// Buscar ponto e retornar estação mais próxima
app.get('/api/pontos', (req, res) => {
  const { q, estacao } = req.query;
  if (estacao) return res.json(pontosPorEstacao(estacao));
  if (q) {
    const pontos = buscarPonto(q);
    return res.json(pontos.map(p => ({
      ...p,
      sugestaoRota: p.estacao
    })));
  }
  res.json([]);
});
