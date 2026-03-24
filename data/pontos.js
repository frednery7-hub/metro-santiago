// ==========================================
// BANCO DE PONTOS DE INTERESSE
// Metro de Santiago - pontos por estacao
// ==========================================

const PONTOS = [

// TURISMO E CULTURA
{ nome: ‘Plaza de Armas’,                         categoria: ‘turismo’,     estacao: ‘Plaza de Armas’,             descricao: ‘Principal praca de Santiago, centro historico da cidade’,                  tags: [‘praca’, ‘centro’, ‘historico’, ‘turismo’] },
{ nome: ‘Catedral Metropolitana’,                 categoria: ‘turismo’,     estacao: ‘Plaza de Armas’,             descricao: ‘Catedral historica do seculo XVIII, marco arquitetonico de Santiago’,      tags: [‘catedral’, ‘igreja’, ‘historico’, ‘religiao’] },
{ nome: ‘Museo Historico Nacional’,               categoria: ‘turismo’,     estacao: ‘Plaza de Armas’,             descricao: ‘Museu com acervo sobre a historia do Chile’,                               tags: [‘museu’, ‘historia’, ‘chile’, ‘cultura’] },
{ nome: ‘Museo de Arte Precolombino’,             categoria: ‘turismo’,     estacao: ‘Plaza de Armas’,             descricao: ‘Museu com maior acervo de arte pre-colombiana do Chile’,                   tags: [‘museu’, ‘arte’, ‘precolombino’, ‘cultura’] },
{ nome: ‘Mercado Central’,                        categoria: ‘turismo’,     estacao: ‘Puente Cal y Canto’,         descricao: ‘Mercado historico famoso por frutos do mar e gastronomia chilena’,        tags: [‘mercado’, ‘comida’, ‘frutos do mar’, ‘historico’] },
{ nome: ‘Palacio de la Moneda’,                   categoria: ‘turismo’,     estacao: ‘La Moneda’,                  descricao: ‘Sede do governo chileno, visitas ao patio interno sao gratuitas’,         tags: [‘governo’, ‘politica’, ‘historico’, ‘palacio’] },
{ nome: ‘Centro Cultural La Moneda’,              categoria: ‘turismo’,     estacao: ‘La Moneda’,                  descricao: ‘Centro cultural com exposicoes de arte, cinema e eventos gratuitos’,      tags: [‘cultura’, ‘arte’, ‘cinema’, ‘exposicao’, ‘gratuito’] },
{ nome: ‘Cerro Santa Lucia’,                      categoria: ‘turismo’,     estacao: ‘Santa Lucia’,                descricao: ‘Parque historico no centro com vistas panoramicas de Santiago’,           tags: [‘parque’, ‘cerro’, ‘vista’, ‘historico’, ‘santa lucia’] },
{ nome: ‘Museo Nacional de Bellas Artes’,         categoria: ‘turismo’,     estacao: ‘Bellas Artes’,               descricao: ‘Principal museu de arte do Chile, entrada gratuita aos domingos’,        tags: [‘museu’, ‘arte’, ‘cultura’, ‘gratuito’] },
{ nome: ‘Museo de Arte Contemporaneo’,            categoria: ‘turismo’,     estacao: ‘Bellas Artes’,               descricao: ‘Museu de arte contemporanea no Parque Forestal’,                          tags: [‘museu’, ‘arte’, ‘contemporaneo’, ‘cultura’] },
{ nome: ‘Barrio Bellavista’,                      categoria: ‘turismo’,     estacao: ‘Baquedano’,                  descricao: ‘Bairro bohemio com bares, restaurantes, murais e vida noturna’,          tags: [‘bairro’, ‘bares’, ‘restaurantes’, ‘noturno’, ‘bellavista’] },
{ nome: ‘Casa de Pablo Neruda - La Chascona’,     categoria: ‘turismo’,     estacao: ‘Baquedano’,                  descricao: ‘Uma das casas do poeta Pablo Neruda, hoje museu’,                        tags: [‘neruda’, ‘museu’, ‘poeta’, ‘casa’, ‘chascona’] },
{ nome: ‘Parque Metropolitano - Cerro San Cristobal’, categoria: ‘turismo’, estacao: ‘Baquedano’,                  descricao: ‘Maior parque urbano de Santiago com zoologico e piscinas’,              tags: [‘parque’, ‘cerro’, ‘zoo’, ‘san cristobal’, ‘natureza’] },
{ nome: ‘Barrio Italia’,                          categoria: ‘turismo’,     estacao: ‘Irarrazaval’,                descricao: ‘Bairro criativo com cafes, design, antiguidades e gastronomia’,           tags: [‘bairro’, ‘italia’, ‘cafe’, ‘design’, ‘antiguidades’, ‘gastronomia’] },
{ nome: ‘Parque OHiggins’,                        categoria: ‘turismo’,     estacao: ‘Parque OHiggins’,            descricao: ‘Grande parque publico com museus, piscinas e area de lazer’,             tags: [‘parque’, ‘ohiggins’, ‘lazer’, ‘piscina’] },
{ nome: ‘Fantasilandia’,                          categoria: ‘turismo’,     estacao: ‘Parque OHiggins’,            descricao: ‘Parque de diversoes dentro do Parque OHiggins’,                          tags: [‘parque’, ‘diversao’, ‘criancas’, ‘fantasilandia’] },
{ nome: ‘Museo Interactivo Mirador - MIM’,        categoria: ‘turismo’,     estacao: ‘Mirador’,                    descricao: ‘Museu de ciencias interativo, otimo para criancas e familias’,           tags: [‘museu’, ‘ciencias’, ‘criancas’, ‘interativo’, ‘mim’] },
{ nome: ‘Barrio Lastarria’,                       categoria: ‘turismo’,     estacao: ‘Universidad Catolica’,       descricao: ‘Bairro cultural com teatros, cafes, feiras e galerias de arte’,          tags: [‘bairro’, ‘lastarria’, ‘teatro’, ‘cafe’, ‘arte’, ‘feira’] },
{ nome: ‘Barrio Patronato’,                       categoria: ‘turismo’,     estacao: ‘Patronato’,                  descricao: ‘Bairro multicultural famoso por tecidos, moda e gastronomia arabe’,      tags: [‘bairro’, ‘patronato’, ‘moda’, ‘arabe’, ‘tecidos’] },
{ nome: ‘Estadio Nacional’,                       categoria: ‘turismo’,     estacao: ‘Estadio Nacional’,           descricao: ‘Principal estadio do Chile com museu e visitas historicas’,              tags: [‘estadio’, ‘futebol’, ‘esporte’, ‘historia’] },
{ nome: ‘Pueblito Los Dominicos’,                 categoria: ‘turismo’,     estacao: ‘Los Dominicos’,              descricao: ‘Vila artesanal com produtos tipicos chilenos e gastronomia’,              tags: [‘artesanato’, ‘dominicos’, ‘tipico’, ‘chile’] },
{ nome: ‘Sky Costanera - Mirante’,                categoria: ‘turismo’,     estacao: ‘Tobalaba’,                   descricao: ‘Mirante no edificio mais alto da America do Sul, vista 360’,             tags: [‘mirante’, ‘costanera’, ‘vista’, ‘sky’, ‘alto’] },
{ nome: ‘Parque Bustamante’,                      categoria: ‘turismo’,     estacao: ‘Parque Bustamante’,          descricao: ‘Parque linear com areas de lazer, skate e eventos culturais’,            tags: [‘parque’, ‘lazer’, ‘skate’, ‘bustamante’] },
{ nome: ‘Cementerio General’,                     categoria: ‘turismo’,     estacao: ‘Cementerios’,                descricao: ‘Cemiterio historico com monumentos e tumulos de personalidades chilenas’, tags: [‘cemiterio’, ‘historia’, ‘monumento’] },

// SAUDE
{ nome: ‘Hospital Clinico Universidad de Chile’,  categoria: ‘saude’,       estacao: ‘Universidad de Chile’,       descricao: ‘Hospital universitario publico de referencia em Santiago’,              tags: [‘hospital’, ‘publico’, ‘universitario’, ‘uchile’] },
{ nome: ‘Clinica Santa Maria’,                    categoria: ‘saude’,       estacao: ‘Pedro de Valdivia’,          descricao: ‘Clinica privada de alta complexidade em Providencia’,                   tags: [‘clinica’, ‘privada’, ‘providencia’, ‘santa maria’] },
{ nome: ‘Clinica Las Condes’,                     categoria: ‘saude’,       estacao: ‘Escuela Militar’,            descricao: ‘Uma das principais clinicas privadas do Chile’,                         tags: [‘clinica’, ‘privada’, ‘las condes’] },
{ nome: ‘Hospital El Pino’,                       categoria: ‘saude’,       estacao: ‘Hospital El Pino’,           descricao: ‘Hospital publico de referencia para o sul de Santiago’,                 tags: [‘hospital’, ‘publico’, ‘sul’, ‘pino’] },
{ nome: ‘Hospital Sotero del Rio’,                categoria: ‘saude’,       estacao: ‘Hospital Sotero del Rio’,    descricao: ‘Hospital publico de alta complexidade para Puente Alto e regiao’,       tags: [‘hospital’, ‘publico’, ‘puente alto’, ‘sotero’] },
{ nome: ‘Hospital Barros Luco’,                   categoria: ‘saude’,       estacao: ‘Parque OHiggins’,            descricao: ‘Hospital publico de referencia para Santiago Sul’,                      tags: [‘hospital’, ‘publico’, ‘sul’, ‘barros luco’] },
{ nome: ‘Clinica Alemana’,                        categoria: ‘saude’,       estacao: ‘Manquehue’,                  descricao: ‘Referencia em medicina de alta complexidade em Santiago’,               tags: [‘clinica’, ‘privada’, ‘alemana’, ‘manquehue’] },
{ nome: ‘Hospital San Borja Arriarán’,            categoria: ‘saude’,       estacao: ‘Republica’,                  descricao: ‘Hospital publico com maternidade e emergencias’,                        tags: [‘hospital’, ‘publico’, ‘maternidade’, ‘emergencia’] },
{ nome: ‘Hospital Roberto del Rio’,               categoria: ‘saude’,       estacao: ‘Cerro Blanco’,               descricao: ‘Hospital pediatrico publico de referencia em Santiago’,                 tags: [‘hospital’, ‘pediatrico’, ‘criancas’, ‘publico’] },
{ nome: ‘CESFAM Quinta Normal’,                   categoria: ‘saude’,       estacao: ‘Quinta Normal’,              descricao: ‘Centro de saude familiar publico com atendimento primario’,             tags: [‘cesfam’, ‘saude’, ‘publico’, ‘familiar’] },
{ nome: ‘Clinica Indisa’,                         categoria: ‘saude’,       estacao: ‘Salvador’,                   descricao: ‘Clinica privada em Providencia com emergencias 24h’,                    tags: [‘clinica’, ‘privada’, ‘emergencia’, ‘indisa’] },
{ nome: ‘Hospital Exequiel Gonzalez Cortes’,      categoria: ‘saude’,       estacao: ‘San Miguel’,                 descricao: ‘Hospital pediatrico publico no sul de Santiago’,                       tags: [‘hospital’, ‘pediatrico’, ‘criancas’, ‘publico’] },
{ nome: ‘Instituto Nacional del Cancer’,          categoria: ‘saude’,       estacao: ‘Patronato’,                  descricao: ‘Centro especializado em oncologia de referencia nacional’,              tags: [‘cancer’, ‘oncologia’, ‘especializado’, ‘publico’] },
{ nome: ‘Hospital de Urgencia Asistencia Publica’,categoria: ‘saude’,       estacao: ‘Parque Almagro’,             descricao: ‘Principal pronto-socorro publico de Santiago, 24h’,                     tags: [‘hospital’, ‘urgencia’, ‘emergencia’, ‘publico’, ‘24h’] },
{ nome: ‘Clinica Davila’,                         categoria: ‘saude’,       estacao: ‘Zapadores’,                  descricao: ‘Clinica privada no norte de Santiago com emergencias 24h’,              tags: [‘clinica’, ‘privada’, ‘emergencia’, ‘davila’, ‘norte’] },
{ nome: ‘Hospital Militar’,                       categoria: ‘saude’,       estacao: ‘Escuela Militar’,            descricao: ‘Hospital das Forcas Armadas com atendimento especializado’,             tags: [‘hospital’, ‘militar’, ‘forcas armadas’] },

// EDUCACAO
{ nome: ‘Universidad de Chile’,                   categoria: ‘educacao’,    estacao: ‘Universidad de Chile’,       descricao: ‘Principal universidade publica do Chile, fundada em 1842’,            tags: [‘universidade’, ‘publica’, ‘uchile’, ‘chile’] },
{ nome: ‘Pontificia Universidad Catolica’,        categoria: ‘educacao’,    estacao: ‘Universidad Catolica’,       descricao: ‘Uma das melhores universidades da America Latina’,                    tags: [‘universidade’, ‘catolica’, ‘puc’, ‘privada’] },
{ nome: ‘Universidad de Santiago - USACH’,        categoria: ‘educacao’,    estacao: ‘Universidad de Santiago’,    descricao: ‘Universidade publica de ciencias e tecnologia’,                        tags: [‘universidade’, ‘usach’, ‘santiago’, ‘tecnologia’, ‘publica’] },
{ nome: ‘Universidad Diego Portales’,             categoria: ‘educacao’,    estacao: ‘Toesca’,                     descricao: ‘Universidade privada com campus no centro de Santiago’,                tags: [‘universidade’, ‘privada’, ‘diego portales’, ‘udp’] },
{ nome: ‘Universidad Autonoma de Chile’,          categoria: ‘educacao’,    estacao: ‘Los Heroes’,                 descricao: ‘Universidade privada com campus central em Santiago’,                  tags: [‘universidade’, ‘privada’, ‘autonoma’] },
{ nome: ‘DUOC UC - Sede Centro’,                  categoria: ‘educacao’,    estacao: ‘La Moneda’,                  descricao: ‘Instituto tecnico superior ligado a UC’,                               tags: [‘instituto’, ‘tecnico’, ‘duoc’, ‘uc’] },
{ nome: ‘Instituto Nacional’,                     categoria: ‘educacao’,    estacao: ‘Parque Almagro’,             descricao: ‘Um dos colegios mais tradicionais e disputados do Chile’,              tags: [‘colegio’, ‘escola’, ‘tradicional’, ‘publico’, ‘instituto nacional’] },
{ nome: ‘Liceo de Aplicacion’,                    categoria: ‘educacao’,    estacao: ‘Republica’,                  descricao: ‘Tradicional colegio publico de referencia em Santiago’,                tags: [‘liceo’, ‘escola’, ‘publico’, ‘tradicional’] },
{ nome: ‘Colegio San Ignacio’,                    categoria: ‘educacao’,    estacao: ‘Baquedano’,                  descricao: ‘Tradicional colegio jesuita em Providencia’,                          tags: [‘colegio’, ‘escola’, ‘jesuita’, ‘san ignacio’, ‘privado’] },
{ nome: ‘Universidad Mayor’,                      categoria: ‘educacao’,    estacao: ‘Manuel Montt’,               descricao: ‘Universidade privada com campus em Providencia’,                       tags: [‘universidade’, ‘privada’, ‘mayor’] },
{ nome: ‘Universidad Andres Bello’,               categoria: ‘educacao’,    estacao: ‘Los Leones’,                 descricao: ‘Universidade privada com campus em Providencia’,                       tags: [‘universidade’, ‘privada’, ‘andres bello’, ‘unab’] },
{ nome: ‘INACAP Santiago Centro’,                 categoria: ‘educacao’,    estacao: ‘Franklin’,                   descricao: ‘Instituto tecnico superior com cursos profissionais’,                   tags: [‘instituto’, ‘tecnico’, ‘inacap’, ‘profissional’] },
{ nome: ‘Universidad de Las Americas’,            categoria: ‘educacao’,    estacao: ‘Ecuador’,                    descricao: ‘Universidade privada com campus em Santiago’,                          tags: [‘universidade’, ‘privada’, ‘americas’, ‘udla’] },
{ nome: ‘Biblioteca de Santiago’,                 categoria: ‘educacao’,    estacao: ‘Puente Cal y Canto’,         descricao: ‘Maior biblioteca publica do Chile com acervo gratuito’,               tags: [‘biblioteca’, ‘publica’, ‘gratuito’, ‘livros’] },
{ nome: ‘Biblioteca Nacional’,                    categoria: ‘educacao’,    estacao: ‘Universidad de Chile’,       descricao: ‘Acervo historico e cultural do Chile, acesso gratuito’,               tags: [‘biblioteca’, ‘nacional’, ‘historia’, ‘gratuito’] },
{ nome: ‘Universidad Central’,                    categoria: ‘educacao’,    estacao: ‘Los Heroes’,                 descricao: ‘Universidade privada com campus no centro de Santiago’,                tags: [‘universidade’, ‘privada’, ‘central’] },

// SHOPPINGS E COMERCIO
{ nome: ‘Costanera Center’,                       categoria: ‘comercio’,    estacao: ‘Tobalaba’,                   descricao: ‘Maior shopping da America do Sul com +300 lojas e Sky Costanera’,     tags: [‘shopping’, ‘mall’, ‘costanera’, ‘lojas’, ‘grande’] },
{ nome: ‘Mall Parque Arauco’,                     categoria: ‘comercio’,    estacao: ‘Escuela Militar’,            descricao: ‘Shopping tradicional de alto padrao em Las Condes’,                   tags: [‘shopping’, ‘mall’, ‘arauco’, ‘las condes’] },
{ nome: ‘Alto Las Condes’,                        categoria: ‘comercio’,    estacao: ‘Manquehue’,                  descricao: ‘Shopping premium com lojas internacionais e gastronomia’,             tags: [‘shopping’, ‘mall’, ‘las condes’, ‘premium’, ‘alto’] },
{ nome: ‘Mall Plaza Vespucio’,                    categoria: ‘comercio’,    estacao: ‘Vicuna Mackenna’,            descricao: ‘Grande shopping no sul de Santiago com cinema e lojas’,               tags: [‘shopping’, ‘mall’, ‘vespucio’, ‘sul’, ‘cinema’] },
{ nome: ‘Mall Plaza Norte’,                       categoria: ‘comercio’,    estacao: ‘Vespucio Norte’,             descricao: ‘Shopping no norte de Santiago com +200 lojas’,                        tags: [‘shopping’, ‘mall’, ‘norte’, ‘vespucio’] },
{ nome: ‘Mall Plaza Sur’,                         categoria: ‘comercio’,    estacao: ‘La Cisterna’,                descricao: ‘Shopping no sul de Santiago com supermercado e cinema’,               tags: [‘shopping’, ‘mall’, ‘sul’, ‘cinema’, ‘supermercado’] },
{ nome: ‘Apumanque’,                              categoria: ‘comercio’,    estacao: ‘Los Leones’,                 descricao: ‘Centro comercial tradicional em Providencia’,                         tags: [‘shopping’, ‘comercial’, ‘providencia’, ‘apumanque’] },
{ nome: ‘Mercado Tirso de Molina’,                categoria: ‘comercio’,    estacao: ‘Puente Cal y Canto’,         descricao: ‘Mercado popular com frutas, verduras e comida tipica’,                tags: [‘mercado’, ‘frutas’, ‘verduras’, ‘popular’, ‘tirso’] },
{ nome: ‘Galeria Espana’,                         categoria: ‘comercio’,    estacao: ‘Universidad de Chile’,       descricao: ‘Galeria comercial tradicional no centro de Santiago’,                 tags: [‘galeria’, ‘comercio’, ‘centro’, ‘espana’] },
{ nome: ‘Mall Plaza Egana’,                       categoria: ‘comercio’,    estacao: ‘Plaza Egana’,                descricao: ‘Shopping em Nunoa com cinema, lojas e restaurantes’,                  tags: [‘shopping’, ‘mall’, ‘egana’, ‘nunoa’, ‘cinema’] },
{ nome: ‘Paseo Ahumada’,                          categoria: ‘comercio’,    estacao: ‘Universidad de Chile’,       descricao: ‘Principal rua comercial de Santiago com lojas e servicos’,           tags: [‘paseo’, ‘comercio’, ‘centro’, ‘lojas’, ‘ahumada’] },
{ nome: ‘Mall Arauco Maipu’,                      categoria: ‘comercio’,    estacao: ‘Plaza de Maipu’,             descricao: ‘Grande shopping em Maipu com lojas, cinema e gastronomia’,           tags: [‘shopping’, ‘mall’, ‘maipu’, ‘arauco’, ‘cinema’] },
{ nome: ‘Mall Florida Center’,                    categoria: ‘comercio’,    estacao: ‘Bellavista de la Florida’,   descricao: ‘Shopping em La Florida com cinema, lojas e supermercado’,            tags: [‘shopping’, ‘mall’, ‘florida’, ‘cinema’, ‘supermercado’] },
{ nome: ‘Paseo Estado’,                           categoria: ‘comercio’,    estacao: ‘La Moneda’,                  descricao: ‘Rua comercial pedestre no centro historico de Santiago’,              tags: [‘paseo’, ‘comercio’, ‘centro’, ‘estado’] },
{ nome: ‘Centro Comercial Plaza Maipu’,           categoria: ‘comercio’,    estacao: ‘Plaza de Maipu’,             descricao: ‘Centro comercial popular com feiras e comercio local’,               tags: [‘comercio’, ‘maipu’, ‘feira’, ‘popular’] },
{ nome: ‘Mall Plaza Tobalaba’,                    categoria: ‘comercio’,    estacao: ‘Tobalaba’,                   descricao: ‘Shopping na fronteira entre Providencia e Las Condes’,               tags: [‘shopping’, ‘mall’, ‘tobalaba’, ‘providencia’] },

// RESTAURANTES E GASTRONOMIA
{ nome: ‘Restaurante El Hoyo’,                    categoria: ‘restaurante’, estacao: ‘Union Latinoamericana’,      descricao: ‘Tradicional restaurante chileno fundado em 1912, famoso pelo cazuelazo’, tags: [‘restaurante’, ‘chileno’, ‘tradicional’, ‘cazuela’] },
{ nome: ‘Mercado Central - Restaurantes’,         categoria: ‘restaurante’, estacao: ‘Puente Cal y Canto’,         descricao: ‘Varios restaurantes de frutos do mar dentro do Mercado Central’,       tags: [‘restaurante’, ‘frutos do mar’, ‘peixe’, ‘mercado’] },
{ nome: ‘Barrio Bellavista - Gastronomia’,        categoria: ‘restaurante’, estacao: ‘Baquedano’,                  descricao: ‘Concentracao de bares e restaurantes variados, ideal para jantar’,     tags: [‘restaurante’, ‘bar’, ‘jantar’, ‘bellavista’, ‘gastronomia’] },
{ nome: ‘Barrio Italia - Cafes e Bistros’,        categoria: ‘restaurante’, estacao: ‘Irarrazaval’,                descricao: ‘Regiao com cafes artesanais, bistros e comida internacional’,          tags: [‘cafe’, ‘bistro’, ‘italia’, ‘artesanal’, ‘gastronomia’] },
{ nome: ‘Tirso de Molina - Comida Popular’,       categoria: ‘restaurante’, estacao: ‘Puente Cal y Canto’,         descricao: ‘Comida chilena popular e barata ao redor do mercado’,                  tags: [‘comida’, ‘popular’, ‘barato’, ‘chileno’, ‘tirso’] },
{ nome: ‘Barrio Lastarria - Cafes’,               categoria: ‘restaurante’, estacao: ‘Universidad Catolica’,       descricao: ‘Cafes charmosos e restaurantes em ambiente cultural’,                  tags: [‘cafe’, ‘restaurante’, ‘lastarria’, ‘cultural’] },
{ nome: ‘Patronato - Gastronomia Arabe’,          categoria: ‘restaurante’, estacao: ‘Patronato’,                  descricao: ‘Restaurantes arabes e do Oriente Medio no Barrio Patronato’,          tags: [‘restaurante’, ‘arabe’, ‘oriente medio’, ‘patronato’] },
{ nome: ‘Pueblito Los Dominicos - Gastronomia’,   categoria: ‘restaurante’, estacao: ‘Los Dominicos’,              descricao: ‘Restaurantes com comida tipica chilena na vila artesanal’,             tags: [‘restaurante’, ‘chileno’, ‘tipico’, ‘dominicos’] },

// FARMACIAS
{ nome: ‘Farmacias Ahumada - Centro’,             categoria: ‘farmacia’,    estacao: ‘Universidad de Chile’,       descricao: ‘Rede de farmacias com filial no centro de Santiago, aberta 24h’,     tags: [‘farmacia’, ‘remedios’, ‘ahumada’, ‘24h’, ‘centro’] },
{ nome: ‘Cruz Verde - Baquedano’,                 categoria: ‘farmacia’,    estacao: ‘Baquedano’,                  descricao: ‘Farmacia Cruz Verde proxima a estacao Baquedano’,                    tags: [‘farmacia’, ‘remedios’, ‘cruz verde’] },
{ nome: ‘Salcobrand - Los Leones’,                categoria: ‘farmacia’,    estacao: ‘Los Leones’,                 descricao: ‘Farmacia Salcobrand em Providencia, aberta ate tarde’,               tags: [‘farmacia’, ‘remedios’, ‘salcobrand’, ‘providencia’] },
{ nome: ‘Farmacias Ahumada - Tobalaba’,           categoria: ‘farmacia’,    estacao: ‘Tobalaba’,                   descricao: ‘Farmacia Ahumada proxima ao Costanera Center’,                       tags: [‘farmacia’, ‘remedios’, ‘ahumada’, ‘tobalaba’] },
{ nome: ‘Cruz Verde - Plaza de Armas’,            categoria: ‘farmacia’,    estacao: ‘Plaza de Armas’,             descricao: ‘Farmacia Cruz Verde no coracao do centro historico’,                  tags: [‘farmacia’, ‘remedios’, ‘cruz verde’, ‘centro’] },
{ nome: ‘Salcobrand - Escuela Militar’,           categoria: ‘farmacia’,    estacao: ‘Escuela Militar’,            descricao: ‘Farmacia Salcobrand em Las Condes’,                                  tags: [‘farmacia’, ‘remedios’, ‘salcobrand’, ‘las condes’] },
{ nome: ‘Cruz Verde - Maipu’,                     categoria: ‘farmacia’,    estacao: ‘Plaza de Maipu’,             descricao: ‘Farmacia Cruz Verde em Maipu’,                                       tags: [‘farmacia’, ‘remedios’, ‘cruz verde’, ‘maipu’] },
{ nome: ‘Farmacias Ahumada - La Cisterna’,        categoria: ‘farmacia’,    estacao: ‘La Cisterna’,                descricao: ‘Farmacia Ahumada no sul de Santiago’,                                tags: [‘farmacia’, ‘remedios’, ‘ahumada’, ‘sul’] },

// PARQUES E AREAS VERDES
{ nome: ‘Parque Forestal’,                        categoria: ‘parque’,      estacao: ‘Bellas Artes’,               descricao: ‘Parque linear as margens do Rio Mapocho, ideal para caminhadas’,     tags: [‘parque’, ‘verde’, ‘caminhada’, ‘forestal’, ‘mapocho’] },
{ nome: ‘Parque Balmaceda’,                       categoria: ‘parque’,      estacao: ‘Salvador’,                   descricao: ‘Parque historico em Providencia as margens do Mapocho’,              tags: [‘parque’, ‘verde’, ‘providencia’, ‘mapocho’, ‘balmaceda’] },
{ nome: ‘Parque de Las Esculturas’,               categoria: ‘parque’,      estacao: ‘Pedro de Valdivia’,          descricao: ‘Parque ao ar livre com esculturas de artistas chilenos’,              tags: [‘parque’, ‘arte’, ‘escultura’, ‘ar livre’] },
{ nome: ‘Parque Metropolitano - Zoologico’,       categoria: ‘parque’,      estacao: ‘Baquedano’,                  descricao: ‘Zoologico dentro do Parque Metropolitano no Cerro San Cristobal’,    tags: [‘parque’, ‘zoo’, ‘animais’, ‘san cristobal’, ‘criancas’] },
{ nome: ‘Parque OHiggins’,                        categoria: ‘parque’,      estacao: ‘Parque OHiggins’,            descricao: ‘Grande parque publico com lagos, quadras e areas de piquenique’,     tags: [‘parque’, ‘verde’, ‘lago’, ‘piquenique’, ‘ohiggins’] },
{ nome: ‘Parque Bustamante’,                      categoria: ‘parque’,      estacao: ‘Parque Bustamante’,          descricao: ‘Parque linear com ciclovias, skate e eventos ao ar livre’,           tags: [‘parque’, ‘ciclovia’, ‘skate’, ‘bustamante’] },
{ nome: ‘Parque Quinta Normal’,                   categoria: ‘parque’,      estacao: ‘Quinta Normal’,              descricao: ‘Parque historico com museus, lago e areas verdes extensas’,           tags: [‘parque’, ‘museu’, ‘lago’, ‘quinta normal’, ‘historico’] },
{ nome: ‘Parque Cerro Navia’,                     categoria: ‘parque’,      estacao: ‘Neptuno’,                    descricao: ‘Area verde com espacos de recreacao no oeste de Santiago’,            tags: [‘parque’, ‘cerro’, ‘verde’, ‘recreacao’] },

// DELEGACIAS E SEGURANCA
{ nome: ‘Carabineros - 1a Comisaria Centro’,      categoria: ‘seguranca’,   estacao: ‘Plaza de Armas’,             descricao: ‘Principal delegacia do centro historico de Santiago’,                tags: [‘policia’, ‘carabineros’, ‘delegacia’, ‘seguranca’, ‘centro’] },
{ nome: ‘Carabineros - Providencia’,              categoria: ‘seguranca’,   estacao: ‘Pedro de Valdivia’,          descricao: ‘Delegacia de Carabineros em Providencia’,                            tags: [‘policia’, ‘carabineros’, ‘delegacia’, ‘providencia’] },
{ nome: ‘Carabineros - Las Condes’,               categoria: ‘seguranca’,   estacao: ‘Escuela Militar’,            descricao: ‘Delegacia de Carabineros em Las Condes’,                             tags: [‘policia’, ‘carabineros’, ‘delegacia’, ‘las condes’] },
{ nome: ‘Carabineros - Maipu’,                    categoria: ‘seguranca’,   estacao: ‘Plaza de Maipu’,             descricao: ‘Delegacia de Carabineros em Maipu’,                                  tags: [‘policia’, ‘carabineros’, ‘delegacia’, ‘maipu’] },
{ nome: ‘Carabineros - La Florida’,               categoria: ‘seguranca’,   estacao: ‘Bellavista de la Florida’,   descricao: ‘Delegacia de Carabineros em La Florida’,                             tags: [‘policia’, ‘carabineros’, ‘delegacia’, ‘florida’] },
{ nome: ‘PDI - Policia de Investigaciones’,       categoria: ‘seguranca’,   estacao: ‘Republica’,                  descricao: ‘Sede central da Policia de Investigacoes do Chile’,                  tags: [‘policia’, ‘pdi’, ‘investigacao’, ‘seguranca’] },
{ nome: ‘Carabineros - Nunoa’,                    categoria: ‘seguranca’,   estacao: ‘Nunoa’,                      descricao: ‘Delegacia de Carabineros em Nunoa’,                                  tags: [‘policia’, ‘carabineros’, ‘delegacia’, ‘nunoa’] },
{ nome: ‘Carabineros - Puente Alto’,              categoria: ‘seguranca’,   estacao: ‘Plaza de Puente Alto’,       descricao: ‘Delegacia de Carabineros em Puente Alto’,                            tags: [‘policia’, ‘carabineros’, ‘delegacia’, ‘puente alto’] },
];

