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

  $(function() {
    // SmartTab initialize
    $('#smarttab').smartTab({
      selected: 0, // Initial selected tab, 0 = first tab
      theme: 'elite', // theme, related css need to include for other than default theme
      justified: true, // Nav menu justification. true/false
      autoAdjustHeight: true, // Automatically adjust content height
      backButtonSupport: true, // Enable the back button support
      enableUrlHash: true, // Enable selection of the step based on url hash
      transition: {
        animation: 'none', // Animation effect on navigation, none|fade|slideHorizontal|slideVertical|slideSwing|css(Animation CSS class also need to specify)
      },
    });
  });
});