var count = 1;
const handleClick = () => {
  count += 1;
  const ul = document.querySelector("ul");
  if (count % 2 === 0) {
    ul.style.left = 0;
  } else {
    ul.style.left = "-100%";
  }
};
const hidebar = () => {
  const ul = document.querySelector("ul");
  ul.style.left = "-300px";
  count += 1;
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
