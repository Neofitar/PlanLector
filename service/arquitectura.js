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
    { id: '53', cover: '/img/portadas/53.png', titulo: 'Arte, Imagen Y Experiencia, Perspectivas Desde La Estética', autor: 'Salas Guerra, María Cecilia', year: '2021', editorial: 'Universidad Nacional De Colombia', idioma: 'Español', area: 'Arte y estética', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/220620' },
    { id: '54', cover: '/img/portadas/54.png', titulo: 'Ética Y Estética, Ensayos De La Interacción (Audiolibro)', autor: 'Levinson Jenhold', year: '2015', editorial: 'Editorial Antonio Machado', idioma: 'Español', area: 'Arte y estética', url: 'https://ugc.overdrive.com/media/2511857' },
    { id: '55', cover: '/img/portadas/55.png', titulo: 'Estética De La Autenticidad', autor: 'Agudelo, Pedro', year: '2015', editorial: 'Universidad Eafit', idioma: 'Español', area: 'Arte y estética', url: 'N/A' },
    { id: '56', cover: '/img/portadas/56.png', titulo: 'Barbanegra Y La Justicia', autor: 'Mclean, Jeremy', year: '2019', editorial: 'Babelcube Inc.', idioma: 'Español', area: 'Fantasía y ficción', url: 'https://ugc.overdrive.com/media/6031503' },
    { id: '57', cover: '/img/portadas/57.png', titulo: 'El Cumpleaños Del Mundo', autor: 'K Leguin, Ursula', year: '2021', editorial: 'Minotauro', idioma: 'Español', area: 'Fantasía y ficción', url: 'https://ugc.overdrive.com/media/6098990' },
    { id: '58', cover: '/img/portadas/58.png', titulo: 'Lo Irreal Y Lo Real', autor: 'K Leguin, Ursula', year: '2021', editorial: 'Minotauro', idioma: 'Español', area: 'Fantasía y ficción', url: 'https://ugc.overdrive.com/media/7395449' },
    { id: '59', cover: '/img/portadas/59.png', titulo: 'Los Relatos Misteriosos De Colombia I', autor: 'Hernadez, Diana Carolina; Manjarrez Caicedo, Mauricio', year: '2021', editorial: 'Ministerio de Cultura', idioma: 'Español', area: 'Tradición oral', url: 'https://ugc.overdrive.com/media/6055470' },
    { id: '60', cover: '/img/portadas/60.png', titulo: 'Cuatro Cuentos Para Recordar La Tradición Oral Colombiana', autor: 'Ocampo Lala', year: '2020', editorial: 'Ministerio de Cultura', idioma: 'Español', area: 'Tradición oral', url: 'https://canaltrece.com.co/noticias/cuatro-cuentos-para-recordar-la-tradicion-oral-colombiana/' },
    { id: '61', cover: '/img/portadas/61.png', titulo: 'Cultura Y Tradición Oral En El Caribe Colombiano', autor: 'Bauque Montoya, Alvaro', year: '2010', editorial: 'Ade De La Hoz', idioma: 'Español', area: 'Tradición oral', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/69800' },
  ]
};

