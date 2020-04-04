const hamburger = document.querySelector(".nav__toggle-lines");
const links = document.querySelector(".nav__links");
const social = document.querySelector("nav__icons-social");

const d = new Date();

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");

  links.classList.toggle("open");

  social.classList.toggle("open-social");
});

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.classList.remove("is-active");
  });
}

const date = (document.getElementById("date").innerHTML = d.getFullYear());


window.onscroll = function () {
  scroll()
};

function scroll() {
  if (document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20) {
    hamburger.style.top = "0";
  } else {
    hamburger.style.top = "-60px";
  }
}