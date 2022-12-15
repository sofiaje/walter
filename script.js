const about = document.querySelector(".about");
const disc = document.querySelector(".disc");
console.log(disc);

const h1one = document.querySelector(".walter");
const h1two = document.querySelector(".disco");
console.log(h1two);


const sectionOne = document.querySelector(".first");
const sectionTwo = document.querySelector(".second");

about.addEventListener("click", () => {
    h1one.classList.remove("hide");
    sectionOne.classList.remove("hide");
    h1two.classList.add("hide");
    sectionTwo.classList.add("hide");
})
disc.addEventListener("click", () => {
    h1one.classList.add("hide");
    sectionOne.classList.add("hide");
    h1two.classList.remove("hide");
    sectionTwo.classList.remove("hide");
})