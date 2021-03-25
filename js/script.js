$(document).ready(function () {
  // SUPERSLIDES
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false,
  });

  //TYPED JS
  var typed = new Typed(".typed", {
    strings: ["Frontend Web Developer.", "Food Connoisseur.", "Philomath (/ˈfɪləmæθ/) a lover of learning."],
    typeSpeed: 100,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });
});
