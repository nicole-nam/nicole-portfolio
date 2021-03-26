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
  const skillsTopOffset = $("#skills").offset().top;

  $(window).scroll(function () {
    if (window.pageYOffset > aboutTopOffset - $(window).height() + 400) {
      $(".aboutBox").animate({ opacity: 1 }, 1000);
    }
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 400) {
      $("#list").animate({ opacity: 1 }, 1500);
    }
  });

  $("[data-fancybox]").fancybox();
});
