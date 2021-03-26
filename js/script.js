$(document).ready(function () {
  // SUPERSLIDES
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false,
  });

  //TYPED JS
  const typed = new Typed(".typed", {
    strings: [
      "Frontend Web Developer.",
      "Food Connoisseur.",
      "Philomath (/ˈfɪləmæθ/) a lover of learning.",
    ],
    typeSpeed: 100,
    loop: true,
    startDelay: 500,
    showCursor: false,
  });

  const aboutTopOffset = $("#about").offset().top;

  $(window).scroll(function () {
    if (window.pageYOffset > aboutTopOffset - $(window).height() + 450) {
      $(".aboutBox").animate({ opacity: 1 }, 1000);
    }
  });
});
