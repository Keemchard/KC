//nav-link
let navLinks = document.querySelectorAll(".nlink");
let indicator = document.querySelector(".indicator");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    if (i == 0) {
      addActiveNavLinkStyle(0);
      if (indicator.textContent == "dark") {
        eraseActiveNavLinkDarkMode(1);
        eraseActiveNavLinkDarkMode(2);
        eraseActiveNavLinkDarkMode(3);
        eraseActiveNavLinkDarkMode(4);
        eraseActiveNavLinkDarkMode(5);
        eraseActiveNavLinkDarkMode(6);
        eraseActiveNavLinkDarkMode(7);
        eraseActiveNavLinkDarkMode(8);
        eraseActiveNavLinkDarkMode(9);
      } else if (indicator.textContent == "light") {
        eraseActiveNavLinkLightMode(1);
        eraseActiveNavLinkLightMode(2);
        eraseActiveNavLinkLightMode(3);
        eraseActiveNavLinkLightMode(4);
        eraseActiveNavLinkLightMode(5);
        eraseActiveNavLinkLightMode(6);
        eraseActiveNavLinkLightMode(7);
        eraseActiveNavLinkLightMode(8);
        eraseActiveNavLinkLightMode(9);
      }
    } else if (i == 1) {
      addActiveNavLinkStyle(1);
      if (indicator.textContent == "dark") {
        eraseActiveNavLinkDarkMode(0);
        eraseActiveNavLinkDarkMode(2);
        eraseActiveNavLinkDarkMode(3);
        eraseActiveNavLinkDarkMode(4);
        eraseActiveNavLinkDarkMode(5);
        eraseActiveNavLinkDarkMode(6);
        eraseActiveNavLinkDarkMode(7);
        eraseActiveNavLinkDarkMode(8);
        eraseActiveNavLinkDarkMode(9);
      } else if (indicator.textContent == "light") {
        eraseActiveNavLinkLightMode(0);
        eraseActiveNavLinkLightMode(2);
        eraseActiveNavLinkLightMode(3);
        eraseActiveNavLinkLightMode(4);
        eraseActiveNavLinkLightMode(5);
        eraseActiveNavLinkLightMode(6);
        eraseActiveNavLinkLightMode(7);
        eraseActiveNavLinkLightMode(8);
        eraseActiveNavLinkLightMode(9);
      }
    } else if (i == 2) {
      addActiveNavLinkStyle(2);
      if (indicator.textContent == "dark") {
        eraseActiveNavLinkDarkMode(1);
        eraseActiveNavLinkDarkMode(0);
        eraseActiveNavLinkDarkMode(3);
        eraseActiveNavLinkDarkMode(4);
        eraseActiveNavLinkDarkMode(5);
        eraseActiveNavLinkDarkMode(6);
        eraseActiveNavLinkDarkMode(7);
        eraseActiveNavLinkDarkMode(8);
        eraseActiveNavLinkDarkMode(9);
      } else if (indicator.textContent == "light") {
        eraseActiveNavLinkLightMode(1);
        eraseActiveNavLinkLightMode(0);
        eraseActiveNavLinkLightMode(3);
        eraseActiveNavLinkLightMode(4);
        eraseActiveNavLinkLightMode(5);
        eraseActiveNavLinkLightMode(6);
        eraseActiveNavLinkLightMode(7);
        eraseActiveNavLinkLightMode(8);
        eraseActiveNavLinkLightMode(9);
      }
    } else if (i == 3) {
      addActiveNavLinkStyle(3);
      if (indicator.textContent == "dark") {
        eraseActiveNavLinkDarkMode(1);
        eraseActiveNavLinkDarkMode(2);
        eraseActiveNavLinkDarkMode(0);
        eraseActiveNavLinkDarkMode(4);
        eraseActiveNavLinkDarkMode(5);
        eraseActiveNavLinkDarkMode(6);
        eraseActiveNavLinkDarkMode(7);
        eraseActiveNavLinkDarkMode(8);
        eraseActiveNavLinkDarkMode(9);
      } else if (indicator.textContent == "light") {
        eraseActiveNavLinkLightMode(1);
        eraseActiveNavLinkLightMode(2);
        eraseActiveNavLinkLightMode(0);
        eraseActiveNavLinkLightMode(4);
        eraseActiveNavLinkLightMode(5);
        eraseActiveNavLinkLightMode(6);
        eraseActiveNavLinkLightMode(7);
        eraseActiveNavLinkLightMode(8);
        eraseActiveNavLinkLightMode(9);
      }
    } else if (i == 4) {
      addActiveNavLinkStyle(4);
      if (indicator.textContent == "dark") {
        eraseActiveNavLinkDarkMode(1);
        eraseActiveNavLinkDarkMode(2);
        eraseActiveNavLinkDarkMode(3);
        eraseActiveNavLinkDarkMode(0);
        eraseActiveNavLinkDarkMode(5);
        eraseActiveNavLinkDarkMode(6);
        eraseActiveNavLinkDarkMode(7);
        eraseActiveNavLinkDarkMode(8);
        eraseActiveNavLinkDarkMode(9);
      } else if (indicator.textContent == "light") {
        eraseActiveNavLinkLightMode(1);
        eraseActiveNavLinkLightMode(2);
        eraseActiveNavLinkLightMode(3);
        eraseActiveNavLinkLightMode(0);
        eraseActiveNavLinkLightMode(5);
        eraseActiveNavLinkLightMode(6);
        eraseActiveNavLinkLightMode(7);
        eraseActiveNavLinkLightMode(8);
        eraseActiveNavLinkLightMode(9);
      }
    } else if (i == 5) {
      addActiveNavLinkStyle(5);
      if (indicator.textContent == "dark") {
        eraseActiveNavLinkDarkMode(1);
        eraseActiveNavLinkDarkMode(2);
        eraseActiveNavLinkDarkMode(3);
        eraseActiveNavLinkDarkMode(0);
        eraseActiveNavLinkDarkMode(4);
        eraseActiveNavLinkDarkMode(6);
        eraseActiveNavLinkDarkMode(7);
        eraseActiveNavLinkDarkMode(8);
        eraseActiveNavLinkDarkMode(9);
      } else if (indicator.textContent == "light") {
        eraseActiveNavLinkLightMode(1);
        eraseActiveNavLinkLightMode(2);
        eraseActiveNavLinkLightMode(3);
        eraseActiveNavLinkLightMode(0);
        eraseActiveNavLinkLightMode(4);
        eraseActiveNavLinkLightMode(6);
        eraseActiveNavLinkLightMode(7);
        eraseActiveNavLinkLightMode(8);
        eraseActiveNavLinkLightMode(9);
      }
    } else if (i == 6) {
      addActiveNavLinkStyle(6);
      if (indicator.textContent == "dark") {
        eraseActiveNavLinkDarkMode(1);
        eraseActiveNavLinkDarkMode(2);
        eraseActiveNavLinkDarkMode(3);
        eraseActiveNavLinkDarkMode(0);
        eraseActiveNavLinkDarkMode(5);
        eraseActiveNavLinkDarkMode(4);
        eraseActiveNavLinkDarkMode(7);
        eraseActiveNavLinkDarkMode(8);
        eraseActiveNavLinkDarkMode(9);
      } else if (indicator.textContent == "light") {
        eraseActiveNavLinkLightMode(1);
        eraseActiveNavLinkLightMode(2);
        eraseActiveNavLinkLightMode(3);
        eraseActiveNavLinkLightMode(0);
        eraseActiveNavLinkLightMode(5);
        eraseActiveNavLinkLightMode(4);
        eraseActiveNavLinkLightMode(7);
        eraseActiveNavLinkLightMode(8);
        eraseActiveNavLinkLightMode(9);
      }
    } else if (i == 7) {
      addActiveNavLinkStyle(7);
      if (indicator.textContent == "dark") {
        eraseActiveNavLinkDarkMode(1);
        eraseActiveNavLinkDarkMode(2);
        eraseActiveNavLinkDarkMode(3);
        eraseActiveNavLinkDarkMode(0);
        eraseActiveNavLinkDarkMode(5);
        eraseActiveNavLinkDarkMode(6);
        eraseActiveNavLinkDarkMode(4);
        eraseActiveNavLinkDarkMode(8);
        eraseActiveNavLinkDarkMode(9);
      } else if (indicator.textContent == "light") {
        eraseActiveNavLinkLightMode(1);
        eraseActiveNavLinkLightMode(2);
        eraseActiveNavLinkLightMode(3);
        eraseActiveNavLinkLightMode(0);
        eraseActiveNavLinkLightMode(5);
        eraseActiveNavLinkLightMode(6);
        eraseActiveNavLinkLightMode(4);
        eraseActiveNavLinkLightMode(8);
        eraseActiveNavLinkLightMode(9);
      }
    } else if (i == 8) {
      addActiveNavLinkStyle(8);
      if (indicator.textContent == "dark") {
        eraseActiveNavLinkDarkMode(1);
        eraseActiveNavLinkDarkMode(2);
        eraseActiveNavLinkDarkMode(3);
        eraseActiveNavLinkDarkMode(0);
        eraseActiveNavLinkDarkMode(5);
        eraseActiveNavLinkDarkMode(6);
        eraseActiveNavLinkDarkMode(7);
        eraseActiveNavLinkDarkMode(4);
        eraseActiveNavLinkDarkMode(9);
      } else if (indicator.textContent == "light") {
        eraseActiveNavLinkLightMode(1);
        eraseActiveNavLinkLightMode(2);
        eraseActiveNavLinkLightMode(3);
        eraseActiveNavLinkLightMode(0);
        eraseActiveNavLinkLightMode(5);
        eraseActiveNavLinkLightMode(6);
        eraseActiveNavLinkLightMode(7);
        eraseActiveNavLinkLightMode(4);
        eraseActiveNavLinkLightMode(9);
      }
    } else if (i == 9) {
      addActiveNavLinkStyle(9);
      if (indicator.textContent == "dark") {
        eraseActiveNavLinkDarkMode(1);
        eraseActiveNavLinkDarkMode(2);
        eraseActiveNavLinkDarkMode(3);
        eraseActiveNavLinkDarkMode(0);
        eraseActiveNavLinkDarkMode(5);
        eraseActiveNavLinkDarkMode(6);
        eraseActiveNavLinkDarkMode(7);
        eraseActiveNavLinkDarkMode(8);
        eraseActiveNavLinkDarkMode(4);
      } else if (indicator.textContent == "light") {
        eraseActiveNavLinkLightMode(1);
        eraseActiveNavLinkLightMode(2);
        eraseActiveNavLinkLightMode(3);
        eraseActiveNavLinkLightMode(0);
        eraseActiveNavLinkLightMode(5);
        eraseActiveNavLinkLightMode(6);
        eraseActiveNavLinkLightMode(7);
        eraseActiveNavLinkLightMode(8);
        eraseActiveNavLinkLightMode(4);
      }
    }
  });
}
function eraseActiveNavLinkLightMode(linkNumber) {
  navLinks[linkNumber].style.color = "black";
  navLinks[linkNumber].style.fontWeight = "normal";
}
function eraseActiveNavLinkDarkMode(linkNumber) {
  navLinks[linkNumber].style.color = "white";
  navLinks[linkNumber].style.fontWeight = "normal";
}
function addActiveNavLinkStyle(linkNumber) {
  navLinks[linkNumber].style.color = "#FF3C00";
  navLinks[linkNumber].style.fontWeight = "bold";
}

