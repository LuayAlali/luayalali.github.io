/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


  function toggleIcon() {
    document.querySelector(".hamburger").style.display = "none";
  }

  function toggleIconBack() {
    document.querySelector(".hamburger").style.display = "block";
  }
  
  var hamburger = document.querySelector(".hamburger");
  // On click
  // hamburger.addEventListener("click", function() {
  //   // Toggle class "is-active"
  //   hamburger.classList.toggle("is-active");
  
  // });