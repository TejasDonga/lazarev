function navAnimation() {
  const nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();
    tl.to("#nav-bottom", {
      height: "21vh",
    });
    tl.to(".nav h5", {
      display: "block",
    });
    tl.to(".nav h5 span", {
      y: 0,
      stagger: {
        amount: 0.3,
      },
    });
  });
  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();

    tl.to(".nav h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to("#nav-botton", {
      height: 0,
      duration: 0.3,
    });
  });
}
navAnimation();

function mySlider() {
  let myIndex = 0;
  carousel();

  function carousel() {
    let i;
    let x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1;
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 5000);
  }
}
mySlider();

document.addEventListener("DOMContentLoaded", function () {
  function carModel() {
    const btn = document.querySelector("#carModel");
    if (btn) {
      btn.addEventListener("click", function () {
        document.querySelector("#page2").scrollIntoView({ behavior: "smooth" });
      });
    }
  }
  carModel();

  function homeClick() {
    const home = document.querySelector(".home");
    if (home) {
      home.addEventListener("click", function () {
        document.querySelector("#page1").scrollIntoView({ behavior: "smooth" });
      });
    }
  }
  homeClick();

  function blog() {
    const blogs = document.querySelectorAll(".blog");
    const ford = document.querySelector('.Ford-F-150'); // Ensure your HTML element uses this class name
  
    // Add event listener for each element with the class "blog"
    blogs.forEach(function (blog) {
      blog.addEventListener('click', function () {
        document.querySelector('.page3').scrollIntoView({ behavior: "smooth" });
      });
    });
  }
  
  blog();
  
  
});



const startButton = document.getElementById("startButton");
const dodge = document.querySelector(".challenger");

startButton.addEventListener("click", function () {
  startButton.classList.toggle("on");

  if (startButton.classList.contains("on")) {
    startButton.innerHTML = "&#x23F8; Stop";
    dodge.play();

    dodge.addEventListener("timeupdate", function () {
      if (dodge.currentTime >= 10) {
        console.log("hello");
        startButton.innerHTML = "&#x23FB; Start";
        startButton.style.backgroundColor = "#ff4d4d";
        dodge.pause();
      }
    });
  } else {
    startButton.innerHTML = "&#x23FB; Start";
    dodge.pause();
    dodge.currentTime = 0;
  }
});

document.querySelectorAll(".slider_btn").forEach(function (button) {
  button.addEventListener("click", function () {
    // console.log("hello");
    startButton.innerHTML = "&#x23FB; Start";
    startButton.style.backgroundColor = "#ff4d4d";
    dodge.pause();
    dodge.currentTime = 0;
  });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides initially
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

document.getElementById("prev").addEventListener("click", () => plusSlides(-1));
document.getElementById("next").addEventListener("click", () => plusSlides(1));

function carModel() {
  const carName = document.querySelectorAll(".images");
  const outerDiv = document.querySelector(".outerDiv");

  carName.addEventListener("mouseenter", function () {
    outerDiv.style.height === "50%";
  });
  carName.addEventListener("mouseleave", function () {
    outerDiv.style.height = "0";
  });
}

carModel();


