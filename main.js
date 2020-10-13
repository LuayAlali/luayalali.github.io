
// jQuery

// navbar

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

// variables
const mainBtn = document.querySelector('.project-btn');
const projects = document.querySelector('#projects');
const projectsH = document.querySelector('.projects-header');
const projectsF = document.querySelector('.projects-footer');
const about = document.querySelector('#about');

const navLinkP = document.querySelector('.projects-links');
const navLinkA = document.querySelector('.about-links');





// E.Listeners

mainBtn.addEventListener('click', () => {

 projects.style.display = 'grid';
 projectsF.style.display = 'flex';
 projectsH.style.display = 'flex';
 about.style.display = 'grid';
});

// if projects link is clicked
navLinkA.addEventListener('click', () =>{
  projects.style.display = 'grid';
 projectsF.style.display = 'flex';
 projectsH.style.display = 'flex';
 about.style.display = 'grid';
});


// if about links is clicked
navLinkP.addEventListener('click', () =>{
  projects.style.display = 'grid';
 projectsF.style.display = 'flex';
 projectsH.style.display = 'flex';
 about.style.display = 'grid';
});