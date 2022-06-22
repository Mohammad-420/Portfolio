$(document).ready(function () {
  // Events
  // Animations
  let tl = anime.timeline({
    easing: "easeOutQuad",
    duration: 3000,
    delay: 3000,
  });
  tl.add({
    targets: "#profile .image",
    translateX: ["-450%", "0%"],
  });
  tl.add(
    {
      targets: "#profile h1",
      translateX: ["-450%", "0%"],
    },
    "-=3000"
  );
  tl.add(
    {
      targets: ".typed",
      opacity: [0, 1],
    },
    "-=2500"
  );

  anime({
    targets: "#navbar",
    top: ["-50%", "0"],
    duration: 3000,
    easing: "easeOutSine",
  });

  anime({
    targets: "#profile .border",
    rotate: 360,
    duration: 30000,
    easing: "linear",
    loop: true,
    delay: 5000,
  });

  // navbar Scrolling
  $(window).scroll(function () {
    if ($(document).scrollTop() > $("#header").height()) {
      $("#navbar").addClass("nav-bottom");
    } else {
      $("#navbar").removeClass("nav-bottom");
    }
  });
  // Burger btn click animation
  $("#burger").click(function () {
    $(this).toggleClass("burger-active");
    $("#navbar").toggleClass("nav-active");
    $(".menu").toggleClass("menu-active");
  });

  new Typed(".typed span", {
    strings: [
      "I'm <strong>Full-Stack Developer</strong>",
      "I'm <strong>Back-End Developer</strong>",
      "I'm <strong>Designer</strong>",
      "I'm <strong>Freelancer</strong>",
    ],
    typeSpeed: 100,
    startDelay: 5000,
    backSpeed: 60,
    smartBackspace: true,
    loop: true,
  });

  // Remove svg.radial-progress .complete inline styling
  $("svg.radial-progress").each(function (index, value) {
    $(this).find($("circle.complete")).removeAttr("style");
  });

  // Activate progress animation on scroll
  $(window)
    .scroll(function () {
      $("svg.radial-progress").each(function (index, value) {
        // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
        if (
          $(window).scrollTop() >
            $(this).offset().top - $(window).height() * 0.75 &&
          $(window).scrollTop() <
            $(this).offset().top + $(this).height() - $(window).height() * 0.25
        ) {
          // Get percentage of progress
          percent = $(value).data("percentage");
          // Get radius of the svg's circle.complete
          radius = $(this).find($("circle.complete")).attr("r");
          // Get circumference (2πr)
          circumference = 2 * Math.PI * radius;
          // Get stroke-dashoffset value based on the percentage of the circumference
          strokeDashOffset = circumference - (percent * circumference) / 100;
          // Transition progress for 1.25 seconds
          $(this)
            .find($("circle.complete"))
            .animate({ "stroke-dashoffset": strokeDashOffset }, 1250);
        }
      });
    })
    .trigger("scroll");
});
