let client = document.getElementById("client");
let project = document.getElementById("project");
let runningProject = document.getElementById("runningProject");
let awesomeProject = document.getElementById("awesomeProject");
let menu = document.getElementById("menu");
let listItem = document.querySelector("ul");
let menuBtn = document.getElementById("menuBtn");
let btn = document.querySelector(".btn");
let open = false;
menu.addEventListener("click", () => {
  console.log("clicked");
  if (!open) {
    listItem.classList.add("showNav");
    listItem.style.paddingLeft = "80px";
    menuBtn.classList.add("show");
    btn.style.right = "40px";
    btn.style.marginRight = "20px";
    open = true;
  } else {
    listItem.classList.remove("showNav");
    listItem.style.paddingLeft = "0px";
    menuBtn.classList.remove("show");
    btn.style.right = "-200px";
    open = false;
  }
});

let clientCount = 0;
setInterval(() => {
  if (clientCount < 2500) {
    clientCount++;
    client.innerHTML = clientCount;
  }
}, 10);
let projCount = 0;
setInterval(() => {
  if (projCount < 750) {
    projCount++;
    project.innerHTML = projCount;
  }
}, 10);
let runningProjCount = 0;
setInterval(() => {
  if (runningProjCount < 500) {
    runningProjCount++;
    runningProject.innerHTML = runningProjCount;
  }
}, 10);
let awesomeProjCount = 0;
setInterval(() => {
  if (awesomeProjCount < 700) {
    awesomeProjCount++;
    awesomeProject.innerHTML = awesomeProjCount;
  }
}, 10);

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 1000,
  },
});

// darkmode-------------------------------------

const themeToggle = document.querySelector(".checkbox");
const body = document.querySelector("body");
const darkmode = localStorage.getItem("dark");
let img = document.getElementById("img");
if (darkmode) {
  body.classList.add("dark");
  img.src = `./images/moon.png`;
  themeToggle.checked = true;
} else {
  img.src = `./images/sun.png`;
}
themeToggle.addEventListener("change", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("dark", "active");
    img.src = `./images/moon.png`;
  } else {
    localStorage.removeItem("dark");
    img.src = `./images/sun.png`;
  }
});
