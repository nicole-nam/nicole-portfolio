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
    startDelay: 1000,
    showCursor: false,
  });

  const skillsTopOffset = $(".skillsSection").offset();

  $(window).scroll(function () {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      console.log("here");
    }
  });
});
