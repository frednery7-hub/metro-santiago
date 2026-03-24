const PONTOS = [
  { nome: 'Plaza de Armas', categoria: 'turismo', estacao: 'Plaza de Armas', descricao: 'Principal praca de Santiago', tags: ['praca', 'centro', 'historico'] },
  { nome: 'Catedral Metropolitana', categoria: 'turismo', estacao: 'Plaza de Armas', descricao: 'Catedral historica do seculo XVIII', tags: ['catedral', 'igreja', 'historico'] },
  { nome: 'Museo Historico Nacional', categoria: 'turismo', estacao: 'Plaza de Armas', descricao: 'Museu sobre a historia do Chile', tags: ['museu', 'historia', 'cultura'] },
  { nome: 'Museo de Arte Precolombino', categoria: 'turismo', estacao: 'Plaza de Armas', descricao: 'Museu de arte pre-colombiana do Chile', tags: ['museu', 'arte', 'cultura'] },
  { nome: 'Mercado Central', categoria: 'turismo', estacao: 'Puente Cal y Canto', descricao: 'Mercado historico de frutos do mar', tags: ['mercado', 'comida', 'historico'] },
  { nome: 'Palacio de la Moneda', categoria: 'turismo', estacao: 'La Moneda', descricao: 'Sede do governo chileno', tags: ['governo', 'historico', 'palacio'] },
  { nome: 'Centro Cultural La Moneda', categoria: 'turismo', estacao: 'La Moneda', descricao: 'Centro cultural com exposicoes gratuitas', tags: ['cultura', 'arte', 'gratuito'] },
  { nome: 'Cerro Santa Lucia', categoria: 'turismo', estacao: 'Santa Lucia', descricao: 'Parque historico com vistas panoramicas', tags: ['parque', 'cerro', 'vista'] },
  { nome: 'Museo Nacional de Bellas Artes', categoria: 'turismo', estacao: 'Bellas Artes', descricao: 'Principal museu de arte do Chile', tags: ['museu', 'arte', 'gratuito'] },
  { nome: 'Barrio Bellavista', categoria: 'turismo', estacao: 'Baquedano', descricao: 'Bairro bohemio com bares e restaurantes', tags: ['bairro', 'bares', 'noturno', 'bellavista'] },
  { nome: 'Casa de Pablo Neruda La Chascona', categoria: 'turismo', estacao: 'Baquedano', descricao: 'Casa do poeta Pablo Neruda, hoje museu', tags: ['neruda', 'museu', 'poeta', 'chascona'] },
  { nome: 'Parque Metropolitano Cerro San Cristobal', categoria: 'turismo', estacao: 'Baquedano', descricao: 'Maior parque urbano de Santiago com zoologico', tags: ['parque', 'cerro', 'zoo', 'natureza'] },
  { nome: 'Barrio Italia', categoria: 'turismo', estacao: 'Irarrazaval', descricao: 'Bairro criativo com cafes e design', tags: ['bairro', 'italia', 'cafe', 'design'] },
  { nome: 'Parque OHiggins', categoria: 'turismo', estacao: 'Parque OHiggins', descricao: 'Grande parque publico com lazer', tags: ['parque', 'ohiggins', 'lazer'] },
  { nome: 'Fantasilandia', categoria: 'turismo', estacao: 'Parque OHiggins', descricao: 'Parque de diversoes', tags: ['diversao', 'criancas', 'fantasilandia'] },
  { nome: 'Museo Interactivo Mirador MIM', categoria: 'turismo', estacao: 'Mirador', descricao: 'Museu de ciencias interativo para familias', tags: ['museu', 'ciencias', 'criancas', 'mim'] },
  { nome: 'Barrio Lastarria', categoria: 'turismo', estacao: 'Universidad Catolica', descricao: 'Bairro cultural com teatros e cafes', tags: ['bairro', 'lastarria', 'teatro', 'cafe'] },
  { nome: 'Barrio Patronato', categoria: 'turismo', estacao: 'Patronato', descricao: 'Bairro multicultural com moda e gastronomia arabe', tags: ['bairro', 'patronato', 'moda', 'arabe'] },
  { nome: 'Estadio Nacional', categoria: 'turismo', estacao: 'Estadio Nacional', descricao: 'Principal estadio do Chile', tags: ['estadio', 'futebol', 'esporte'] },
  { nome: 'Pueblito Los Dominicos', categoria: 'turismo', estacao: 'Los Dominicos', descricao: 'Vila artesanal com produtos tipicos chilenos', tags: ['artesanato', 'tipico', 'chile'] },
  { nome: 'Sky Costanera Mirante', categoria: 'turismo', estacao: 'Tobalaba', descricao: 'Mirante no edificio mais alto da America do Sul', tags: ['mirante', 'costanera', 'vista'] },
  { nome: 'Parque Bustamante', categoria: 'turismo', estacao: 'Parque Bustamante', descricao: 'Parque com lazer e skate', tags: ['parque', 'lazer', 'skate'] },
  { nome: 'Cementerio General', categoria: 'turismo', estacao: 'Cementerios', descricao: 'Cemiterio historico com monumentos', tags: ['cemiterio', 'historia'] },
  { nome: 'Hospital Clinico Universidad de Chile', categoria: 'saude', estacao: 'Universidad de Chile', descricao: 'Hospital universitario publico de referencia', tags: ['hospital', 'publico', 'uchile'] },
  { nome: 'Clinica Santa Maria', categoria: 'saude', estacao: 'Pedro de Valdivia', descricao: 'Clinica privada em Providencia', tags: ['clinica', 'privada', 'santa maria'] },
  { nome: 'Clinica Las Condes', categoria: 'saude', estacao: 'Escuela Militar', descricao: 'Principal clinica privada do Chile', tags: ['clinica', 'privada', 'las condes'] },
  { nome: 'Hospital El Pino', categoria: 'saude', estacao: 'Hospital El Pino', descricao: 'Hospital publico no sul de Santiago', tags: ['hospital', 'publico', 'sul'] },
  { nome: 'Hospital Sotero del Rio', categoria: 'saude', estacao: 'Hospital Sotero del Rio', descricao: 'Hospital publico de alta complexidade', tags: ['hospital', 'publico', 'puente alto'] },
  { nome: 'Hospital Barros Luco', categoria: 'saude', estacao: 'Parque OHiggins', descricao: 'Hospital publico para Santiago Sul', tags: ['hospital', 'publico', 'sul'] },
  { nome: 'Clinica Alemana', categoria: 'saude', estacao: 'Manquehue', descricao: 'Referencia em medicina de alta complexidade', tags: ['clinica', 'privada', 'alemana'] },
  { nome: 'Hospital San Borja Arriaran', categoria: 'saude', estacao: 'Republica', descricao: 'Hospital publico com maternidade', tags: ['hospital', 'publico', 'maternidade'] },
  { nome: 'Hospital Roberto del Rio', categoria: 'saude', estacao: 'Cerro Blanco', descricao: 'Hospital pediatrico publico', tags: ['hospital', 'pediatrico', 'criancas'] },
  { nome: 'CESFAM Quinta Normal', categoria: 'saude', estacao: 'Quinta Normal', descricao: 'Centro de saude familiar publico', tags: ['cesfam', 'saude', 'publico'] },
  { nome: 'Clinica Indisa', categoria: 'saude', estacao: 'Salvador', descricao: 'Clinica privada com emergencias 24h', tags: ['clinica', 'privada', 'emergencia'] },
  { nome: 'Hospital Exequiel Gonzalez Cortes', categoria: 'saude', estacao: 'San Miguel', descricao: 'Hospital pediatrico publico no sul', tags: ['hospital', 'pediatrico', 'criancas'] },
  { nome: 'Instituto Nacional del Cancer', categoria: 'saude', estacao: 'Patronato', descricao: 'Centro de oncologia de referencia nacional', tags: ['cancer', 'oncologia', 'publico'] },
  { nome: 'Hospital de Urgencia Asistencia Publica', categoria: 'saude', estacao: 'Parque Almagro', descricao: 'Pronto-socorro publico 24h', tags: ['hospital', 'urgencia', 'emergencia', '24h'] },
  { nome: 'Clinica Davila', categoria: 'saude', estacao: 'Zapadores', descricao: 'Clinica privada no norte com emergencias 24h', tags: ['clinica', 'privada', 'emergencia', 'norte'] },
  { nome: 'Hospital Militar', categoria: 'saude', estacao: 'Escuela Militar', descricao: 'Hospital das Forcas Armadas', tags: ['hospital', 'militar'] },
  { nome: 'Universidad de Chile', categoria: 'educacao', estacao: 'Universidad de Chile', descricao: 'Principal universidade publica do Chile', tags: ['universidade', 'publica', 'uchile'] },
  { nome: 'Pontificia Universidad Catolica', categoria: 'educacao', estacao: 'Universidad Catolica', descricao: 'Uma das melhores universidades da America Latina', tags: ['universidade', 'catolica', 'puc'] },
  { nome: 'Universidad de Santiago USACH', categoria: 'educacao', estacao: 'Universidad de Santiago', descricao: 'Universidade publica de tecnologia', tags: ['universidade', 'usach', 'publica'] },
  { nome: 'Universidad Diego Portales', categoria: 'educacao', estacao: 'Toesca', descricao: 'Universidade privada no centro', tags: ['universidade', 'privada', 'udp'] },
  { nome: 'Universidad Autonoma de Chile', categoria: 'educacao', estacao: 'Los Heroes', descricao: 'Universidade privada central', tags: ['universidade', 'privada', 'autonoma'] },
  { nome: 'DUOC UC Sede Centro', categoria: 'educacao', estacao: 'La Moneda', descricao: 'Instituto tecnico superior', tags: ['instituto', 'tecnico', 'duoc'] },
  { nome: 'Instituto Nacional', categoria: 'educacao', estacao: 'Parque Almagro', descricao: 'Colegio mais tradicional do Chile', tags: ['colegio', 'escola', 'publico'] },
  { nome: 'Liceo de Aplicacion', categoria: 'educacao', estacao: 'Republica', descricao: 'Tradicional colegio publico', tags: ['liceo', 'escola', 'publico'] },
  { nome: 'Colegio San Ignacio', categoria: 'educacao', estacao: 'Baquedano', descricao: 'Tradicional colegio jesuita', tags: ['colegio', 'jesuita', 'privado'] },
  { nome: 'Universidad Mayor', categoria: 'educacao', estacao: 'Manuel Montt', descricao: 'Universidade privada em Providencia', tags: ['universidade', 'privada'] },
  { nome: 'Universidad Andres Bello', categoria: 'educacao', estacao: 'Los Leones', descricao: 'Universidade privada em Providencia', tags: ['universidade', 'privada', 'unab'] },
  { nome: 'INACAP Santiago Centro', categoria: 'educacao', estacao: 'Franklin', descricao: 'Instituto tecnico profissional', tags: ['instituto', 'tecnico', 'inacap'] },
  { nome: 'Universidad de Las Americas', categoria: 'educacao', estacao: 'Ecuador', descricao: 'Universidade privada em Santiago', tags: ['universidade', 'privada', 'udla'] },
  { nome: 'Biblioteca de Santiago', categoria: 'educacao', estacao: 'Puente Cal y Canto', descricao: 'Maior biblioteca publica do Chile', tags: ['biblioteca', 'publica', 'gratuito'] },
  { nome: 'Biblioteca Nacional', categoria: 'educacao', estacao: 'Universidad de Chile', descricao: 'Acervo historico do Chile', tags: ['biblioteca', 'nacional', 'historia'] },
  { nome: 'Universidad Central', categoria: 'educacao', estacao: 'Los Heroes', descricao: 'Universidade privada no centro', tags: ['universidade', 'privada'] },
  { nome: 'Costanera Center', categoria: 'comercio', estacao: 'Tobalaba', descricao: 'Maior shopping da America do Sul', tags: ['shopping', 'mall', 'costanera'] },
  { nome: 'Mall Parque Arauco', categoria: 'comercio', estacao: 'Escuela Militar', descricao: 'Shopping de alto padrao em Las Condes', tags: ['shopping', 'mall', 'arauco'] },
  { nome: 'Alto Las Condes', categoria: 'comercio', estacao: 'Manquehue', descricao: 'Shopping premium com lojas internacionais', tags: ['shopping', 'mall', 'las condes', 'premium'] },
  { nome: 'Mall Plaza Vespucio', categoria: 'comercio', estacao: 'Vicuna Mackenna', descricao: 'Shopping no sul de Santiago', tags: ['shopping', 'mall', 'vespucio'] },
  { nome: 'Mall Plaza Norte', categoria: 'comercio', estacao: 'Vespucio Norte', descricao: 'Shopping no norte de Santiago', tags: ['shopping', 'mall', 'norte'] },
  { nome: 'Mall Plaza Sur', categoria: 'comercio', estacao: 'La Cisterna', descricao: 'Shopping no sul com cinema', tags: ['shopping', 'mall', 'sul', 'cinema'] },
  { nome: 'Apumanque', categoria: 'comercio', estacao: 'Los Leones', descricao: 'Centro comercial em Providencia', tags: ['shopping', 'providencia', 'apumanque'] },
  { nome: 'Mercado Tirso de Molina', categoria: 'comercio', estacao: 'Puente Cal y Canto', descricao: 'Mercado popular com frutas e verduras', tags: ['mercado', 'frutas', 'popular'] },
  { nome: 'Galeria Espana', categoria: 'comercio', estacao: 'Universidad de Chile', descricao: 'Galeria comercial no centro', tags: ['galeria', 'comercio', 'centro'] },
  { nome: 'Mall Plaza Egana', categoria: 'comercio', estacao: 'Plaza Egana', descricao: 'Shopping em Nunoa com cinema', tags: ['shopping', 'mall', 'nunoa', 'cinema'] },
  { nome: 'Paseo Ahumada', categoria: 'comercio', estacao: 'Universidad de Chile', descricao: 'Principal rua comercial de Santiago', tags: ['paseo', 'comercio', 'centro', 'ahumada'] },
  { nome: 'Mall Arauco Maipu', categoria: 'comercio', estacao: 'Plaza de Maipu', descricao: 'Grande shopping em Maipu', tags: ['shopping', 'mall', 'maipu'] },
  { nome: 'Mall Florida Center', categoria: 'comercio', estacao: 'Bellavista de la Florida', descricao: 'Shopping em La Florida', tags: ['shopping', 'mall', 'florida'] },
  { nome: 'Paseo Estado', categoria: 'comercio', estacao: 'La Moneda', descricao: 'Rua comercial pedestre no centro', tags: ['paseo', 'comercio', 'centro'] },
  { nome: 'Mall Plaza Tobalaba', categoria: 'comercio', estacao: 'Tobalaba', descricao: 'Shopping entre Providencia e Las Condes', tags: ['shopping', 'mall', 'tobalaba'] },
  { nome: 'Restaurante El Hoyo', categoria: 'restaurante', estacao: 'Union Latinoamericana', descricao: 'Tradicional restaurante chileno de 1912', tags: ['restaurante', 'chileno', 'tradicional'] },
  { nome: 'Mercado Central Restaurantes', categoria: 'restaurante', estacao: 'Puente Cal y Canto', descricao: 'Restaurantes de frutos do mar', tags: ['restaurante', 'frutos do mar', 'peixe'] },
  { nome: 'Barrio Bellavista Gastronomia', categoria: 'restaurante', estacao: 'Baquedano', descricao: 'Bares e restaurantes variados', tags: ['restaurante', 'bar', 'jantar', 'bellavista'] },
  { nome: 'Barrio Italia Cafes e Bistros', categoria: 'restaurante', estacao: 'Irarrazaval', descricao: 'Cafes artesanais e bistros', tags: ['cafe', 'bistro', 'italia', 'artesanal'] },
  { nome: 'Tirso de Molina Comida Popular', categoria: 'restaurante', estacao: 'Puente Cal y Canto', descricao: 'Comida chilena popular e barata', tags: ['comida', 'popular', 'barato', 'chileno'] },
  { nome: 'Barrio Lastarria Cafes', categoria: 'restaurante', estacao: 'Universidad Catolica', descricao: 'Cafes e restaurantes culturais', tags: ['cafe', 'restaurante', 'lastarria'] },
  { nome: 'Patronato Gastronomia Arabe', categoria: 'restaurante', estacao: 'Patronato', descricao: 'Restaurantes arabes e do Oriente Medio', tags: ['restaurante', 'arabe', 'oriente medio'] },
  { nome: 'Pueblito Los Dominicos Gastronomia', categoria: 'restaurante', estacao: 'Los Dominicos', descricao: 'Comida tipica chilena na vila artesanal', tags: ['restaurante', 'chileno', 'tipico'] },
  { nome: 'Farmacias Ahumada Centro', categoria: 'farmacia', estacao: 'Universidad de Chile', descricao: 'Farmacia no centro aberta 24h', tags: ['farmacia', 'remedios', 'ahumada', '24h'] },
  { nome: 'Cruz Verde Baquedano', categoria: 'farmacia', estacao: 'Baquedano', descricao: 'Farmacia Cruz Verde em Baquedano', tags: ['farmacia', 'remedios', 'cruz verde'] },
  { nome: 'Salcobrand Los Leones', categoria: 'farmacia', estacao: 'Los Leones', descricao: 'Farmacia Salcobrand em Providencia', tags: ['farmacia', 'remedios', 'salcobrand'] },
  { nome: 'Farmacias Ahumada Tobalaba', categoria: 'farmacia', estacao: 'Tobalaba', descricao: 'Farmacia Ahumada em Tobalaba', tags: ['farmacia', 'remedios', 'ahumada'] },
  { nome: 'Cruz Verde Plaza de Armas', categoria: 'farmacia', estacao: 'Plaza de Armas', descricao: 'Farmacia Cruz Verde no centro', tags: ['farmacia', 'remedios', 'cruz verde'] },
  { nome: 'Salcobrand Escuela Militar', categoria: 'farmacia', estacao: 'Escuela Militar', descricao: 'Farmacia Salcobrand em Las Condes', tags: ['farmacia', 'remedios', 'salcobrand'] },
  { nome: 'Cruz Verde Maipu', categoria: 'farmacia', estacao: 'Plaza de Maipu', descricao: 'Farmacia Cruz Verde em Maipu', tags: ['farmacia', 'remedios', 'cruz verde'] },
  { nome: 'Farmacias Ahumada La Cisterna', categoria: 'farmacia', estacao: 'La Cisterna', descricao: 'Farmacia Ahumada no sul', tags: ['farmacia', 'remedios', 'ahumada'] },
  { nome: 'Parque Forestal', categoria: 'parque', estacao: 'Bellas Artes', descricao: 'Parque linear as margens do Rio Mapocho', tags: ['parque', 'verde', 'caminhada', 'mapocho'] },
  { nome: 'Parque Balmaceda', categoria: 'parque', estacao: 'Salvador', descricao: 'Parque historico em Providencia', tags: ['parque', 'verde', 'providencia'] },
  { nome: 'Parque de Las Esculturas', categoria: 'parque', estacao: 'Pedro de Valdivia', descricao: 'Parque com esculturas de artistas chilenos', tags: ['parque', 'arte', 'escultura'] },
  { nome: 'Parque Metropolitano Zoologico', categoria: 'parque', estacao: 'Baquedano', descricao: 'Zoologico no Cerro San Cristobal', tags: ['parque', 'zoo', 'animais', 'criancas'] },
  { nome: 'Parque OHiggins', categoria: 'parque', estacao: 'Parque OHiggins', descricao: 'Grande parque publico com lagos', tags: ['parque', 'verde', 'lago', 'ohiggins'] },
  { nome: 'Parque Bustamante', categoria: 'parque', estacao: 'Parque Bustamante', descricao: 'Parque com ciclovias e skate', tags: ['parque', 'ciclovia', 'skate'] },
  { nome: 'Parque Quinta Normal', categoria: 'parque', estacao: 'Quinta Normal', descricao: 'Parque historico com museus e lago', tags: ['parque', 'museu', 'lago'] },
  { nome: 'Parque Cerro Navia', categoria: 'parque', estacao: 'Neptuno', descricao: 'Area verde no oeste de Santiago', tags: ['parque', 'cerro', 'verde'] },
  { nome: 'Carabineros Centro', categoria: 'seguranca', estacao: 'Plaza de Armas', descricao: 'Principal delegacia do centro historico', tags: ['policia', 'carabineros', 'delegacia', 'centro'] },
  { nome: 'Carabineros Providencia', categoria: 'seguranca', estacao: 'Pedro de Valdivia', descricao: 'Delegacia de Carabineros em Providencia', tags: ['policia', 'carabineros', 'delegacia'] },
  { nome: 'Carabineros Las Condes', categoria: 'seguranca', estacao: 'Escuela Militar', descricao: 'Delegacia de Carabineros em Las Condes', tags: ['policia', 'carabineros', 'delegacia'] },
  { nome: 'Carabineros Maipu', categoria: 'seguranca', estacao: 'Plaza de Maipu', descricao: 'Delegacia de Carabineros em Maipu', tags: ['policia', 'carabineros', 'delegacia'] },
  { nome: 'Carabineros La Florida', categoria: 'seguranca', estacao: 'Bellavista de la Florida', descricao: 'Delegacia de Carabineros em La Florida', tags: ['policia', 'carabineros', 'delegacia'] },
  { nome: 'PDI Policia de Investigaciones', categoria: 'seguranca', estacao: 'Republica', descricao: 'Sede central da Policia de Investigacoes', tags: ['policia', 'pdi', 'investigacao'] },
  { nome: 'Carabineros Nunoa', categoria: 'seguranca', estacao: 'Nunoa', descricao: 'Delegacia de Carabineros em Nunoa', tags: ['policia', 'carabineros', 'delegacia'] },
  { nome: 'Carabineros Puente Alto', categoria: 'seguranca', estacao: 'Plaza de Puente Alto', descricao: 'Delegacia de Carabineros em Puente Alto', tags: ['policia', 'carabineros', 'delegacia'] }
];

