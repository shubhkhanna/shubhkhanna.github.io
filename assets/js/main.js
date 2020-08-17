// Add scrollspy to <body>
$("body").scrollspy({ target: ".navbar", offset: 50 });
// Smooth Scrolling
$("#main-nav a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        window.location.hash = hash;
      }
    );
  }
});
// Preloader
$(window).on("load", function () {
  if ($("#preloader").length) {
    $("#preloader")
      .delay(800)
      .fadeOut("slow", function () {
        $(this).remove();
      });
  }
});
