const crearNovedad = (titulo, autor, url, year, idioma, area, editorial, cover) => {
  const novedad = document.createElement('div');

  const detallesNovedad = `<div class="books" id="books-ingenierias">
    <img class="cover" src="${cover}" alt="${titulo}">
    <div class="books-details">
        <h2 class="books-titulo">${titulo}</h2>
        <h3 class="books-autor">${autor}</h3>
        <p class="books-descripcion">${editorial} | <strong>${year}</strong></p>
        <p class="books-descripcion">${idioma}</p>
        <p class="books-area">${area}</p>
        <li class="button-acceso" id="button-acceso-ingenierias"><a href="${url}" target="_blank">Consulta aquí</a></li>
    </div>`;

  novedad.innerHTML = detallesNovedad;
  return novedad
};

const totalLiteratura = document.querySelector("[data-literatura]");
const totalComunicativa = document.querySelector("[data-comunicativa]");
const totalAcademica = document.querySelector("[data-academica]");




const literatura = {
  libros:
    [

    ]
};

const comunicativa = {
  libros: [
  ]
};

const academica = {
  libros: [
    { id: '21', cover: '/img/portadas/21.png', titulo: 'Guía para implementar y gestionar proyectos BIM diario de un BIM manager', autor: 'Barco Moreno, David', year: '2018', editorial: 'Independently Publisher', idioma: 'Español', area: 'Disciplinar', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=198874' },
    { id: '20', cover: '/img/portadas/20.png', titulo: 'Jerusalén: Caballo de Troya 1', autor: 'J. Benites', year: '2012', editorial: 'Planeta', idioma: 'Español', area: 'Formación de lectura académica', url: 'https://ugc.overdrive.com/media/2000604' },
    { id: '19', cover: '/img/portadas/19.png', titulo: 'El violinista de los puentes colgantes', autor: 'José María Villa', year: '1998', editorial: 'Panamericana', idioma: 'Español', area: 'Investigativa', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=151176' },
    { id: '17', cover: '/img/portadas/17.png', titulo: 'Ingeniería estructural', autor: 'José Oscar Jaramillo Jiménez', year: '2010', editorial: 'Universidad Nacional De Colombia', idioma: 'Español', area: 'Disciplinar', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/129997' },
    { id: '15', cover: '/img/portadas/15.png', titulo: 'Problemas resueltos de hidráulica de canales', autor: 'Máximo Villón Béjar', year: '2007', editorial: 'Instituto Tecnológico De Costa Rica', idioma: 'Español', area: 'Disciplinar', url: 'https://ugc.overdrive.com/media/2654890' },
    { id: '22', cover: '/img/portadas/22.png', titulo: 'Metodología de la investigación las rutas cuantitativa, cualitativa y mixta', autor: 'Roberto Hernández - Sampieri, Christian Paulina Mendoza Torres', year: '2018', editorial: 'McGraw Hill', idioma: 'Español', area: 'Investigativa', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=198501' },
    { id: '16', cover: '/img/portadas/16.png', titulo: 'Aplicaciones de drones en ingeniería civil', autor: 'Tadeo Espinoza, Arturo', year: '2022', editorial: 'Marcombo Ediciones Técnicas', idioma: 'Español', area: 'Disciplinar', url: '/components/otros.html' },
    { id: '18', cover: '/img/portadas/18.png', titulo: 'Energía alternativa', autor: 'Walisiewicz, Marek', year: '2005', editorial: 'Planeta Mexicana', idioma: 'Español', area: 'Investigativa', url: '/components/otros.html' },
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