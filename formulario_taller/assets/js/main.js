$(document).ready(function() {
  $("#modalLocalidad").dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 500
    },
    hide: {
      effect: "fade",
      duration: 500
    },
    buttons: {
      Cerrar: function() {
        $(this).dialog("close");
      }
    }
  }).parents('.ui-dialog:eq(0)').wrap('<div class="sunny"></div>');
  $("#openLocalidad").on("click", function() {
    $("#modalLocalidad").dialog("open");
  });
  $('.ui-dialog-titlebar-close').hide();

  $("#modalEnviado").dialog({
    autoOpen: false,
    show: {
      effect: "bounce",
      duration: 1000
    },
    hide: {
      effect: "blind",
      duration: 500
    },
    buttons: {
      Cerrar: function() {
        $(this).dialog("close");
      }
    }
  }).parents('.ui-dialog:eq(0)').wrap('<div class="sunny"></div>');

  $("#enviar").on("click", function() {
    $("#modalEnviado").dialog("open");
  })
  $('.ui-dialog-titlebar-close').hide();

  $("#inputLocalidad").autocomplete({
    source: function(request, response) {
      $.getJSON("http://api.geonames.org/searchJSON", {
        q: $("#inputLocalidad").val(),
        maxRows: "10",
        country: "ES",
        lang: "es",
        style: "full",
        username: "autocompletejqueryui"
      }, function(data) {
        console.log(data);
        // transformar el objeto json para pasarlo al value del input
        var localidades = data.Response === "False" ? [] : $.map(data.geonames, function(m) {
          return "" + m.name + ", " + m.adminName2;
        });
        response(localidades);
      });
    },
    minLength: 2,
    select: function(event, ui) {
      console.log(ui);
      // log("Selected: " + ui.item.label);
      // console.log(ui.item.label);
      $("#inputLocalidad").val(ui.item.label);
      event.preventDefault();
    }
  });

  $("#inputFechaEntrada").datepicker({
    numberOfMonths: 2,
    dateFormat: "DD, d MM, yy",
    regional: 'es',
    closeText: 'Cerrar',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
    dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
    weekHeader: 'Sm',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: '',
    showAnim: "slide"
  });
  $("#inputFechaSalida").datepicker({
    numberOfMonths: 2,
    dateFormat: "DD, d MM, yy",
    regional: 'es',
    closeText: 'Cerrar',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
    dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
    weekHeader: 'Sm',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: '',
    showAnim: "clip"
  });
});
