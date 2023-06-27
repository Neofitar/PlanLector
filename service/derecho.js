const crearNovedad = (titulo, autor, url, year, idioma, area, editorial) => {
  const novedad = document.createElement('div');

  const detallesNovedad = `<div class="books" id="books-derecho">
    <img class="cover" src="../img/reading-book.jpg" alt="${titulo}">
    <div class="books-details">
        <h2 class="books-titulo">${titulo}</h2>
        <h3 class="books-autor">${autor}</h3>
        <p class="books-descripcion">${editorial} | <strong>${year}</strong></p>
        <p class="books-descripcion">${idioma}</p>
        <p class="books-area">${area}</p>
        <li class="button-acceso" id="button-acceso-derecho"><a href="${url}" target="_blank">Consulta aquí</a></li>
    </div>`;

  novedad.innerHTML = detallesNovedad;
  return novedad
};

const totalLiteratura = document.querySelector("[data-literatura]");
const totalComunicativa = document.querySelector("[data-comunicativa]");
const totalAcademica = document.querySelector("[data-academica]");




const literatura = {
  libros: [
    {id: '2',
    cover: '',
    titulo: 'AAAAAA', 
    autor: 'Juan Miguel Álvarez',
    year: '2023',
    editorial: 'Temis',
    idioma: 'Español',
    area: 'Historia',
    url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254916'},
    {id: '2',cover: '/img/portadas/02_por.png',titulo: 'XXXXXX', autor: 'Juan Miguel Álvarez',tema: 'Derecho, política o periodísmo',descripcion: 'El galardonado periodista nos presenta esta recopilación de veinticinco crónicas hechas durante trece años a lo largo de las cuatro ciudades donde ha vivido: Cali, Bogotá, Pereira y Medellín, y otros rincones del país.',url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254916'},
    {id: '3',cover: '/img/portadas/03_por.png',titulo: 'Democracia envenenada: Rusia en la era de Putin', autor: 'Bernhard Laugaland Mohr',tema: 'Derecho, política o periodísmo',descripcion: 'Este libro nos da un completo vistazo de cómo, en pleno siglo XXI, los gobernantes, siendo Putin solo un ejemplo, controlan los medios y la forma de pensar de sus habitantes para afianzarse, con mano dura, en el poder.',url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254914'},
  ]
};

const comunicativa = {
  libros: [
    {id: '2',cover: '/img/portadas/02_por.png',titulo: 'XXXXXX', autor: 'Juan Miguel Álvarez',tema: 'Derecho, política o periodísmo',descripcion: 'El galardonado periodista nos presenta esta recopilación de veinticinco crónicas hechas durante trece años a lo largo de las cuatro ciudades donde ha vivido: Cali, Bogotá, Pereira y Medellín, y otros rincones del país.',url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254916'},
    {id: '3',cover: '/img/portadas/03_por.png',titulo: 'Democracia envenenada: Rusia en la era de Putin', autor: 'Bernhard Laugaland Mohr',tema: 'Derecho, política o periodísmo',descripcion: 'Este libro nos da un completo vistazo de cómo, en pleno siglo XXI, los gobernantes, siendo Putin solo un ejemplo, controlan los medios y la forma de pensar de sus habitantes para afianzarse, con mano dura, en el poder.',url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254914'},
    {id: '2',cover: '/img/portadas/02_por.png',titulo: 'XXXXXX', autor: 'Juan Miguel Álvarez',tema: 'Derecho, política o periodísmo',descripcion: 'El galardonado periodista nos presenta esta recopilación de veinticinco crónicas hechas durante trece años a lo largo de las cuatro ciudades donde ha vivido: Cali, Bogotá, Pereira y Medellín, y otros rincones del país.',url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254916'},
    {id: '3',cover: '/img/portadas/03_por.png',titulo: 'Democracia envenenada: Rusia en la era de Putin', autor: 'Bernhard Laugaland Mohr',tema: 'Derecho, política o periodísmo',descripcion: 'Este libro nos da un completo vistazo de cómo, en pleno siglo XXI, los gobernantes, siendo Putin solo un ejemplo, controlan los medios y la forma de pensar de sus habitantes para afianzarse, con mano dura, en el poder.',url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254914'},
  ]
};

const academica = {
  libros: [
    {id: '2',cover: '/img/portadas/02_por.png',titulo: 'YYYY', autor: 'Juan Miguel Álvarez',tema: 'Derecho, política o periodísmo',descripcion: 'El galardonado periodista nos presenta esta recopilación de veinticinco crónicas hechas durante trece años a lo largo de las cuatro ciudades donde ha vivido: Cali, Bogotá, Pereira y Medellín, y otros rincones del país.',url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254916'},
    {id: '3',cover: '/img/portadas/03_por.png',titulo: 'Democracia envenenada: Rusia en la era de Putin', autor: 'Bernhard Laugaland Mohr',tema: 'Derecho, política o periodísmo',descripcion: 'Este libro nos da un completo vistazo de cómo, en pleno siglo XXI, los gobernantes, siendo Putin solo un ejemplo, controlan los medios y la forma de pensar de sus habitantes para afianzarse, con mano dura, en el poder.',url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254914'},
    {id: '2',cover: '/img/portadas/02_por.png',titulo: 'XXXXXX', autor: 'Juan Miguel Álvarez',tema: 'Derecho, política o periodísmo',descripcion: 'El galardonado periodista nos presenta esta recopilación de veinticinco crónicas hechas durante trece años a lo largo de las cuatro ciudades donde ha vivido: Cali, Bogotá, Pereira y Medellín, y otros rincones del país.',url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254916'},
    {id: '3',cover: '/img/portadas/03_por.png',titulo: 'Democracia envenenada: Rusia en la era de Putin', autor: 'Bernhard Laugaland Mohr',tema: 'Derecho, política o periodísmo',descripcion: 'Este libro nos da un completo vistazo de cómo, en pleno siglo XXI, los gobernantes, siendo Putin solo un ejemplo, controlan los medios y la forma de pensar de sus habitantes para afianzarse, con mano dura, en el poder.',url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254914'},
  ]
};

literatura.libros.forEach(libro => {
  const nuevaNovedad = crearNovedad(libro.titulo, libro.autor, libro.url, libro.year, libro.idioma, libro.area, libro.editorial);
  totalLiteratura.appendChild(nuevaNovedad);
});

comunicativa.libros.forEach(libro => {
  const nuevaNovedad = crearNovedad(libro.titulo, libro.autor, libro.url, libro.year, libro.idioma, libro.area, libro.editorial);
  totalComunicativa.appendChild(nuevaNovedad);
});

academica.libros.forEach(libro => {
  const nuevaNovedad = crearNovedad(libro.titulo, libro.autor, libro.url, libro.year, libro.idioma, libro.area, libro.editorial);
  totalAcademica.appendChild(nuevaNovedad);
});