//darkmode
let darkModeText = document.querySelectorAll(".text-dmode");
let darkModeBtn = document.querySelector(".darkMode");
let darkModeBg = document.querySelectorAll(".bg-dmode");
let lightModeBtn = document.querySelector(".lightMode");
let spanName = document.querySelector(".span-name");
darkModeBtn.addEventListener("click", function () {
  indicator.textContent = "dark";
  for (let i = 0; i < darkModeText.length; i++) {
    darkModeText[i].style.color = "white";
    darkModeText[i].style.transition = "1s";
  }
  for (let i = 0; i < darkModeBg.length; i++) {
    darkModeBg[i].style.backgroundColor = "#191624";
  }
  spanName.style.textShadow =
    "-3px -3px 0 rgb(255, 255, 255), 1px -1px 0 #191624, -1px 1px 0 #191624, 1px 1px 0 rgb(224, 224, 224)";
});
lightModeBtn.addEventListener("click", function () {
  indicator.textContent = "light";
  for (let i = 0; i < darkModeText.length; i++) {
    darkModeText[i].style.color = "black";
    darkModeText[i].style.transition = "1s";
  }
  for (let i = 0; i < darkModeBg.length; i++) {
    darkModeBg[i].style.backgroundColor = "#f5f8f9"; //white
  }
  spanName.style.textShadow =
    " -3px -3px 0 #2F4858, 1px -1px 0 transparent, -1px 1px 0 transparent, 1px 1px 0 #2F4858";
});

