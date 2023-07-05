const crearNovedad = (titulo, autor, url, year, idioma, area, editorial, cover) => {
  const novedad = document.createElement('div');

  const detallesNovedad = `<div class="books" id="books-arquitectura">
    <img class="cover" src="${cover}" alt="${titulo}">
    <div class="books-details">
        <h2 class="books-titulo">${titulo}</h2>
        <h3 class="books-autor">${autor}</h3>
        <p class="books-descripcion">${editorial} | <strong>${year}</strong></p>
        <p class="books-descripcion">${idioma}</p>
        <p class="books-area">${area}</p>
        <li class="button-acceso" id="button-acceso-arquitectura"><a href="${url}" target="_blank">Consulta aquí</a></li>
    </div>`;

  novedad.innerHTML = detallesNovedad;
  return novedad
};

const totalLiteratura = document.querySelector("[data-literatura]");
const totalComunicativa = document.querySelector("[data-comunicativa]");
const totalAcademica = document.querySelector("[data-academica]");




const literatura = {
  libros: [
    { id: '55', cover: '/img/portadas/55.png', titulo: 'Estética de la autenticidad', autor: 'Agudelo, Pedro', year: '2015', editorial: 'Universidad Eafit', idioma: 'Español', area: 'Arte y estética', url: '/components/otros.html' },
    { id: '61', cover: '/img/portadas/61.png', titulo: 'Cultura y tradición oral en el caribe colombiano', autor: 'Bauque Montoya, Álvaro', year: '2010', editorial: 'Ade De La Hoz', idioma: 'Español', area: 'Tradición oral', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/69800' },
    { id: '59', cover: '/img/portadas/59.png', titulo: 'Los relatos misteriosos de Colombia I', autor: 'Hernández, Diana Carolina; Manjarrez Caicedo, Mauricio', year: '2021', editorial: 'Ministerio de Cultura', idioma: 'Español', area: 'Tradición oral', url: 'https://ugc.overdrive.com/media/6055470' },
    { id: '57', cover: '/img/portadas/57.png', titulo: 'El cumpleaños del mundo', autor: 'K. Leguin, Ursula', year: '2021', editorial: 'Minotauro', idioma: 'Español', area: 'Fantasía y ficción', url: 'https://ugc.overdrive.com/media/6098990' },
    { id: '58', cover: '/img/portadas/58.png', titulo: 'Lo irreal y lo real', autor: 'K. Leguin, Ursula', year: '2021', editorial: 'Minotauro', idioma: 'Español', area: 'Fantasía y ficción', url: 'https://ugc.overdrive.com/media/7395449' },
    { id: '54', cover: '/img/portadas/54.png', titulo: 'Ética y estética, ensayos de la interacción (audiolibro)', autor: 'Levinson Jenhold', year: '2015', editorial: 'Editorial Antonio Machado', idioma: 'Español', area: 'Arte y estética', url: 'https://ugc.overdrive.com/media/2511857' },
    { id: '56', cover: '/img/portadas/56.png', titulo: 'Barbanegra y la justicia', autor: 'Mclean, Jeremy', year: '2019', editorial: 'Babelcube Inc.', idioma: 'Español', area: 'Fantasía y ficción', url: 'https://ugc.overdrive.com/media/6031503' },
    { id: '60', cover: '/img/portadas/60.png', titulo: 'Cuatro cuentos para recordar la tradición oral colombiana', autor: 'Ocampo Lala', year: '2020', editorial: 'Ministerio de Cultura', idioma: 'Español', area: 'Tradición oral', url: 'https://canaltrece.com.co/noticias/cuatro-cuentos-para-recordar-la-tradicion-oral-colombiana/' },
    { id: '53', cover: '/img/portadas/53.png', titulo: 'Arte, imagen y experiencia, perspectivas desde la estética', autor: 'Salas Guerra, María Cecilia', year: '2021', editorial: 'Universidad Nacional De Colombia', idioma: 'Español', area: 'Arte y estética', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/220620' },
  ]
};

const comunicativa = {
  libros: [{id: '46', cover: '/img/portadas/46.png', titulo: 'Historia de la arquitectura en Colombia', autor: 'Arango, Silvia', year: '2019', editorial: 'Universidad Nacional De Colombia', idioma: 'Español', area: 'Historia y Filosofía', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=968'},
  {id: '44', cover: '/img/portadas/44.png', titulo: 'Introducción del pensamiento moderno en Colombia', autor: 'Cataño, González', year: '2014', editorial: 'Universidad Externado De Colombia', idioma: 'Español', area: 'Historia y Filosofía', url: '/components/otros.html'},
  {id: '52', cover: '/img/portadas/52.png', titulo: 'Hábitats y sociedades del pacifico, volumen i. La bahía de solano', autor: 'Mosquera Torres, Gilma y Aprile-Gniset, Jacques', year: '2018', editorial: 'CITCE', idioma: 'Español', area: 'Tecnología, innovación y desarrollo sostenible', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/131568'},
  {id: '49', cover: '/img/portadas/49.png', titulo: 'La construcción de imaginarios', autor: 'Prieto Ustio, Ester', year: '2022', editorial: 'Ariadna Ediciones', idioma: 'Español', area: 'Diversidad cultural', url: 'https://library.oapen.org/handle/20.500.12657/57857'},
  {id: '47', cover: '/img/portadas/47.png', titulo: 'Paisajes sonoros del retorno', autor: 'Ramírez Grobli, María Del Pilar', year: '2020', editorial: 'Iberoamericana Vervuet', idioma: 'Español', area: 'Diversidad cultural', url: '/components/otros.html'},
  {id: '50', cover: '/img/portadas/50.png', titulo: 'Arquitectura prehispánica en el valle de aburra', autor: 'Rave Aristizabal, María Julia', year: '2010', editorial: 'Universidad Nacional De Colombia', idioma: 'Español', area: 'Tecnología, innovación y desarrollo sostenible', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/128928'},
  {id: '51', cover: '/img/portadas/51.png', titulo: 'Hábitat y arquitectura en Colombia, modos de habitar desde el prehispánico hasta el siglo ixx', autor: 'Saldarriaga Roa, Alberto', year: '2016', editorial: 'Universidad Jorge Tadeo Lozano', idioma: 'Español', area: 'Tecnología, innovación y desarrollo sostenible', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/220915'},
  {id: '48', cover: '/img/portadas/48.png', titulo: 'Una historia comparada del cine latinoamericano', autor: 'Schroedr Rodríguez, Paul A.', year: '2020', editorial: 'Iberoamericana Vervuet', idioma: 'Español', area: 'Diversidad cultural', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/130408'},
  {id: '45', cover: '/img/portadas/45.png', titulo: 'Colombia, cuentos cortos', autor: 'Varela-Cid, Eduardo', year: '2000', editorial: 'El Cid Editor', idioma: 'Español', area: 'Historia y Filosofía', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/35463'},
  ]
};

const academica = {
  libros: [
    {id: '43', cover: '/img/portadas/43.png', titulo: 'Leer para escribir', autor: 'Arango, Silvia', year: '2021', editorial: 'CESA', idioma: 'Español', area: 'Formación de lectura académica', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/222492'},
    {id: '39', cover: '/img/portadas/39.png', titulo: '72 voces para un diccionario de arquitectura teórica', autor: 'Arnau, Joaquín', year: '2000', editorial: 'Biblioteca Nueva', idioma: 'Español', area: 'Investigativa ', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=9566'},
    {id: '41', cover: '/img/portadas/41.png', titulo: 'Tiempo, espacio y comunicación visual. Proyectando arquitectura con herramientas de la semiótica', autor: 'Chuk, Bruno', year: '2019', editorial: 'Nobuko', idioma: 'Español', area: 'Investigativa ', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/218548'},
    {id: '38', cover: '/img/portadas/38.png', titulo: 'Manual de construcción en tierra', autor: 'Gernot, Minke', year: '2008', editorial: 'Fin de Siglo', idioma: 'Español', area: 'Disciplinar', url: '/components/otros.html'},
    {id: '40', cover: '/img/portadas/40.png', titulo: 'Arquitectura, pensamiento y creación', autor: 'González Cortázar, Fernando', year: '2014', editorial: 'Fondo De Cultura Económica', idioma: 'Español', area: 'Investigativa ', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/110074'},
    {id: '37', cover: '/img/portadas/37.png', titulo: 'Arquitecturas neocoloniales: Cali 1920-1950', autor: 'Gutiérrez Paz, Jaime', year: '2000', editorial: 'Universidad Del Valle', idioma: 'Español', area: 'Disciplinar', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/129495'},
    {id: '36', cover: '/img/portadas/36.png', titulo: 'Arquitectura colonial en Popayán y Valle del Cauca', autor: 'Santiago, Sebastián', year: '1965', editorial: 'Programa Editorial Universidad Del Valle', idioma: 'Español', area: 'Disciplinar', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/129488'},
    {id: '42', cover: '/img/portadas/42.png', titulo: '¿Y dónde desemboca el mar?', autor: 'Valdecabras, Quique', year: '2009', editorial: 'La Oveja Negra Limitada', idioma: 'Español', area: 'Formación de lectura académica', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/68721'},
  ]
};

literatura.libros.forEach(libro => {
  const nuevaNovedad = crearNovedad(libro.titulo, libro.autor, libro.url, libro.year, libro.idioma, libro.area, libro.editorial, libro.cover);
  totalLiteratura.appendChild(nuevaNovedad);
});

comunicativa.libros.forEach(libro => {
  const nuevaNovedad = crearNovedad(libro.titulo, libro.autor, libro.url, libro.year, libro.idioma, libro.area, libro.editorial, libro.cover);
  totalComunicativa.appendChild(nuevaNovedad);
});

academica.libros.forEach(libro => {
  const nuevaNovedad = crearNovedad(libro.titulo, libro.autor, libro.url, libro.year, libro.idioma, libro.area, libro.editorial, libro.cover);
  totalAcademica.appendChild(nuevaNovedad);
});