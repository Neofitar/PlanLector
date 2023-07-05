const crearNovedad = (titulo, autor, url, year, idioma, area, editorial, cover) => {
  const novedad = document.createElement('div');

  const detallesNovedad = `<div class="books" id="books-educacion">
    <img class="cover" src="${cover}" alt="${titulo}">
    <div class="books-details">
        <h2 class="books-titulo">${titulo}</h2>
        <h3 class="books-autor">${autor}</h3>
        <p class="books-descripcion">${editorial} | <strong>${year}</strong></p>
        <p class="books-descripcion">${idioma}</p>
        <p class="books-area">${area}</p>
        <li class="button-acceso" id="button-acceso-educacion"><a href="${url}" target="_blank">Consulta aquí</a></li>
    </div>`;

  novedad.innerHTML = detallesNovedad;
  return novedad
};

const totalLiteratura = document.querySelector("[data-literatura]");
const totalComunicativa = document.querySelector("[data-comunicativa]");
const totalAcademica = document.querySelector("[data-academica]");




const literatura = {
  libros: [
    {id: '79', cover: '/img/portadas/79.png', titulo: 'Los ejércitos', autor: 'Evelio Roseo', year: '2007', editorial: 'Editorial Tusquets', idioma: 'Español', area: 'Arte y estética', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=189460'},
    {id: '78', cover: '/img/portadas/78.png', titulo: 'La teoría de lo grotesco', autor: 'Francisco Mares Aliaga', year: '2023', editorial: 'Editorial Instituto Juan Andrés', idioma: 'Español', area: 'Arte y estética', url: '/components/otros.html'},
    {id: '77', cover: '/img/portadas/77.png', titulo: 'Quién domina el mundo', autor: 'Noam Chomsky', year: '2016', editorial: 'Editorial Edic B.', idioma: 'Español', area: 'Arte y estética', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=253594'},
  ]
};

const comunicativa = {
  libros: [
    {id: '73', cover: '/img/portadas/73.png', titulo: 'El mapa criminal en Colombia. La nueva ola de violencia y la paz total', autor: 'Ariel Ávila Martínez', year: '2022', editorial: 'Editorial Aguilar', idioma: 'Español', area: 'Historia y Filosofía', url: 'https://ugc.overdrive.com/media/9561239'},
    {id: '71', cover: '/img/portadas/71.png', titulo: 'La sociedad del cansancio', autor: 'Byung-Chul Han', year: '2002', editorial: 'Herder', idioma: 'Español', area: 'Historia y Filosofía', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/214578'},
    {id: '75', cover: '/img/portadas/75.png', titulo: 'Comunicación y poder', autor: 'Manuel Castells', year: '2009', editorial: 'Alianza', idioma: 'Español', area: 'Diversidad cultural', url: 'https://ugc.overdrive.com/media/3804371'},
    {id: '74', cover: '/img/portadas/74.png', titulo: 'La civilización del espectáculo', autor: 'Mario Vargas Llosa', year: '2012', editorial: 'Alfaguara', idioma: 'Español', area: 'Diversidad cultural', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254361'},
    {id: '76', cover: '/img/portadas/76.png', titulo: 'A la velocidad de byte', autor: 'Samuel Castro', year: '2008', editorial: 'Universidad Eafit', idioma: 'Español', area: 'Diversidad cultural', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=11510'},
    {id: '72', cover: '/img/portadas/72.png', titulo: 'Magdalena River of Dreams', autor: 'Wade Davis', year: '2021', editorial: 'Editorial Alfred A. Knopf', idioma: 'Inglés', area: 'Historia y Filosofía', url: 'https://ugc.overdrive.com/media/6449700'},
  ]
};

const academica = {
  libros: [
    {id: '69', cover: '/img/portadas/69.png', titulo: 'Las claves de la argumentación', autor: 'Anthony Weston', year: '2002', editorial: 'Ariel', idioma: 'Español', area: 'Formación de lectura académica', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=28630'},
    {id: '70', cover: '/img/portadas/70.png', titulo: 'Culturas híbridas', autor: 'Néstor García Canclini', year: '1990', editorial: 'Casa del Libro', idioma: 'Español', area: 'Formación de lectura académica', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=32898'},
    {id: '66', cover: '/img/portadas/66.png', titulo: 'Pensar epistémico, educación popular e investigación participativa', autor: 'Alfonso Torres Carrillo', year: '2019', editorial: 'Editora Nómada', idioma: 'Español', area: 'Investigativa', url: '/components/otros.html'},
    {id: '63', cover: '/img/portadas/63.png', titulo: 'La emoción de aprender', autor: 'Cesar Bona', year: '2019', editorial: 'PRH Grupo Editorial', idioma: 'Español', area: 'Disciplinar', url: 'https://ugc.overdrive.com/media/4229032'},
    {id: '68', cover: '/img/portadas/68.png', titulo: 'La cocina de la escritura', autor: 'Daniel Cassany', year: '1993', editorial: 'Anagrama', idioma: 'Español', area: 'Formación de lectura académica', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=198998'},
    {id: '67', cover: '/img/portadas/67.png', titulo: 'Metodología de la investigación. Las rutas cuantitativa, cualitativa y mixta', autor: 'Hernández-Sampieri, R. & Mendoza, C.', year: '2018', editorial: 'Editorial Mc Graw Hill', idioma: 'Español', area: 'Investigativa', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=198501'},
    {id: '64', cover: '/img/portadas/64.png', titulo: 'Los modelos pedagógicos: "hacia una pedagogía dialogante"', autor: 'Julián de Zubiria Zamper', year: '2006', editorial: 'Magisterio', idioma: 'Español', area: 'Disciplinar', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=9122'},
    {id: '65', cover: '/img/portadas/65.png', titulo: 'Orlando Flans borda y la investigación participativa', autor: 'Nicolás Armando Herrera y Alfonso Torres Carrillo', year: '2003', editorial: 'Laboratorio Educativo', idioma: 'Español', area: 'Investigativa', url: '/components/otros.html'},
    {id: '62', cover: '/img/portadas/62.png', titulo: 'Cartas a quien pretende enseñar', autor: 'Paulo Freire', year: '2008', editorial: 'Siglo Xxi Editores Argentina', idioma: 'Español', area: 'Disciplinar', url: 'https://ugc.overdrive.com/media/3804359'},
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