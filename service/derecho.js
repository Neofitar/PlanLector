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
    { id: '9', cover: '/img/portadas/9.png', titulo: 'Diversidad Cultural Y Educación', autor: 'Matute, Esmeralda', year: '1999', editorial: 'Universidad De Guadalajara', idioma: 'Español', area: 'Diversidad cultural', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/73415' },
    { id: '10', cover: '/img/portadas/10.png', titulo: 'Diversidad Cultural Y Equidad En La Escuela', autor: 'Melero Sánchez, Héctor - Merodio Alonso, Guiomar - Aguado Odina, María Teresa', year: '2023', editorial: 'Uned - Universidad Nacional De Educación A Distancia', idioma: 'Español', area: 'Diversidad cultural', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/228555' },
    { id: '11', cover: '/img/portadas/11.png', titulo: 'Ciencia Con Conciencia ', autor: 'Edgar Morin', year: '1984', editorial: 'Antropos', idioma: 'Español', area: 'Diversidad cultural', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=28194' },
    { id: '12', cover: '/img/portadas/12.png', titulo: 'La República ', autor: 'Platón', year: '2004', editorial: 'El Cid Editor', idioma: 'Español', area: 'Historía y filosofía', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/35993' },
    { id: '13', cover: '/img/portadas/13.png', titulo: 'El Yo, El Otro Y El Tercero: El Legado De Bajtín En Todorov. Acta Poética Vol.27 No 1, 2006', autor: 'Zbinden, Karine', year: '2006', editorial: 'Red Universidad Nacional Autónoma De México', idioma: 'Español', area: 'Historía y filosofía', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/7141' },
    { id: '14', cover: '/img/portadas/14.png', titulo: 'Silenciando El Pasado: El Poder Y La Producción De La Historia', autor: 'Michel-  Roph Trouillot', year: '2017', editorial: 'Comares', idioma: 'Español', area: 'Historía y filosofía', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/174711' },
  ]
};

const academica = {
  libros: [
    { id: '1', cover: '/img/portadas/1.png', titulo: 'Reseña Crítica De “Los Orígenes Del Totalitarismo”, De Arendt, Hanna', autor: 'Equipo académico', year: '2011', editorial: 'La Bisagra', idioma: 'Español', area: 'Disciplinar', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/29858' },
    { id: '2', cover: '/img/portadas/2.png', titulo: 'Estudio De Derecho Probatorio', autor: 'Luis Felipe Vivares Porras', year: '2020', editorial: 'Universidad Pontificia Bolivariana', idioma: 'Español', area: 'Disciplinar', url: 'https://ugc.overdrive.com/media/5854458' },
    { id: '3', cover: '/img/portadas/3.png', titulo: 'El Autor Como Productor ', autor: 'Cuenca, Jaime', year: '2021', editorial: 'Dykinson', idioma: 'Español', area: 'Formación de lectura académica', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/220399' },
    { id: '4', cover: '/img/portadas/4.png', titulo: 'Crisis De La República', autor: 'Hannah Arendt', year: '2023', editorial: 'Editorial Trotta, S.A.', idioma: 'Español', area: 'Formación de lectura académica', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/227606' },
    { id: '5', cover: '/img/portadas/5.png', titulo: 'Poder Ejecutivo Y Función Jurisdiccional', autor: 'Leon Cortiñas Peláez', year: '2021', editorial: 'Temis', idioma: 'Español', area: 'Formación de lectura académica', url: 'https://ugc.overdrive.com/media/8731234' },
    { id: '6', cover: '/img/portadas/6.png', titulo: 'Hanna Arendt Y La Critica De La Facultad De Juzgar', autor: 'Lopez, Ana Maria', year: '2006', editorial: 'Red Tópicos', idioma: 'Español', area: 'Investigativa', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/24132' },
    { id: '7', cover: '/img/portadas/7.png', titulo: 'Contemporaneidad Latinoamericana Y Análisis Cultural: Conversaciones Al Encuentro De Walter Benjamín', autor: 'Martín-Barbero, Jesús - Herlinghaus, Hermann', year: '2000', editorial: 'Editorial Iberoamericana / Vervuert', idioma: 'Español', area: 'Investigativa', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/202760' },
    { id: '8', cover: '/img/portadas/8.png', titulo: 'Investigación Académica', autor: 'Julio Del Valle, María de los Ángeles Fernández', year: '2016', editorial: 'Fondo Editorial De La Pucp', idioma: 'Español', area: 'Investigativa', url: 'https://ugc.overdrive.com/media/3446276' },
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