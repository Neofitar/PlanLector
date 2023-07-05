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
    { id: '15', cover: '/img/portadas/15.png', titulo: 'Problemas Resueltos De Hidráulica De Canales', autor: 'Máximo Villón Béjar', year: '2007', editorial: 'Instituto Tecnológico De Costa Rica', idioma: 'Español', area: 'Disciplinar', url: 'https://ugc.overdrive.com/media/2654890' },
    { id: '16', cover: '/img/portadas/16.png', titulo: 'Aplicaciones De Drones En Ingeniería Civil', autor: 'Arturo Tadeo Espinoza', year: '2022', editorial: 'Marcombo Ediciones Técnicas', idioma: 'Español', area: 'Disciplinar', url: 'N/A' },
    { id: '17', cover: '/img/portadas/17.png', titulo: 'Ingeniería Estructural', autor: 'José Oscar Jaramillo Jiménez', year: '2010', editorial: 'Universidad Nacional De Colombia', idioma: 'Español', area: 'Disciplinar', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/129997' },
    { id: '18', cover: '/img/portadas/18.png', titulo: 'Energía Alternativa', autor: 'Marek Walisiewicz', year: '2005', editorial: 'Planeta Mexicana', idioma: 'Español', area: 'Investigativa', url: 'N/A' },
    { id: '19', cover: '/img/portadas/19.png', titulo: 'El Violinista De Los Puentes Colgantes', autor: 'José María Villa', year: '1998', editorial: 'Panamericana', idioma: 'Español', area: 'Investigativa', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=151176' },
    { id: '20', cover: '/img/portadas/20.png', titulo: 'Jerusalén. Caballo De Troya 1', autor: 'Jj Benites', year: '2012', editorial: 'Grupo Planeta', idioma: 'Español', area: 'Formación de lectura académica', url: 'https://ugc.overdrive.com/media/2000604' },
    { id: '21', cover: '/img/portadas/21.png', titulo: 'Guía Para Implementar Y Gestionar Proyectos Bim Diario De Un Bim Manager David Barco Moreno', autor: ' Barco Moreno, David', year: '2018', editorial: ' Independently Published', idioma: 'Español', area: 'Disciplinar', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=198874' },
    { id: '22', cover: '/img/portadas/22.png', titulo: 'Metodología De La Investigación Las Rutas Cuantitativa, Cualitativa Y Mixta ', autor: 'Roberto Hernández - Sampieri, Christian Paulina Mendoza Torres', year: '2018', editorial: ' Mcgraw Hill', idioma: 'Español', area: 'Investigativa', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=198501' },
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