//sub title animation
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

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
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

//CAROUSEL
var allCarousels = document.getElementsByClassName("md_carousel"); // get all carousels on this site
var currentCarouselPositions = []; // stores the position index of all sliders

function SetupCarousels(transitionDuration, displayDuration) {
  Array.from(allCarousels).forEach((carousel) => {
    let currentCarouselIndex = currentCarouselPositions.length;
    currentCarouselPositions.push(0); // sets the default current position to 0
    let viewport = carousel.getElementsByClassName("md_carouselViewport")[0];
    // Add mouse enter event to stop autoplay while mouse is hovering viewport
    carousel.addEventListener("mouseenter", function (event) {
      clearTimeout(event.target.dataset.timeoutid);
    });
    // Add mouse leave event to resume autoplay when mouse is leaving the viewport
    carousel.addEventListener("mouseleave", function (event) {
      event.target.dataset.timeoutid = setTimeout(
        Autoplay,
        displayDuration + transitionDuration,
        transitionDuration,
        displayDuration,
        currentCarouselIndex
      );
    });
    // Create and position buttons
    carousel.insertAdjacentHTML(
      "beforeend",
      '<div class="md_carouselNav"></div>'
    );
    let slides = carousel.getElementsByClassName("md_carouselSlide");
    for (let i = 0; i < slides.length; i++) {
      carousel
        .getElementsByClassName("md_carouselNav")[0]
        .insertAdjacentHTML(
          "beforeend",
          '<button class="md_carouselNavButton" name="C' +
            currentCarouselIndex +
            "_ButtonSlide" +
            i +
            '"></button>'
        );
      carousel
        .getElementsByClassName("md_carouselNavButton")
        [i].addEventListener("click", function (event) {
          TransitionToSlide(currentCarouselIndex, i);
        });
    }
    // Add and setup previous and next buttons
    viewport.insertAdjacentHTML(
      "beforebegin",
      '<button class="md_carouselPrevious" name="C' +
        currentCarouselIndex +
        '_PrevSlide"></button>'
    );
    carousel
      .getElementsByClassName("md_carouselPrevious")[0]
      .addEventListener("click", function (event) {
        let currentPosition = currentCarouselPositions[currentCarouselIndex];
        if (currentPosition == 0) {
          TransitionToSlide(currentCarouselIndex, slides.length - 1);
        } else {
          TransitionToSlide(currentCarouselIndex, currentPosition - 1);
        }
      });
    viewport.insertAdjacentHTML(
      "afterend",
      '<button class="md_carouselNext" name="C' +
        currentCarouselIndex +
        '_NextSlide"></button>'
    );
    carousel
      .getElementsByClassName("md_carouselNext")[0]
      .addEventListener("click", function (event) {
        let currentPosition = currentCarouselPositions[currentCarouselIndex];
        if (currentPosition >= slides.length - 1) {
          TransitionToSlide(currentCarouselIndex, 0);
        } else {
          TransitionToSlide(currentCarouselIndex, currentPosition + 1);
        }
      });
    // color first button
    allCarousels[currentCarouselIndex]
      .getElementsByClassName("md_carouselNav")[0]
      .getElementsByClassName("md_carouselNavButton")[0].style.backgroundColor =
      "rgba(255,71,8,1)";
    // Adjust transition speed
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.transition =
        "left " + transitionDuration + "ms ease-in-out";
    }
    // Set display duration/timeout and start autoplay
    carousel.dataset.timeoutid = setTimeout(
      Autoplay,
      displayDuration + transitionDuration,
      transitionDuration,
      displayDuration,
      currentCarouselIndex
    );
  });
}