const comunicativa = {
  libros: [
    { id: '44', cover: '/img/portadas/44.png', titulo: 'Introducción Del Pensamiento Moderno En Colombia', autor: 'Cataño, González', year: '2014', editorial: 'Universidad Externado De Colombia', idioma: 'Español', area: 'Historia y Filosofía', url: 'N/A' },
    { id: '45', cover: '/img/portadas/45.png', titulo: 'Colombia, Cuentos Cortos', autor: 'Varela-CID, Eduardo', year: '2000', editorial: 'El Cid Editor', idioma: 'Español', area: 'Historia y Filosofía', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/35463' },
    { id: '46', cover: '/img/portadas/46.png', titulo: 'Historia De La Arquitectura En Colombia', autor: 'Arango, Silvia', year: '2019', editorial: 'Universidad Nacional De Colombia', idioma: 'Español', area: 'Historia y Filosofía', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=968' },
    { id: '47', cover: '/img/portadas/47.png', titulo: 'Paisajes Sonoros Del Retorno ', autor: 'Ramírez Grobli, María del pilar', year: '2020', editorial: 'Iberoamericana Vervuet', idioma: 'Español', area: 'Diversidad cultural', url: 'N/A' },
    { id: '48', cover: '/img/portadas/48.png', titulo: 'Una Historia Comparada Del Cine Latinoamericano', autor: 'Schroedr Rodríguez, Paul A.', year: '2020', editorial: 'Iberoamericana Vervuet', idioma: 'Español', area: 'Diversidad cultural', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/130408' },
    { id: '49', cover: '/img/portadas/49.png', titulo: 'La Construcción De Imaginarios', autor: 'Prieto Ustio, Ester', year: '2022', editorial: 'Ariadna Ediciones', idioma: 'Español', area: 'Diversidad cultural', url: 'https://library.oapen.org/handle/20.500.12657/57857' },
    { id: '50', cover: '/img/portadas/50.png', titulo: 'Arquitectura Prehispánica En El Valle De Aburra', autor: 'Rave Aristizabal, María Julia', year: '2010', editorial: 'Universidad Nacional De Colombia', idioma: 'Español', area: 'Tecnología, innovación y desarrollo sostenible', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/128928' },
    { id: '51', cover: '/img/portadas/51.png', titulo: 'Hábitat Y Arquitectura En Colombia, Modos De Habitar Desde El Prehispánico Hasta El Siglo Ixx', autor: 'Saldarriaga Roa, Alberto', year: '2016', editorial: 'Universidad Jorge Tadeo Lozano', idioma: 'Español', area: 'Tecnología, innovación y desarrollo sostenible', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/220915' },
    { id: '52', cover: '/img/portadas/52.png', titulo: 'Hábitats Y Sociedades Del Pacifico, Volumen I. La Bahía De Solano', autor: 'Mosquera Torres, Gilma ; Aprile-Gniset, Jacques', year: '2018', editorial: ' Centro De Investigaciones Territorio, Construcción Y Espacio- Citce', idioma: 'Español', area: 'Tecnología, innovación y desarrollo sostenible', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/131568' },
  ]
};

const academica = {
  libros: [
    { id: '36', cover: '/img/portadas/36.png', titulo: 'Arquitectura Colonial En Popayán Y Valle Del Cauca', autor: 'Santiago, Sebastián', year: '1965', editorial: 'Programa Editorial Universidad Del Valle', idioma: 'Español', area: 'Disciplinar', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/129488' },
    { id: '37', cover: '/img/portadas/37.png', titulo: 'Arquitecturas Neocoloniales: Cali 1920-1950', autor: 'Gutiérrez Paz, Jaime', year: '2000', editorial: 'Universidad Del Valle', idioma: 'Español', area: 'Disciplinar', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/129495' },
    { id: '38', cover: '/img/portadas/38.png', titulo: 'Manual De Construcción En Tierra', autor: 'Gernot, Minke', year: '2008', editorial: 'Fin De Siglo', idioma: 'Español', area: 'Disciplinar', url: 'N/A' },
    { id: '39', cover: '/img/portadas/39.png', titulo: '72 Voces Para Un Diccionario De Arquitectura Teórica', autor: 'Arnau, Joaquín', year: '2000', editorial: 'Biblioteca Nueva /Celeste', idioma: 'Español', area: 'Investigativa ', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=9566' },
    { id: '40', cover: '/img/portadas/40.png', titulo: 'Arquitectura, Pensamiento Y Creación', autor: 'González Cortázar, Fernando', year: '2014', editorial: 'Fondo De Cultura Económica', idioma: 'Español', area: 'Investigativa ', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/110074' },
    { id: '41', cover: '/img/portadas/41.png', titulo: 'Tiempo, Espacio Y Comunicación Visual. Proyectando Arquitectura Con Herramientas De La Semiótica', autor: 'Chuk, Bruno', year: '2019', editorial: 'Nobuko', idioma: 'Español', area: 'Investigativa ', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/218548' },
    { id: '42', cover: '/img/portadas/42.png', titulo: '¿Y Dónde Desemboca El Mar?', autor: 'Valdecabras, Quique', year: '2009', editorial: 'La Oveja Negra Limitada ', idioma: 'Español', area: 'Formación de lectura académica', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/68721' },
    { id: '43', cover: '/img/portadas/43.png', titulo: 'Leer Para Escribir ', autor: 'Arango, Silvia', year: '2021', editorial: 'Cesa', idioma: 'Español', area: 'Formación de lectura académica', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/222492' },
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