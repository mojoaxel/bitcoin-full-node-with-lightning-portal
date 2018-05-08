(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

  // QR-Coede
  $('#qrcode').qrcode({
    // render method: 'canvas', 'image' or 'div'
    render: 'canvas',
    // version range somewhere in 1 .. 40
    minVersion: 1,
    maxVersion: 40,
    // error correction level: 'L', 'M', 'Q' or 'H'
    ecLevel: 'M',
    // size in pixel
    size: 200,
    // code color or image element
    fill: '#4e5d6c',
    // background color or image element, null for transparent background
    background: null,
    // content
    text: $('#connect').text(),
    // corner radius relative to module width: 0.0 .. 0.5
    radius: 0.3,
    // modes
    // 0: normal
    // 1: label strip
    // 2: label box
    // 3: image strip
    // 4: image box
    mode: 0
  });

  // statistics
  var sparklineOptions = {
    type: 'bar',
    height: '50',
    barWidth: 5,
    barColor: '#FFFFFF',
    negBarColor: '#FFFFFF'
  };
  $("#connections").sparkline([
    5,4,3
  ], sparklineOptions);
  $("#channels").sparkline([
    0,1,2
  ], sparklineOptions);
  $("#invoices").sparkline([
    5,6,7,2,0,7,2,0,-4,-2,4,2,0,7,2,0,-4,
  ], sparklineOptions);

})(jQuery); // End of use strict