// ==========================================
// NORMALIZACAO
// ==========================================
function norm(t) {
return (t || ‘’).toLowerCase().normalize(‘NFD’).replace(/[\u0300-\u036f]/g, ‘’).replace(/[^a-z0-9 ]/g, ‘’).trim();
}

// ==========================================
// BUSCA MELHORADA
// ==========================================
function buscarPonto(termo) {
if (!termo || termo.trim().length < 2) return [];
const palavras = norm(termo).split(’ ’).filter(p => p.length > 1);

return PONTOS.filter(p => {
const tudo = norm(p.nome) + ’ ’ + norm(p.descricao) + ’ ’ + p.tags.map(norm).join(’ ’) + ’ ’ + norm(p.categoria);
return palavras.some(palavra => tudo.includes(palavra));
}).sort((a, b) => {
const aNome = norm(a.nome).includes(norm(termo)) ? 0 : 1;
const bNome = norm(b.nome).includes(norm(termo)) ? 0 : 1;
return aNome - bNome;
});
}

// ==========================================
// PONTOS POR ESTACAO
// ==========================================
function pontosPorEstacao(estacao) {
return PONTOS.filter(p => p.estacao === estacao);
}

// ==========================================
// ESTACAO MAIS PROXIMA DE UM PONTO
// ==========================================
function estacaoDoPoint(nomePonto) {
const busca = norm(nomePonto);
const encontrado = PONTOS.find(p => norm(p.nome).includes(busca));
return encontrado ? { estacao: encontrado.estacao, ponto: encontrado } : null;
}

// ==========================================
// CATEGORIAS
// ==========================================
const CATEGORIAS = {
turismo:     { label: ‘Turismo e Cultura’,      emoji: ‘🏛’  },
saude:       { label: ‘Saude’,                  emoji: ‘🏥’  },
educacao:    { label: ‘Educacao’,               emoji: ‘🎓’  },
comercio:    { label: ‘Shoppings e Comercio’,   emoji: ‘🛍’  },
restaurante: { label: ‘Restaurantes’,           emoji: ‘🍽’  },
farmacia:    { label: ‘Farmacias’,              emoji: ‘💊’  },
parque:      { label: ‘Parques e Areas Verdes’, emoji: ‘🌳’  },
seguranca:   { label: ‘Delegacias e Seguranca’, emoji: ‘🚔’  },
};

module.exports = { PONTOS, CATEGORIAS, buscarPonto, pontosPorEstacao, estacaoDoPoint };