var count = 1;
const handleClick = () => {
  const ul = document.querySelector("ul");
  const show = document.querySelector(".fa-bars-staggered");
  const close = document.querySelector(".fa-xmark");
  ul.style.left = "0";
  show.style.display = "none";
  close.style.display = "block";
};
const handleClose = () => {
  const ul = document.querySelector("ul");
  const show = document.querySelector(".fa-bars-staggered");
  const close = document.querySelector(".fa-xmark");
  ul.style.left = "-100%";
  show.style.display = "block";
  close.style.display = "none";
};
const hidebar = () => {
  count += 1;
  const ul = document.querySelector("ul");
  const show = document.querySelector(".fa-bars-staggered");
  const close = document.querySelector(".fa-xmark");
  ul.style.left = "-100%";
  show.style.display = "block";
  close.style.display = "none";
};

let nb = 1;
const box = document.querySelector(".box");

const handleDesctiption = (id) => {
  nb += 1;
  const descs = document.querySelectorAll(".description");
  const desc = descs[id];
  if (nb % 2 === 0) {
    desc.style.display = "block";
  } else {
    desc.style.display = "none";
  }
};
