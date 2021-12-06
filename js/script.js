$(window).on("load", function () {
  $(".loader .inner").fadeOut(1000, function () {
    $(".loader").fadeOut(1200);
  });

  $(".items").isotope({
    filter: "*",
    animationOptions: {
      transitionDuration: "0.8s",
      easing: "linear",
      queue: false,
    },
  });
});

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
    smartBackspace: true,
  });

  //WINDO SCROLL ANIMATION
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

  //FANCY BOX
  $("[data-fancybox]").fancybox();

  //ISOTOPE

  $("#filters a").click(function () {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");
    $(".items").isotope({
      filter: selector,
      animationOptions: {
        transitionDuration: "0.8s",
        easing: "linear",
        queue: false,
      },
    });

    return false;
  });

  //COPYRIGHT DATE
  const d = new Date();
  $("#copyright").append(d.getFullYear());

  //STICKY NAVIGATION
  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNav);

  function stickyNav() {
    const body = $("body");

    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }
});
