const hamburger = document.querySelector(".nav__toggle-lines");
const links = document.querySelector("ul");
const social = document.querySelector("nav__icons-social");
const items = document.querySelector('li');
const checkbox = document.getElementById('theme');

const d = new Date();

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");

  links.classList.toggle("open");

  checkbox.classList.toggle('show');

});

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.classList.remove("is-active");
  });
}

const date = (document.getElementById("date").innerHTML = d.getFullYear());