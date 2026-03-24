const readline = require('readline');
const {
  encontrarEstacao, bfs, dijkstra, calcularTempo,
  paradasUnicas, detectarBaldeacoes, agruparSegmentos,
  terminalDirecao, periodoAtual
} = require('./engine');
const { SISTEMA, ALERTAS, SEM_ELEVADOR, OPERACAO } = require('../data/sistema');

const C = {
  reset:'\x1b[0m', bold:'\x1b[1m', dim:'\x1b[2m',
  green:'\x1b[32m', yellow:'\x1b[33m', red:'\x1b[31m',
  cyan:'\x1b[36m', gray:'\x1b[90m'
};
const COR_LINHA = {
  L1:'\x1b[31m', L2:'\x1b[33m', L3:'\x1b[35m',
  L4:'\x1b[34m', L4A:'\x1b[36m', L5:'\x1b[32m', L6:'\x1b[95m'
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (p) => new Promise(r => rl.question(p, r));

function header() {
  console.clear();
  console.log('');
  console.log(C.bold + C.cyan +
    '  ╔══════════════════════════════════════════╗\n' +
    '  ║   🚇  Metro Santiago Navigator v2.1     ║\n' +
    '  ╚══════════════════════════════════════════╝' + C.reset);
  const agora = new Date();
  const hora = agora.toLocaleTimeString('es-CL', { hour:'2-digit', minute:'2-digit' });
  const per = periodoAtual();
  const perLabel = { pico:'⚡ Horário de Pico', normal:'✅ Normal', baixo:'🌙 Reduzido' };
  const dow = agora.getDay();
  const opKey = dow===0?'domingo':dow===6?'sabado':'semana';
  const op = OPERACAO[opKey];
  console.log(C.gray + `  ${hora}  ${perLabel[per]}  ·  Operação: ${op.abertura}–${op.fechamento}` + C.reset);
  console.log('');
}

function sep(char='─', len=46) { return C.gray + '  ' + char.repeat(len) + C.reset; }

// ── MUDANÇA 1: recebe tempo já calculado pelo Dijkstra ──
function imprimirRota(path, modo, tempoPreCalc) {
  const tempo = tempoPreCalc ?? calcularTempo(path);
  const paradas = paradasUnicas(path);
  const bals = detectarBaldeacoes(path);
  const segs = agruparSegmentos(path);

  console.log('\n' + sep('═'));
  console.log(C.bold + '  ROTA CALCULADA' + C.reset +
    C.gray + `  [${modo === 'rapida' ? '⚡ tempo mínimo' : '🛑 menos paradas'}]` + C.reset);
  console.log(sep('═') + '\n');
  console.log(C.bold + C.yellow + `  ⏱  ${tempo} min` + C.reset +
    C.gray + '  ·  ' + C.reset +
    C.bold + `${paradas.length - 1} paradas` + C.reset +
    C.gray + '  ·  ' + C.reset +
    C.bold + `${bals.length} baldeação(ões)` + C.reset);
  console.log('\n' + sep() + '\n');

  segs.forEach((seg, si) => {
    const cl = COR_LINHA[seg.linha] || '';
    const terminal = terminalDirecao(seg.linha, seg.estacoes[0], seg.estacoes[seg.estacoes.length - 1]);
    const prefixo = si === 0 ? '📍' : '🔄';

    console.log(`  ${prefixo} ${C.bold}${seg.estacoes[0]}${C.reset}`);
    console.log(C.gray + '  │' + C.reset + cl + C.bold + ` [${seg.linha}]` + C.reset +
      C.gray + ` sentido → ${C.reset}${C.bold}${terminal.toUpperCase()}${C.reset}`);

    seg.estacoes.slice(1, -1).forEach(e => {
      console.log(C.gray + `  │    · ${e}` + C.reset);
    });

    if (seg.estacoes.length > 1) {
      const ultimo = seg.estacoes[seg.estacoes.length - 1];
      const isDestino = si === segs.length - 1;
      if (isDestino) console.log(`  🏁 ${C.bold}${C.green}${ultimo}${C.reset}`);
      else console.log(`  ${C.gray}└─${C.reset} ${ultimo}`);
    }

    if (si < segs.length - 1) {
      const proxLinha = segs[si + 1].linha;
      const clProx = COR_LINHA[proxLinha] || '';
      console.log('\n' + C.yellow + '  ⇄  BALDEAÇÃO' + C.reset +
        C.gray + ` em ${seg.estacoes[seg.estacoes.length - 1]}  →  ` + C.reset +
        clProx + C.bold + proxLinha + C.reset +
        C.gray + '  (~4 min)' + C.reset + '\n');
    }
  });

  const estacoesNaRota = [...new Set(path.map(n => n.estacao))];

  const alertas = estacoesNaRota.filter(e => ALERTAS[e]);
  if (alertas.length) {
    console.log('\n' + sep());
    console.log(C.yellow + '  ⚠  ALERTAS' + C.reset);
    alertas.forEach(e => console.log(C.gray + `  · ${e}: ` + C.reset + ALERTAS[e]));
  }

  const semEle = estacoesNaRota.filter(e => SEM_ELEVADOR.has(e));
  if (semEle.length) {
    console.log('\n' + C.cyan + '  ♿ Sem elevador confirmado:' + C.reset);
    semEle.forEach(e => console.log(C.gray + `     · ${e}` + C.reset));
  }

  console.log('\n' + sep('═') + '\n');
}

async function loop() {
  header();
  while (true) {
    let origem = null;
    while (!origem) {
      const inp = await ask('  Origem  (nome / sigla / SAIR): ');
      if (inp.trim().toLowerCase() === 'sair') {
        console.log('\n  ' + C.cyan + 'Hasta la vista! 🚇' + C.reset + '\n');
        rl.close(); return;
      }
      origem = encontrarEstacao(inp.trim());
      if (!origem) console.log(C.red + '  ✗ Estação não encontrada.' + C.reset);
      else console.log(C.green + `  ✓ Origem: ${origem}` + C.reset);
    }

    let destino = null;
    while (!destino) {
      const inp = await ask('  Destino (nome / sigla): ');
      destino = encontrarEstacao(inp.trim());
      if (!destino) console.log(C.red + '  ✗ Estação não encontrada.' + C.reset);
      else if (destino === origem) {
        console.log(C.yellow + '  ⚠ Origem e destino são iguais.' + C.reset);
        destino = null;
      } else console.log(C.green + `  ✓ Destino: ${destino}` + C.reset);
    }

    // ── MUDANÇA 2: Dijkstra agora é opção 1 (padrão) ──
    console.log('\n  Modo de rota:');
    console.log(
      C.gray + '  [1] ⚡ Tempo mínimo   (Dijkstra)\n' +
               '  [2] 🛑 Menos paradas  (BFS)' + C.reset + '\n'
    );
    const escolha = (await ask('  Escolha [1/2, Enter=1]: ')).trim();
    const modo = escolha === '2' ? 'paradas' : 'rapida';

    let path = null;
    let tempoPreCalc = null;

    if (modo === 'rapida') {
      const r = dijkstra(origem, destino);
      path = r?.path || null;
      tempoPreCalc = r?.tempo || null;  // usa o tempo já calculado pelo Dijkstra
    } else {
      path = bfs(origem, destino);
    }

    if (!path) {
      console.log(C.red + '\n  ✗ Rota não encontrada.\n' + C.reset);
    } else {
      imprimirRota(path, modo, tempoPreCalc);
    }

    const cont = await ask('  Nova busca? [S/n]: ');
    if (cont.trim().toLowerCase() === 'n') {
      console.log('\n  ' + C.cyan + 'Hasta la vista! 🚇' + C.reset + '\n');
      rl.close(); return;
    }
    header();
  }
}

loop().catch(err => { console.error(err); rl.close(); });
