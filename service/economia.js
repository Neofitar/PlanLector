const crearNovedad = (titulo, autor, url, year, idioma, area, editorial, cover) => {
  const novedad = document.createElement('div');

  const detallesNovedad = `<div class="books" id="books-economia">
    <img class="cover" src="${cover}" alt="${titulo}">
    <div class="books-details">
        <h2 class="books-titulo">${titulo}</h2>
        <h3 class="books-autor">${autor}</h3>
        <p class="books-descripcion">${editorial} | <strong>${year}</strong></p>
        <p class="books-descripcion">${idioma}</p>
        <p class="books-area">${area}</p>
        <li class="button-acceso" id="button-acceso-economia"><a href="${url}" target="_blank">Consulta aquí</a></li>
    </div>`;

  novedad.innerHTML = detallesNovedad;
  return novedad
};

const totalLiteratura = document.querySelector("[data-literatura]");
const totalComunicativa = document.querySelector("[data-comunicativa]");
const totalAcademica = document.querySelector("[data-academica]");

const literatura = {
  libros: [
  ]
};

const comunicativa = {
  libros: [
    { id: '35', cover: '/img/portadas/35.png', titulo: 'Ética a Nicómaco', autor: 'Aristóteles', year: '2004', editorial: 'Plutón Ediciones', idioma: 'Español', area: 'Historía y Filosofía', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/93982' },
    { id: '34', cover: '/img/portadas/34.png', titulo: 'Counterculture: answering a woke culture with love, light, and life', autor: 'Duane Sheriff, Mark Williams, Et Al.', year: '2022', editorial: 'Destiny Imagen Publisher', idioma: 'Inglés', area: 'Diversidad cultural', url: 'https://ugc.overdrive.com/media/9005294' },
    { id: '31', cover: '/img/portadas/31.png', titulo: 'El banquete', autor: 'Platón', year: '2023', editorial: 'One File', idioma: 'Español', area: 'Historía y Filosofía', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/189752' },
    { id: '32', cover: '/img/portadas/32.png', titulo: 'El origen de los otros', autor: 'Tony Morrison', year: '2020', editorial: 'Lumen', idioma: 'Español', area: 'Diversidad cultural', url: 'https://ugc.overdrive.com/media/5928651' },
    { id: '33', cover: '/img/portadas/33.png', titulo: 'El sublime objeto de la ideología', autor: 'Zizek, Slavoj', year: '2009', editorial: 'Verso', idioma: 'Español', area: 'Historía y Filosofía', url: '/components/otros.html' },
  ]
};

const academica = {
  libros: [
    { id: '28', cover: '/img/portadas/28.png', titulo: 'La profesión contable una mirada integral desde la investigación', autor: 'Edwin Mauricio Castro', year: '2021', editorial: 'Corporación Universitaria Autónoma de Nariño', idioma: 'Español', area: 'Disciplinar', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/221404' },
    { id: '25', cover: '/img/portadas/25.png', titulo: 'The Blue Economy (la economía azul)', autor: 'Gunter Pauli', year: '2017', editorial: 'Xlibris', idioma: 'Inglés', area: 'Disciplinar', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=186217' },
    { id: '29', cover: '/img/portadas/29.png', titulo: 'El precio de la desigualdad', autor: 'Joseph E. Stiglitz', year: '2022', editorial: 'Debolsillo', idioma: 'Español', area: 'Investigativa', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=189082' },
    { id: '26', cover: '/img/portadas/26.png', titulo: 'Metodologías de la investigación científica en ciencias económicas y administrativas', autor: 'Julio Cesar Quintero Rodríguez', year: '2020', editorial: 'Universo Sur', idioma: 'Español', area: 'Investigativa', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/171676' },
    { id: '27', cover: '/img/portadas/27.png', titulo: 'Quien le hace la cena a Adam Smith', autor: 'Katrine Marçal Y Elda García-Posada Gómez', year: '2016', editorial: 'Debate', idioma: 'Español', area: 'Formación de lectura académica', url: 'https://ugc.overdrive.com/media/2669552' },
    { id: '23', cover: '/img/portadas/23.png', titulo: 'La metodología de los programas de investigación científica', autor: 'Lakatos Imre', year: '2010', editorial: 'Alianza', idioma: 'Español', area: 'Investigativa', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=242855' },
    { id: '30', cover: '/img/portadas/30.png', titulo: 'Todo lo que he aprendido con la psicología económica: el encuentro entre la economía y la psicología', autor: 'Richard H. Thaler', year: '2019', editorial: 'Paidos', idioma: 'Español', area: 'Formación de lectura académica', url: 'https://ugc.overdrive.com/media/2960659' },
    { id: '24', cover: '/img/portadas/24.png', titulo: 'La gran búsqueda', autor: 'Silvia Nassar', year: '2012', editorial: 'Debate', idioma: 'Español', area: 'Formación de lectura académica', url: 'https://ugc.overdrive.com/media/2080639' },
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