function TransitionToSlide(carouselIndex, targetSlideIndex) {
  let slides =
    allCarousels[carouselIndex].getElementsByClassName("md_carouselSlide");
  let buttons = allCarousels[carouselIndex]
    .getElementsByClassName("md_carouselNav")[0]
    .getElementsByClassName("md_carouselNavButton");
  for (let i = 0; i < slides.length; i++) {
    currentCarouselPositions[carouselIndex] = targetSlideIndex;
    slides[i].style.left =
      targetSlideIndex == 0 ? "0%" : "-" + targetSlideIndex + "00%";
    buttons[i].style.backgroundColor =
      i == targetSlideIndex ? "rgba(255,71,8,1)" : "rgba(63,69,70,1)";
  }
}

function Autoplay(transitionDuration, displayDuration, carouselIndex) {
  let currentPosition = currentCarouselPositions[carouselIndex];
  let slides = allCarousels[carouselIndex]
    .getElementsByClassName("md_carouselViewport")[0]
    .getElementsByClassName("md_carouselSlide");
  currentPosition =
    currentPosition + 1 < slides.length ? currentPosition + 1 : 0;
  TransitionToSlide(carouselIndex, currentPosition);
  allCarousels[carouselIndex].dataset.timeoutid = setTimeout(
    Autoplay,
    displayDuration + transitionDuration,
    transitionDuration,
    displayDuration,
    carouselIndex
  );
}

