$(document).ready(function() {
  $(".openbtn").click(function() {
    if ($("#menu").hasClass('panelactive')) {
      $("#menu").removeClass('panelactive').addClass('panelinactive');
    } else {
      $("#menu").removeClass('panelinactive').addClass('panelactive');
    }
  });

  $(".menu__link").click(function() {
    $("#menu").removeClass('panelactive').addClass('panelinactive');
  });
});