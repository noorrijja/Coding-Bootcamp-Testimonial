const nextButton = document.querySelectorAll(".next");

const prevButton = document.querySelectorAll(".prev");

const tanya = document.querySelector(".tanya");

const john = document.querySelector(".john");

john.classList.add("hide");

const change = () => {
  if (john.classList.contains("hide")) {
    john.classList.remove("hide");
    tanya.classList.add("hide");
  } else if (tanya.classList.contains("hide")) {
    tanya.classList.remove("hide");
    john.classList.add("hide");
  } else {
    john.classList.add("hide");
  }
};

nextButton.forEach((item) => item.addEventListener("click", change));

prevButton.forEach((item) => item.addEventListener("click", change));
