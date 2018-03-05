// Index.html

$('#principal').hide().addClass("hide").addClass("fade");
$('.h1-cabecera').hide().addClass("hide").addClass("fade");
$('.h3-cabecera').hide().addClass("hide").addClass("fade");
$('.container-2').hide().addClass("hide").addClass("fade");
$('#jumbo-1').hide().addClass("hide").addClass("fade");
$('#jumbo-2').hide().addClass("hide").addClass("fade");
$('#jumbo-3').hide().addClass("hide").addClass("fade");
$('#jumbo-4').hide().addClass("hide").addClass("fade");

//Carta

$('#entrantes').hide().addClass("hide").addClass("fade");
$('#primeros').hide().addClass("hide").addClass("fade");
$('#segundos').hide().addClass("hide").addClass("fade");
$('#postres').hide().addClass("hide").addClass("fade");
$('#bebidas').hide().addClass("hide").addClass("fade");
$('#menus').hide().addClass("hide").addClass("fade");
$('#menu-lateral').hide().addClass("hide").addClass("fade");

//Menú

$('#menu-1').hide().addClass("hide").addClass("fade");
$('#menu-2').hide().addClass("hide").addClass("fade");
$('#menu-3').hide().addClass("hide").addClass("fade");
$('#menu-4').hide().addClass("hide").addClass("fade");
$('#menu-5-lateral').hide().addClass("hide").addClass("fade");

//Reserva

$('.jumbotron-container-reserva').hide().addClass("hide").addClass("fade");

//Contacto

$('.jumbotron-container-contacto').hide().addClass("hide").addClass("fade");

//Reseñas

$('#jumbo-comentarios-1').hide().addClass("hide").addClass("fade");
$('#jumbo-comentarios-2').hide().addClass("hide").addClass("fade");
$('#jumbo-comentarios-3').hide().addClass("hide").addClass("fade");
$('#jumbo-comentarios-4').hide().addClass("hide").addClass("fade");
$('.estrellas').hide().addClass("hide").addClass("fade");

//Galeria

$('.jumbotron-container-galeria').hide().addClass("hide").addClass("fade");

$(document).ready(function() {
  // Index.html
  $('#principal').show();
  $('.h1-cabecera').show();
  $('.h3-cabecera').show();
  $('.container-2').show();
  $('#jumbo-1').show();
  $('#jumbo-2').show();
  $('#jumbo-3').show();
  $('#jumbo-4').show();

  setTimeout(() => {
    $('#principal').addClass("show").removeClass("hide");
  }, 100);
  setTimeout(() => {
    $('.h1-cabecera').removeClass("hide").addClass("animated").addClass("fadeInDown");
  }, 1200);
  setTimeout(() => {
    $('.h3-cabecera').removeClass("hide").addClass("animated").addClass("fadeInUp");
  }, 1500);
  setTimeout(() => {
    $('.container-2').addClass("show").removeClass("hide").addClass("animated").addClass("slideInUp");
  }, 2500);
  setTimeout(() => {
    $('#jumbo-1').addClass("show").removeClass("hide").addClass("animated").addClass("slideInLeft");
  }, 3000);
  setTimeout(() => {
    $('#jumbo-2').addClass("show").removeClass("hide").addClass("animated").addClass("slideInRight");
  }, 3700);
  setTimeout(() => {
    $('#jumbo-3').addClass("show").removeClass("hide").addClass("animated").addClass("slideInLeft");
  }, 4400);
  setTimeout(() => {
    $('#jumbo-4').addClass("show").removeClass("hide").addClass("animated").addClass("slideInRight");
  }, 5100);

  //Carta

  $('#entrantes').show();
  $('#primeros').show();
  $('#segundos').show();
  $('#postres').show();
  $('#bebidas').show();
  $('#menus').show();
  $('#menu-lateral').show();

  setTimeout(() => {
    $('#entrantes').addClass("show").removeClass("hide").addClass("animated").addClass("slideInUp");
  }, 1500);
  setTimeout(() => {
    $('#primeros').addClass("show").removeClass("hide").addClass("animated").addClass("slideInUp");
  }, 2300);
  setTimeout(() => {
    $('#segundos').addClass("show").removeClass("hide").addClass("animated").addClass("slideInUp");
  }, 3000);
  setTimeout(() => {
    $('#postres').addClass("show").removeClass("hide").addClass("animated").addClass("slideInUp");
  }, 3700);
  setTimeout(() => {
    $('#bebidas').addClass("show").removeClass("hide").addClass("animated").addClass("slideInUp");
  }, 4400);
  setTimeout(() => {
    $('#menus').addClass("show").removeClass("hide").addClass("animated").addClass("slideInUp");
  }, 5100);
  setTimeout(() => {
    $('#menu-lateral').addClass("show").removeClass("hide").addClass("animated").addClass("slideInLeft");
  }, 5300);

  //Menú

  $('#menu-1').show();
  $('#menu-2').show();
  $('#menu-3').show();
  $('#menu-4').show();
  $('#menu-5-lateral').show();

  setTimeout(() => {
    $('#menu-1').addClass("show").removeClass("hide").addClass("animated").addClass("slideInUp");
  }, 1500);
  setTimeout(() => {
    $('#menu-2').addClass("show").removeClass("hide").addClass("animated").addClass("slideInUp");
  }, 2300);
  setTimeout(() => {
    $('#menu-3').addClass("show").removeClass("hide").addClass("animated").addClass("slideInUp");
  }, 3000);
  setTimeout(() => {
    $('#menu-4').addClass("show").removeClass("hide").addClass("animated").addClass("slideInUp");
  }, 3700);
  setTimeout(() => {
    $('#menu-5-lateral').addClass("show").removeClass("hide").addClass("animated").addClass("slideInUp");
  }, 3900);

  //Reserva

  $('.jumbotron-container-reserva').show();

  setTimeout(() => {
    $('.jumbotron-container-reserva').addClass("show").removeClass("hide").addClass("animated").addClass("slideInUp");
  }, 1000);

  //Contacto

  $('.jumbotron-container-contacto').show();

  setTimeout(() => {
    $('.jumbotron-container-contacto').addClass("show").removeClass("hide").addClass("animated").addClass("slideInUp");
  }, 1200);

  //Reseñas

  $('#jumbo-comentarios-1').show();
  $('#jumbo-comentarios-2').show();
  $('#jumbo-comentarios-3').show();
  $('#jumbo-comentarios-4').show();
  $('.estrellas').show();

  setTimeout(() => {
    $('#jumbo-comentarios-1').addClass("show").removeClass("hide").addClass("animated").addClass("slideInLeft");
  }, 1200);
  setTimeout(() => {
    $('#jumbo-comentarios-2').addClass("show").removeClass("hide").addClass("animated").addClass("slideInRight");
  }, 1900);
  setTimeout(() => {
    $('#jumbo-comentarios-3').addClass("show").removeClass("hide").addClass("animated").addClass("slideInLeft");
  }, 2600);
  setTimeout(() => {
    $('#jumbo-comentarios-4').addClass("show").removeClass("hide").addClass("animated").addClass("slideInRight");
  }, 3300);

  setTimeout(() => {
    $('.estrellas').addClass("show").removeClass("hide").addClass("animated").addClass("rollIn");
  }, 3600);

  //Galeria

  $('.jumbotron-container-galeria').show();

  setTimeout(() => {
    $('.jumbotron-container-galeria').addClass("show").removeClass("hide").addClass("animated").addClass("slideInUp");
  }, 1000);

});
