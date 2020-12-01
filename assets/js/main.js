eva.replace();
AOS.init({
  once: true,
});
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
      .delay(1500)
      .fadeOut("slow", function () {
        $(this).remove();
      });
  }
});
// Navbar
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll < 200) {
    $(".fixed-top").css({ background: "transparent", "box-shadow": "none" });
  } else {
    $(".fixed-top").css({
      background: "white",
      "box-shadow": "0px 1px 4px #292b2c20",
    });
  }
});

// Rotating Text
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 1500;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

//Projects Cards
const addCards = document.querySelector(".addCards");
const Cards = [
  {
    projectName: "COVID-India-Live",
    description: "Tracking COVID-19 cases across the globe.",
    htmlUrl: "https://github.com/shubhkhanna/COVID-India-Live",
  },
  {
    projectName: "AI-News-App",
    description:
      "A React based Web App built with integration of Conversational Voice AI.",
    htmlUrl: "https://github.com/shubhkhanna/AI-News-App",
  },
  {
    projectName: "Cutit",
    description: "URL Shortener built with Nodejs and MongoDB.",
    htmlUrl: "https://github.com/shubhkhanna/cutit",
  },
  {
    projectName: "GitHub Finder",
    description: "A React based Web App which provide details of GitHub Users.",
    htmlUrl: "https://github.com/shubhkhanna/firebase-githubapp",
  },
  {
    projectName: "Django-NewsApp",
    description:
      "A Django based News Web App which uses Google News API to provide Latest News.",
    htmlUrl: "https://github.com/shubhkhanna/Django-NewsApp",
  },
  {
    projectName: "Mailing-client",
    description: "A Python script for sending mails.",
    htmlUrl: "https://github.com/shubhkhanna/mailing-client",
  },
];

const showCards = () => {
  let output = "";
  Cards.forEach(
    ({ projectName, description, htmlUrl }) =>
      (output += `        
      <div class="col-md-6 pb-4 px-3" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
        <div class="card shadow-sm">
          <div class="card-body">            
            <h3 class="card-title mb-1">${projectName}</h3>          
            <p class="card-text" style="opacity: 0.7;font-size: 1rem;">${description}</p>
            <a href="${htmlUrl}" class="float-left" target="_blank" style="text-decoration: none;">View Project &#8594;</a>
          </div>
        </div>
      </div>     
      `)
  );
  addCards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
