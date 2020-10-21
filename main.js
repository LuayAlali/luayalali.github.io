
// jQuery

// navbar


// on click event
$('.nav-link').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });

  $('.contact-link').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });

  $('.jumbotron').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });

  $('.container-fluid').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });

  $('.bottom-navbar').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });

// on scroll event 

//// Navbar collapses on window scroll
//$(window).scroll(function() {
//    $('.navbar-collapse').collapse('hide');
//});


  // cards

//project-1
  $('.container-fluid').on('click',function() {
    $('.card-1-collapse').collapse('hide');
  });

  $('.navbar').on('click',function() {
    $('.card-1-collapse').collapse('hide');
  });


  $('.bottom-navbar').on('click',function() {
    $('.card-1-collapse').collapse('hide');
  });

  //project-2
  $('.container-fluid').on('click',function() {
    $('.card-2-collapse').collapse('hide');
  });

  $('.navbar').on('click',function() {
    $('.card-2-collapse').collapse('hide');
  });


  $('.bottom-navbar').on('click',function() {
    $('.card-2-collapse').collapse('hide');
  });

//project-3
$('.container-fluid').on('click',function() {
  $('.card-3-collapse').collapse('hide');
});

$('.navbar').on('click',function() {
  $('.card-3-collapse').collapse('hide');
});


$('.bottom-navbar').on('click',function() {
  $('.card-3-collapse').collapse('hide');
});

//project-4
$('.container-fluid').on('click',function() {
  $('.card-4-collapse').collapse('hide');
});

$('.navbar').on('click',function() {
  $('.card-4-collapse').collapse('hide');
});


$('.bottom-navbar').on('click',function() {
  $('.card-4-collapse').collapse('hide');
});

//project-5
$('.container-fluid').on('click',function() {
  $('.card-5-collapse').collapse('hide');
});

$('.navbar').on('click',function() {
  $('.card-5-collapse').collapse('hide');
});


$('.bottom-navbar').on('click',function() {
  $('.card-5-collapse').collapse('hide');
});

// Ice Vanilla 


// scroll Reveal

ScrollReveal().reveal('.always', {delay: 500, easing:'cubic-bezier(.17,.67,.92,.34)'});
ScrollReveal().reveal('.jumbo-sub-1', {delay: 850,  easing:'cubic-bezier(.17,.67,.92,.34)'});
ScrollReveal().reveal('.project-btn', {delay: 1350, easing:'cubic-bezier(.17,.67,.92,.34)', scale: 2});