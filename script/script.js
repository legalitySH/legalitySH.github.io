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


// const burgerButton = document.querySelector('.wrap__burger');
// const menu = document.querySelector('.wrap__burger__buttons');
// const menuItems = document.querySelectorAll('.menu-item');

// // Функция для появления элементов меню
// function showMenuItems() {
//   menuItems.forEach((item, index) => {
//     setTimeout(() => {
//       item.classList.add('show');
//     }, 100 * index);
//   });
// }

// // // Функция для скрытия элементов меню
// // function hideMenuItems() {
// //   menuItems.forEach((item, index) => {
// //     setTimeout(() => {
// //       item.classList.remove('show');
// //     }, 100 * index);
// //   });
// // }

// // // Обработчик клика на бургер кнопку
// // burgerButton.addEventListener('click', () => {
// //   menu.classList.toggle('open');

// //   if (menu.classList.contains('open')) {
// //     // Появление меню
// //     menu.style.opacity = '1';
// //     menu.style.transition = 'opacity 0.5s ease';
// //     showMenuItems();
// //   } else {
// //     // Скрытие меню
// //     menu.style.opacity = '0';
// //     menu.style.transition = 'opacity 0.5s ease';
// //     hideMenuItems();
// //   }
// // });

