const crearNovedad = (titulo, autor, url, year, idioma, area, editorial, cover) => {
  const novedad = document.createElement('div');

  const detallesNovedad = `<div class="books" id="books-derecho">
    <img class="cover" src="${cover}" alt="${titulo}">
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
  ]
};

const comunicativa = {
  libros: [
    { id: '11', cover: '/img/portadas/11.png', titulo: 'Ciencia con conciencia', autor: 'Edgar Morín', year: '1984', editorial: 'Antropos', idioma: 'Español', area: 'Diversidad cultural', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=28194' },
    { id: '9', cover: '/img/portadas/9.png', titulo: 'Diversidad cultural y educación', autor: 'Matute, Esmeralda', year: '1999', editorial: 'Universidad De Guadalajara', idioma: 'Español', area: 'Diversidad cultural', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/73415' },
    { id: '10', cover: '/img/portadas/10.png', titulo: 'Diversidad cultural y equidad en la escuela', autor: 'Melero Sánchez, Héctor - Merodio Alonso, Guiomar - Aguado Odina, María Teresa', year: '2023', editorial: 'Universidad Nacional de Educación a Distancia', idioma: 'Español', area: 'Diversidad cultural', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/228555' },
    { id: '14', cover: '/img/portadas/14.png', titulo: 'Silenciando el pasado: el poder y la producción de la historia', autor: 'Michel- Roph Trouillot', year: '2017', editorial: 'Comares', idioma: 'Español', area: 'Historía y filosofía', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/174711' },
    { id: '12', cover: '/img/portadas/12.png', titulo: 'La república', autor: 'Platón', year: '2004', editorial: 'El Cid Editor', idioma: 'Español', area: 'Historía y filosofía', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/35993' },
    { id: '13', cover: '/img/portadas/13.png', titulo: 'El yo, el otro y el tercero: el legado de Bajtín en Todorov', autor: 'Zbinden, Karine', year: '2006', editorial: 'Red Universidad Nacional Autónoma De México', idioma: 'Español', area: 'Historía y filosofía', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/7141' },
  ]
};

const academica = {
  libros: [
    { id: '3', cover: '/img/portadas/3.png', titulo: 'El autor como productor', autor: 'Cuenca, Jaime', year: '2021', editorial: 'Dykinson', idioma: 'Español', area: 'Formación de lectura académica', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/220399' },
    { id: '1', cover: '/img/portadas/1.png', titulo: 'Reseña crítica de los orígenes del totalitarismo', autor: 'Equipo Académico', year: '2011', editorial: 'La Bisagra', idioma: 'Español', area: 'Disciplinar', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/29858' },
    { id: '4', cover: '/img/portadas/4.png', titulo: 'Crisis de la república', autor: 'Hannah Arendt', year: '2023', editorial: 'Editorial Trotta', idioma: 'Español', area: 'Formación de lectura académica', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/227606' },
    { id: '8', cover: '/img/portadas/8.png', titulo: 'Investigación académica', autor: 'Julio Del Valle, María De Los Ángeles Fernández', year: '2016', editorial: 'Fondo Editorial de la PUCP', idioma: 'Español', area: 'Investigativa', url: 'https://ugc.overdrive.com/media/3446276' },
    { id: '5', cover: '/img/portadas/5.png', titulo: 'Poder ejecutivo y función jurisdiccional', autor: 'León Cortiñas Peláez', year: '2021', editorial: 'Temis', idioma: 'Español', area: 'Formación de lectura académica', url: 'https://ugc.overdrive.com/media/8731234' },
    { id: '6', cover: '/img/portadas/6.png', titulo: 'Hanna Arendt y la crítica de la facultad de juzgar', autor: 'López, Ana María', year: '2006', editorial: 'Red Tópicos', idioma: 'Español', area: 'Investigativa', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/24132' },
    { id: '2', cover: '/img/portadas/2.png', titulo: 'Estudio de derecho probatorio', autor: 'Luis Felipe Vivares Porras', year: '2020', editorial: 'Universidad Pontificia Bolivariana', idioma: 'Español', area: 'Disciplinar', url: 'https://ugc.overdrive.com/media/5854458' },
    { id: '7', cover: '/img/portadas/7.png', titulo: 'Contemporaneidad latinoamericana y análisis cultural: conversaciones al encuentro de Walter Benjamín', autor: 'Martín-Barbero, Jesús - Herlinghaus, Hermann', year: '2000', editorial: 'Editorial Iberoamericana', idioma: 'Español', area: 'Investigativa', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/202760' },
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