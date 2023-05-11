const arrow = document.querySelectorAll(".arrow img");
const text_answer = document.querySelectorAll(".text__answer")
let count = 0;
arrow.forEach((el, ind) => {
    el.onclick = () => {
        count++;
        if (count % 2 == 1) {
            text_answer[ind].style.display = "block";
            arrow[ind].src = "gallery/svg/arrowup.svg";
        } else {
            text_answer[ind].style.display = "none";
            arrow[ind].src = "gallery/svg/Vector.svg";

        }
    }
})


const burger = document.querySelector('.burger');
const container = document.querySelector('.wrap__burger__buttons');
let count_burger = 0;
burger.addEventListener('click', () => {
    count_burger++;
    if(count_burger % 2 == 1) {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
    burger.classList.toggle('open');
});