SetupCarousels(500, 5000);

//scroll

//ABOUT

let educationbtn = document.querySelector(".edu");
let experiencebtn = document.querySelector(".exp");
let aboutEducation = document.querySelector(".about-education");
let aboutExperience = document.querySelector(".about-experience");
let eduH3 = document.querySelector(".edu-h3");
let expH3 = document.querySelector(".exp-h3");

//lol am using arrow function HAHAHA idk y they prefer this rather than the old way
educationbtn.addEventListener("click", () => {
  aboutEducation.style.display = "block";
  aboutExperience.style.display = "none";
  eduH3.style.borderBottom = "5px solid #ff3c00";
  expH3.style.borderBottom = "none";
  educationbtn.style.backgroundColor = "rgba(47, 72, 88, 0.4)";
  experiencebtn.style.backgroundColor = "transparent";
});
experiencebtn.addEventListener("click", () => {
  aboutExperience.style.display = "block";
  aboutEducation.style.display = "none";
  expH3.style.borderBottom = "5px solid #ff3c00";
  eduH3.style.borderBottom = "none";
  experiencebtn.style.backgroundColor = "rgba(47, 72, 88, 0.4)";
  educationbtn.style.backgroundColor = "transparent";
});

//toggle about
let aboutButton = document.querySelector(".about-shortcut");
let exitAboutButton = document.querySelector(".exit-abt");
let About = document.querySelector(".main-about");

aboutButton.addEventListener("click", () => {
  About.style.display = "block";
});
exitAboutButton.addEventListener("click", () => {
  About.style.display = "none";
});

//loop images
// 1
let loopImages = document.querySelectorAll(".loop-img1");

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.querySelectorAll(".loop-img1");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 2000);
}
// 2
let loopImages2 = document.querySelectorAll(".loop-img2");

var slideIndex2 = 0;
showSlides2();

function showSlides2() {
  let i;
  var slides2 = document.querySelectorAll(".loop-img2");

  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {
    slideIndex2 = 1;
  }

  slides2[slideIndex2 - 1].style.display = "block";

  setTimeout(showSlides2, 2000);
}
// 3
let loopImages3 = document.querySelectorAll(".loop-img3");

let slideIndex3 = 0;
showSlides3();

function showSlides3() {
  let slides3 = document.querySelectorAll(".loop-img3");

  for (let i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > slides3.length) {
    slideIndex3 = 1;
  }

  slides3[slideIndex3 - 1].style.display = "block";

  setTimeout(showSlides3, 2000);
}
// 4
let loopImages4 = document.querySelectorAll(".loop-img4");

var slideIndex4 = 0;
showSlides4();

function showSlides4() {
  let i;
  var slides4 = document.querySelectorAll(".loop-img4");

  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }
  slideIndex4++;
  if (slideIndex4 > slides4.length) {
    slideIndex4 = 1;
  }

  slides4[slideIndex4 - 1].style.display = "block";

  setTimeout(showSlides4, 2000);
}
// 5
let loopImages5 = document.querySelectorAll(".loop-img5");

var slideIndex5 = 0;
showSlides5();

function showSlides5() {
  let i;
  var slides5 = document.querySelectorAll(".loop-img5");

  for (i = 0; i < slides5.length; i++) {
    slides5[i].style.display = "none";
  }
  slideIndex5++;
  if (slideIndex5 > slides5.length) {
    slideIndex5 = 1;
  }

  slides5[slideIndex5 - 1].style.display = "block";

  setTimeout(showSlides5, 2000);
}

//toggle project
let projectContainer = document.querySelector(".main-proj");
let projectButton = document.querySelector(".sec2-btn");
let exitProjectButton = document.querySelector(".exit-proj");

projectButton.addEventListener("click", () => {
  projectContainer.style.display = "block";
});
exitProjectButton.addEventListener("click", () => {
  projectContainer.style.display = "none";
});
