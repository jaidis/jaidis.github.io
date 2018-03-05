// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// + Iniciar variables globales
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log('Iniciando variables globales');
var apiKey = '9d074a1f';
var busqueda = '';
var jsonBusqueda = [];
var jsonPelicula = [];
var peliculaTemporal = '';
var contadorPaginas = 1;
var maxPagina = 100;
var contenedorPeliculas = [];
var idPelicula = '';
var totalRegistrados = 0;
var totalResultados = 0;

// console.log('Variables globales cargadas');

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// + Definición de clases
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class Pelicula {
  constructor(titulo = '', fecha = '', imdbID = '', poster = '') {
    this.titulo = titulo;
    this.fecha = fecha;
    this.imdbID = imdbID;
    this.poster = poster;
  }
  extendido(calificacion = '', lanzamiento = '', duracion = '', genero = '', director = '', sinopsis = '', puntuacion = '') {
    this.calificacion = calificacion;
    this.lanzamiento = lanzamiento;
    this.duracion = duracion;
    this.genero = genero;
    this.director = director;
    this.sinopsis = sinopsis;
    this.puntuacion = puntuacion;
  }
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// + Funciones
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function ajaxBusqueda(pagina = 1, tipo = 'movie') {
  busqueda = busqueda.replace(/\s/g, '+');
  // console.log('http://www.omdbapi.com/?apikey=' + apiKey + '&s=' + busqueda + '&type=movie&page=' + pagina);
  $.ajax({
      url: 'https://www.omdbapi.com/?apikey=' + apiKey + '&s=' + busqueda + '&type=movie&page=' + pagina,
      type: 'GET',
      dataType: 'json',
      success: function(response) {
        jsonBusqueda = JSON.stringify(response);
        jsonBusqueda = JSON.parse(jsonBusqueda);
        // console.log(jsonBusqueda);
      }
    })
    .done(function() {
      console.log("Busqueda Ajax Completada");
      maxPagina = parseInt((parseInt(jsonBusqueda.totalResults) / 10) + 1);
      totalResultados = jsonBusqueda.totalResults;
      guardaPeliculas();
    })
    .fail(function(response) {
      console.log("Error, no se ha podido realizar la busqueda Ajax " + response);
    });
}

function guardaPeliculas() {
  // console.log(jsonBusqueda.Search.length);
  for (var i = 0; i < jsonBusqueda.Search.length; i++) {
    // console.log(jsonBusqueda.Search[i].imdbID);
    if (jsonBusqueda.Search[i].imdbID != undefined) {
      ajaxPelicula(jsonBusqueda.Search[i].imdbID);
    } else {
      console.log('No se encuentra ' + jsonBusqueda.Search[i].imdbID + '');
    }
  }
}

function ajaxPelicula(imdbID) {
  $.ajax({
      url: 'https://www.omdbapi.com/?apikey=' + apiKey + '&i=' + imdbID + '&plot=full',
      type: 'GET',
      dataType: 'json',
      success: function(response) {
        jsonPelicula = JSON.stringify(response);
        jsonPelicula = JSON.parse(jsonPelicula);
        // console.log(jsonPelicula);
      }
    })
    .done(function() {
      // console.log("Creando Objeto Pelicula");
      crearPelicula();
    })
    .fail(function() {
      $('.alerta').append('<div class="alert alert-danger alert-dismissible fade show col-lg-12" role="alert">\
      <strong>Error!</strong> No se ha podido encontrar la pelicula con el id ' + imdbID + '\
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">\
      <span aria-hidden="true">&times;</span>\
      </button>\
      </div>')
      // console.log("Error, no se ha podido encontrar la pelicula: "+ imdbID);
    });
}

function crearPelicula() {
  if (jsonPelicula.Poster == "N/A" || !(jsonPelicula.Poster)) {
    jsonPelicula.Poster = "img/notfound.png";
    // console.log('sin foto');
  }
  peliculaTemporal = new Pelicula(jsonPelicula.Title,
    jsonPelicula.Year,
    jsonPelicula.imdbID,
    jsonPelicula.Poster);
  peliculaTemporal.extendido(jsonPelicula.Rated,
    jsonPelicula.Released,
    jsonPelicula.Runtime,
    jsonPelicula.Genre,
    jsonPelicula.Director,
    jsonPelicula.Plot,
    jsonPelicula.imdbRating)
  // console.log(peliculaTemporal);
  contenedorPeliculas.push(peliculaTemporal);
}

function selccionaPelicula() {
  $('.peliculas').off('click');
  $('.peliculas').on('click', '.informacion', function(event) {
    event.preventDefault();
    idPelicula = $(this).attr("id");
    for (var i = 0; i < contenedorPeliculas.length; i++) {
      if (idPelicula == contenedorPeliculas[i].imdbID) {
        // console.log('encontrada');
        detallePelicula(i);
        break;
      }
    }
  });
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// + Toda la magia de jQuery esta aquí
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function maquetaPeliculas(inicio = 0, fin = 10) {
  var padre = $('.muestraPeliculas');
  for (inicio; inicio < fin; inicio++) {
    padre.append('<div class="col-lg-3 col-md-6 mb-4 peliculas">\
    <div class="card">\
    <img class="card-img-top" src="' + contenedorPeliculas[inicio].poster + '" alt="' + contenedorPeliculas[inicio].titulo + '"> \
    <div class="card-body">\
    <h4 class="card-title">' + contenedorPeliculas[inicio].fecha + '</h4>\
    <p class="card-text">' + contenedorPeliculas[inicio].titulo + '</p>\
    </div>\
    <div class="card-footer">\
      <button type="button" class="btn btn-outline-info btn-lg informacion" id="' + contenedorPeliculas[inicio].imdbID + '">+</button>\
    </div>\
    </div>');
  }
}

function detallePelicula(num = 0) {
  $('.detalle').empty();
  // $('.muestraPeliculas').hide();
  $('.detalle').append('<div class="col-md-4 pelicula_imdbID" id="' + contenedorPeliculas[num].imdbID + '">\
  <img class="card-img-top" src="' + contenedorPeliculas[num].poster + '" title="' + contenedorPeliculas[num].titulo + '">\
  </div>\
  <div class="col-md-8">\
  <h3 class="my-3">' + contenedorPeliculas[num].titulo + '</h3>\
  <p>' + contenedorPeliculas[num].sinopsis + '</p>\
  <h3 class="my-3">Información Detallada</h3>\
  <ul>\
  <li><strong>Director: </strong>' + contenedorPeliculas[num].director + '</li>\
  <li><strong>Género: </strong>' + contenedorPeliculas[num].genero + '</li>\
  <li><strong>Fecha de estreno: </strong>' + contenedorPeliculas[num].lanzamiento + '</li>\
  <li><strong>Duración: </strong>' + contenedorPeliculas[num].duracion + '</li>\
  <li><strong>Recomendación por edades: </strong>' + contenedorPeliculas[num].calificacion + '</li>\
  <li><strong>Puntuación general: </strong>' + contenedorPeliculas[num].puntuacion + '</li>\
  </ul>\
  </div>\
  ');
  $('.muestraPeliculas').fadeOut('fast');
  $('#mas').fadeOut('fast');
  $('.detalle').fadeIn('slow');
  $('#atras').fadeIn('slow');
}

function buscarPelicula() {
  busqueda = $('.busqueda').find('input').val();
  if (!busqueda == '') {
    $('.cargando').fadeIn('fast');
    jsonBusqueda = [];
    contadorPaginas = 1;
    contenedorPeliculas = [];
    totalRegistrados = 0;
    ajaxBusqueda(contadorPaginas);
    contadorPaginas++;
    $('.muestraPeliculas').empty();
    $('#mas').hide();
    $('.detalle').hide();
    $('#atras').hide();
    $('.muestraPeliculas').show();
    setTimeout(function() {
      maquetaPeliculas(0, contenedorPeliculas.length);
      totalRegistrados = contenedorPeliculas.length;
      // console.log(totalRegistrados,contenedorPeliculas.length);
      $('#mas').show();
      selccionaPelicula();
      $('.carousel').hide();
      $('.cargando').fadeOut('slow');
    }, 3000);
  }
}



$(document).ready(function() {
  $('.muestraPeliculas').hide();
  $('.detalle').hide();
  $('#mas').hide();
  $('#atras').hide();
  $('.cargando').hide();

  // console.log('Boton -> Buscar');
  $('.busqueda').on('click', '#buscar', function(event) {
    event.preventDefault();
    buscarPelicula();
  });

  // console.log('Tecla -> Enter');
  $('#entradaBuscar').keypress(function(e) {
    if (e.which == 13) {
      buscarPelicula();
    }
  });

  // console.log('Input-> Buscar');
  $('.busqueda').on('click', '#entradaBuscar', function(event) {
    event.preventDefault();
    $(this).closest('.busqueda').find('input').val('');
  });

  // console.log('Boton -> Mas peliculas');
  $('.masPeliculas').on('click', '#mas', function(event) {
    event.preventDefault();
    if (contadorPaginas <= maxPagina) {
      $('.cargando').fadeIn('1000');
      ajaxBusqueda(contadorPaginas);
      contadorPaginas++;
      setTimeout(function() {
        // console.log(totalRegistrados, contenedorPeliculas.length);
        maquetaPeliculas(totalRegistrados, contenedorPeliculas.length);
        totalRegistrados = contenedorPeliculas.length;
        // console.log(totalRegistrados, contenedorPeliculas.length);
        selccionaPelicula();
        $('.cargando').fadeOut('slow');
      }, 3000);
      if (contadorPaginas >= maxPagina + 1) {
        $('#mas').hide();
      }
    }
  });

  // console.log('Boton -> Volver al listado de peliculas');
  $('.volverAtras').on('click', '#atras', function(event) {
    event.preventDefault();
    $('.muestraPeliculas').fadeIn('slow');
    if (contadorPaginas <= maxPagina) {
      $('#mas').fadeIn('slow');
    }
    $('.detalle').fadeOut('slow');
    $('#atras').fadeOut('slow');
    let id = $('.detalle').find('.pelicula_imdbID').attr('id');
    $('#' + id).focus();

  });

  // console.log('Scroll infinito');
  // var win = $(window);
  // win.scroll(function(event) {
  //   event.preventDefault();
  //   var booooleano = false;
  // 	if ($(document).height() - win.height() <= win.scrollTop() +30 && booooleano == false) {
  //     // $('#loading').show();
  //     booooleano = true;
  //     if (contadorPaginas <= maxPagina) {
  //       ajaxBusqueda(contadorPaginas);
  //       contadorPaginas++;
  //     }
  //     setTimeout(function() {
  //       console.log((contadorPaginas-2)*10,(contadorPaginas-1)*10);
  //       maquetaPeliculas((contadorPaginas-2)*10,(contadorPaginas-1)*10);
  //     }, 2000);
  //     booooleano = false;
  // 	}
  // });
});
