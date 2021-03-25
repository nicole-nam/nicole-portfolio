$(document).ready(function () {
  // SUPERSLIDES
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false,
  });

  //TYPED JS
  var typed = new Typed(".typed", {
    strings: ["Frontend Web Developer.", "Connoisseur of Food.", "Student."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });
});
