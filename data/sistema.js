const SISTEMA = {
  L1: {
    cor: '#e3051b', nome: 'Linha 1',
    estacoes: [
      'San Pablo','Neptuno','Pajaritos','Las Rejas','Ecuador',
      'San Alberto Hurtado','Estacion Central','Republica','Los Heroes',
      'La Moneda','Universidad de Chile','Santa Lucia','Universidad Catolica',
      'Baquedano','Salvador','Pedro de Valdivia','Los Leones','Tobalaba',
      'El Golf','Alcantara','Escuela Militar','Manquehue',
      'Hernando de Magallanes','Los Dominicos'
    ]
  },
  L2: {
    cor: '#f5a800', nome: 'Linha 2',
    estacoes: [
      'Vespucio Norte','Zapadores','Dorsal','Einstein','Cementerios',
      'Cerro Blanco','Patronato','Puente Cal y Canto','Santa Ana',
      'Los Heroes','Toesca','Parque OHiggins','Rondizzoni','Franklin',
      'Bio Bio','Lo Valledor','Presidente Pedro Aguirre Cerda','El Llano',
      'San Miguel','Departamental','Ciudad del Nino','Lo Ovalle',
      'El Parron','La Cisterna','San Ramon','Hospital El Pino'
    ]
  },
  L3: {
    cor: '#8b5304', nome: 'Linha 3',
    estacoes: [
      'Los Libertadores','Cardenal Caro','Vivaceta','Conchali',
      'Plaza Chabuco','Hospitales','Puente Cal y Canto','Plaza de Armas',
      'Universidad de Chile','Parque Almagro','Matta','Irarrazaval',
      'Monsenor Eyzaguirre','Nunoa','Chile Espana','Villa Frei',
      'Plaza Egana','Fernando Castillo Velasco'
    ]
  },
  L4: {
    cor: '#0066cc', nome: 'Linha 4',
    estacoes: [
      'Tobalaba','Cristobal Colon','Francisco Bilbao','Principe de Gales',
      'Simon Bolivar','Plaza Egana','Los Orientales','Grecia',
      'Los Presidentes','Quilin','Las Torres','Macul','Vicuna Mackenna',
      'Vicente Valdes','Rojas Magallanes','Trinidad','San Jose de la Estrella',
      'Los Quillayes','Elisa Correa','Hospital Sotero del Rio',
      'Protectora de la Infancia','Las Mercedes','Plaza de Puente Alto'
    ]
  },
  L4A: {
    cor: '#00aacc', nome: 'Linha 4A',
    estacoes: [
      'Vicuna Mackenna','Santa Julia','La Granja','Santa Rosa',
      'San Ramon','La Cisterna'
    ]
  },
  L5: {
    cor: '#00aa44', nome: 'Linha 5',
    estacoes: [
      'Plaza de Maipu','Santiago Bueras','Del Sol','Monte Tabor',
      'Las Parcelas','Laguna Sur','Barrancas','Pudahuel','San Pablo',
      'Lo Prado','Blanqueado','Gruta de Lourdes','Quinta Normal',
      'Cumming','Santa Ana','Plaza de Armas','Bellas Artes','Baquedano',
      'Parque Bustamante','Santa Isabel','Irarrazaval','Nuble',
      'Rodrigo de Araya','Carlos Valdovinos','Camino Agricola',
      'San Joaquin','Pedrero','Mirador','Bellavista de La Florida',
      'Vicente Valdes'
    ]
  },
  L6: {
    cor: '#ad55e0e9', nome: 'Linha 6',
    estacoes: [
      'Cerrillos','Lo Valledor','Presidente Pedro Aguirre Cerda','Franklin',
      'Bio Bio','Nuble','Estadio Nacional','Nunoa','Ines de Suarez','Los Leones'
    ]
  }
};

const SIGLAS = {
  'LME':'Las Mercedes',          'PPA':'Plaza de Puente Alto',
  'TOB':'Tobalaba',              'VVA':'Vicente Valdes',
  'VMA':'Vicuna Mackenna',       'PEG':'Plaza Egana',
  'HSR':'Hospital Sotero del Rio','PIN':'Protectora de la Infancia',
  'LDO':'Los Dominicos',         'SPA':'San Pablo',
  'BAQ':'Baquedano',             'LHE':'Los Heroes',
  'UCH':'Universidad de Chile',  'ECE':'Estacion Central',
  'LLE':'Los Leones',            'BLF':'Bellavista de La Florida',
  'PMA':'Plaza de Maipu',        'SAN':'Santa Ana',
  'FRA':'Franklin',              'LCI':'La Cisterna',
  'PCC':'Puente Cal y Canto',    'PDV':'Pedro de Valdivia',
  'SAL':'Salvador',              'QUI':'Quilin',
  'MAC':'Macul',                 'NBL':'Nuble',
  'IRR':'Irarrazaval',           'NUN':'Nunoa',
  'PDA':'Plaza de Armas',        'BEL':'Bellas Artes',
  'PAC':'Presidente Pedro Aguirre Cerda', 'LVA':'Lo Valledor',
  'SAR':'San Ramon',             'DEP':'Departamental',
  'HEP':'Hospital El Pino',      'LLI':'Los Libertadores',
  'FCS':'Fernando Castillo Velasco',      'CER':'Cerrillos',
  'PQO':'Parque OHiggins',       'UCA':'Universidad Catolica'
};

const TEMPO_LINHA = { L1:1.8, L2:2.1, L3:2.0, L4:2.3, L4A:2.2, L5:2.0, L6:1.9 };
const TEMPO_BALDEACAO = 4;

const ALERTAS = {
  'Baquedano':                     'Saída restrita aos fins de semana após 20h',
  'Estacion Central':              'Plataforma L1 com capacidade reduzida — obras em andamento',
  'Los Heroes':                    'Baldeação L1↔L2: percurso interno de ~3 min',
  'Puente Cal y Canto':            'Baldeação L2↔L3: percurso interno de ~4 min',
  'Universidad de Chile':          'Baldeação L1↔L3: acesso pelo mezanino central',
  'Presidente Pedro Aguirre Cerda':'Baldeação L2↔L6: percurso interno de ~3 min',
  'Lo Valledor':                   'Baldeação L2↔L6: plataformas no mesmo nível',
  'San Ramon':                     'Baldeação L2↔L4A: acesso pela saída norte'
};

const SEM_ELEVADOR = new Set([
  'Neptuno','Dorsal','Copa lo Martinez',
  'Santiago Bueras','Del Sol','Cardenal Caro',
  'Vivaceta','Conchali','Plaza Chabuco',
  'Lo Valledor','San Ramon','Departamental'
]);

const OPERACAO = {
  semana:  { abertura: '06:00', fechamento: '23:00' },
  sabado:  { abertura: '06:30', fechamento: '23:00' },
  domingo: { abertura: '08:00', fechamento: '22:30' }
};

module.exports = { SISTEMA, SIGLAS, TEMPO_LINHA, TEMPO_BALDEACAO, ALERTAS, SEM_ELEVADOR, OPERACAO };
