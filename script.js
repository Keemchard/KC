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
      } else if (indicator.textContent == "light") {
        eraseActiveNavLinkLightMode(1);
        eraseActiveNavLinkLightMode(2);
        eraseActiveNavLinkLightMode(3);
        eraseActiveNavLinkLightMode(4);
      }
    } else if (i == 1) {
      addActiveNavLinkStyle(1);
      if (indicator.textContent == "dark") {
        eraseActiveNavLinkDarkMode(0);
        eraseActiveNavLinkDarkMode(2);
        eraseActiveNavLinkDarkMode(3);
        eraseActiveNavLinkDarkMode(4);
      } else if (indicator.textContent == "light") {
        eraseActiveNavLinkLightMode(0);
        eraseActiveNavLinkLightMode(2);
        eraseActiveNavLinkLightMode(3);
        eraseActiveNavLinkLightMode(4);
      }
    } else if (i == 2) {
      addActiveNavLinkStyle(2);
      if (indicator.textContent == "dark") {
        eraseActiveNavLinkDarkMode(1);
        eraseActiveNavLinkDarkMode(0);
        eraseActiveNavLinkDarkMode(3);
        eraseActiveNavLinkDarkMode(4);
      } else if (indicator.textContent == "light") {
        eraseActiveNavLinkLightMode(1);
        eraseActiveNavLinkLightMode(0);
        eraseActiveNavLinkLightMode(3);
        eraseActiveNavLinkLightMode(4);
      }
    } else if (i == 3) {
      addActiveNavLinkStyle(3);
      if (indicator.textContent == "dark") {
        eraseActiveNavLinkDarkMode(1);
        eraseActiveNavLinkDarkMode(2);
        eraseActiveNavLinkDarkMode(0);
        eraseActiveNavLinkDarkMode(4);
      } else if (indicator.textContent == "light") {
        eraseActiveNavLinkLightMode(1);
        eraseActiveNavLinkLightMode(2);
        eraseActiveNavLinkLightMode(0);
        eraseActiveNavLinkLightMode(4);
      }
    } else if (i == 4) {
      addActiveNavLinkStyle(4);
      if (indicator.textContent == "dark") {
        eraseActiveNavLinkDarkMode(1);
        eraseActiveNavLinkDarkMode(2);
        eraseActiveNavLinkDarkMode(3);
        eraseActiveNavLinkDarkMode(0);
      } else if (indicator.textContent == "light") {
        eraseActiveNavLinkLightMode(1);
        eraseActiveNavLinkLightMode(2);
        eraseActiveNavLinkLightMode(3);
        eraseActiveNavLinkLightMode(0);
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
    darkModeBg[i].style.backgroundColor = "white";
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
