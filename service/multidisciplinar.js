const crearNovedad = (titulo, autor, url, year, idioma, area, editorial, cover) => {
  const novedad = document.createElement('div');

  const detallesNovedad = `<div class="books" id="books">
    <img class="cover" src="${cover}" alt="${titulo}">
    <div class="books-details">
        <h2 class="books-titulo">${titulo}</h2>
        <h3 class="books-autor">${autor}</h3>
        <p class="books-descripcion">${editorial} | <strong>${year}</strong></p>
        <p class="books-descripcion">${idioma}</p>
        <p class="books-area">${area}</p>
        <li class="button-acceso" id="button-acceso"><a href="${url}" target="_blank">Consulta aquí</a></li>
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
    { id: '88', cover: '/img/portadas/88.png', titulo: 'Historia Del Siglo Xx', autor: 'Eric Hobsbawm', year: '1994', editorial: 'Planeta Libros', idioma: 'Inglés', area: 'Hitoría y Filosofía', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=195247' },
    { id: '89', cover: '/img/portadas/89.png', titulo: 'Historia Mínima De Colombia', autor: 'Jorge Orlando Melo', year: '2017', editorial: 'Planeta Libros', idioma: 'Español', area: 'Hitoría y Filosofía', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=198000' },
    { id: '90', cover: '/img/portadas/90.png', titulo: 'Discurso Del Método ', autor: 'René Descartes', year: '2018', editorial: 'Alianza Editorial', idioma: 'Español', area: 'Hitoría y Filosofía', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/128593' },
    { id: '91', cover: '/img/portadas/91.png', titulo: 'Seminario Internacional: La Formación Y Gestión Y Políticas Culturales Para La Diversidad Cultural Y El Desarrollo', autor: 'Belda Villa Vlaitani', year: '2012', editorial: 'Documenta Universitaria', idioma: 'Español', area: 'Diversidad cultural', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/115824' },
    { id: '92', cover: '/img/portadas/92.png', titulo: 'Diversidad Cultural E Interculturalidad En Nuestra América', autor: 'Margarita Ortiz', year: '2012', editorial: 'Ediciones Y Gráficos ', idioma: 'Español', area: 'Diversidad cultural', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/121865' },
    { id: '93', cover: '/img/portadas/93.png', titulo: 'Diversidad Cultural Cultural En La Escuela', autor: 'Héctor Melero Sánchez ', year: '2023', editorial: 'Universidad Nacional De Educación A Distancia ', idioma: 'Español', area: 'Diversidad cultural', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/228555' },
  ]
};

const academica = {
  libros: [
    { id: '80', cover: '/img/portadas/80.png', titulo: 'El Aula Afectiva', autor: 'Laura Lewin', year: '2014', editorial: 'Santillana Argentina', idioma: 'Español', area: 'Disciplinar', url: 'N/A' },
    { id: '81', cover: '/img/portadas/81.png', titulo: 'Construyendo Las Epistemologías Del Sur', autor: 'Boaventura De Soussa Santos', year: '2018', editorial: 'Clacso', idioma: 'Español', area: 'Disciplinar', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/171062' },
    { id: '82', cover: '/img/portadas/82.png', titulo: 'La Evaluación Como Oportunidad ', autor: 'Graciela Cappelletti', year: '2017', editorial: 'Epub', idioma: 'Español', area: 'Disciplinar', url: 'https://ugc.overdrive.com/media/3294658' },
    { id: '83', cover: '/img/portadas/83.png', titulo: 'Metodología De Los Programas De Investigación Científica', autor: 'Imree Lakatus', year: '1989', editorial: 'Alianza', idioma: 'Español', area: 'Investigativa', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=242855' },
    { id: '84', cover: '/img/portadas/84.png', titulo: 'Quealitative Inquiry And Research Designe Among Fives Approvaches - Metodología De La Investigación Para Administración, Economía Y Ciencias Sociales ', autor: 'John W Creswell', year: '2021', editorial: 'Sage', idioma: 'Inglés', area: 'Investigativa', url: 'N/A' },
    { id: '85', cover: '/img/portadas/85.png', titulo: 'Metodología De La Investigación Para Administración, Economía Y Ciencias Sociales ', autor: 'Cesar Augusto Bernal ', year: '2006', editorial: 'Pearson', idioma: 'Español', area: 'Investigativa', url: 'https://www-ebooks7-24-com.bibliodigital.ugc.edu.co/?il=19299' },
    { id: '86', cover: '/img/portadas/86.png', titulo: 'Lógica: La Teoría De La Investigación (1938) ', autor: 'Jhon Dewey', year: '1938', editorial: 'Prensas De La Universidad De Zaragoza', idioma: 'Español', area: 'Formación de lectura académica', url: 'https://elibro-net.bibliodigital.ugc.edu.co/es/lc/ugc/titulos/212761' },
    { id: '87', cover: '/img/portadas/87.png', titulo: 'Escribir Hoy En El Posgrado: Escritura Académica Y Producción De Conocimiento ', autor: 'Constanza Moya, Ingrid Vanegas Y Claudia González ', year: '2014', editorial: 'Universidad Externado ', idioma: 'Español', area: 'Formación de lectura académica', url: 'N/A' },
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