function norm(t) {
  return (t || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9 ]/g, '').trim();
}

function buscarPonto(termo) {
  if (!termo || termo.trim().length < 2) return [];
  var palavras = norm(termo).split(' ').filter(function(p) { return p.length > 1; });
  return PONTOS.filter(function(p) {
    var tudo = norm(p.nome) + ' ' + norm(p.descricao) + ' ' + p.tags.map(norm).join(' ') + ' ' + norm(p.categoria);
    return palavras.some(function(palavra) { return tudo.includes(palavra); });
  }).sort(function(a, b) {
    var aNome = norm(a.nome).includes(norm(termo)) ? 0 : 1;
    var bNome = norm(b.nome).includes(norm(termo)) ? 0 : 1;
    return aNome - bNome;
  });
}

function pontosPorEstacao(estacao) {
  return PONTOS.filter(function(p) { return p.estacao === estacao; });
}

function estacaoDoPoint(nomePonto) {
  var busca = norm(nomePonto);
  var encontrado = PONTOS.find(function(p) { return norm(p.nome).includes(busca); });
  return encontrado ? { estacao: encontrado.estacao, ponto: encontrado } : null;
}

var CATEGORIAS = {
  turismo:     { label: 'Turismo e Cultura',      emoji: '🏛'  },
  saude:       { label: 'Saude',                  emoji: '🏥'  },
  educacao:    { label: 'Educacao',               emoji: '🎓'  },
  comercio:    { label: 'Shoppings e Comercio',   emoji: '🛍'  },
  restaurante: { label: 'Restaurantes',           emoji: '🍽'  },
  farmacia:    { label: 'Farmacias',              emoji: '💊'  },
  parque:      { label: 'Parques e Areas Verdes', emoji: '🌳'  },
  seguranca:   { label: 'Delegacias e Seguranca', emoji: '🚔'  }
};

module.exports = { PONTOS: PONTOS, CATEGORIAS: CATEGORIAS, buscarPonto: buscarPonto, pontosPorEstacao: pontosPorEstacao, estacaoDoPoint: estacaoDoPoint };
