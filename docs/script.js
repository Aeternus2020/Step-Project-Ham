"use strict";

const tabttl = document.querySelectorAll(".tabs-title");
const tabmain = document.querySelectorAll(".tabs-main");
const tabs = document.querySelector(".tabs");
const worklist = document.querySelectorAll(".work_list");
const worktabs = document.querySelectorAll(".work_tabs");
const work = document.querySelector(".work");
const left = document.getElementById('left');
const right = document.getElementById('right');
const commt = document.querySelector('.list_commet');
const morework = document.getElementById('moreWork');
const tabscont = document.querySelector('.tabs-contents');
const major = document.querySelector('.major');
const hover = document.getElementById('hover');
const imgsWork = document.querySelectorAll('.work_tabs img');
const allWork = document.querySelector('.all');
let second;
let ava;



//Создание списков комментаторов
const arr = [`<p class="text">The most impressive was their devotion to making sure our needs were met. They very carefully recognized our needs and understood the way our company and customer service function. It was a great decision to start working with them!</p>
            <h3 class="name">Marissa Ann Mayer</h3>
            <p class="profession">UX Designer</p>
            <img src="./Pictures/testimonials/1.png" alt="Marissa Ann Mayer"/>`,
            `<p class="text">They delivered quality work thanks to their aim of turning in the best possible results. The team is committed to first-class outcomes. It’s been a pleasure working with them, and we look forward to continuing this partnership further.</p>
            <h3 class="name">Pichai Sundararajan</h3>
            <p class="profession">UX Designer</p>
            <img src="./Pictures/testimonials/4.png" alt="Pichai Sundararajan"/>`, 
            `<p class="text">They quite had a human approach and were open to adaptation towards our needs. Their passion, professionalism, transparency, and love of detail were astonishing. We look forward to working with them again to add new features down the road.</p>
            <h3 class="name">Jeffrey Preston Bezos</h3>
            <p class="profession">UX Designer</p>
            <img src="./Pictures/testimonials/2.png" alt="Jeffrey Preston Bezos"/>`, 
            `<p class="text">They always try to find a solution, and they work above and beyond to keep the customer happy. On an organizational level and an employee-specific level, their responsiveness is unmatched within their industry. They are the number one place to go if you want things done fast but correctly and with intense communication.</p>
            <h3 class="name">Arianna Huffington</h3>
            <p class="profession">Talent Researcher</p>
            <img src="./Pictures/testimonials/3.png" alt="Talent Researcher"/>`];
  const ul = document.createElement("ul");
  ul.className = "list_commentators";

function creat() {
  arr.forEach((element) => {
    let li = document.createElement("li");
    li.innerHTML = `${element}`;
    li.className = "commentator";
    if (element === arr[2]) li.className = "commentator second";
    ul.append(li);
  });
  const liM = document.createElement("li");
  liM.innerHTML = `${arr[2]}`;
  liM.className = "avatar";
  major.append(liM);
  ava = document.querySelector('.avatar')
  commt.append(ul);
}

creat(arr);

//Скроллинг комментаторов влево
left.addEventListener('click', () => {
  second = document.querySelector('.second');
  second.animate([
    {transform: 'translate(0, 0)'},
    {transform: 'translate(0, 10px)'},
  ], 800);
  ava.animate([
    {transform: 'translate(0, 0)', opacity: 1},
    {transform: 'translate(0, 0)',opacity: 0}
  ], 1000);
  ul.animate([
    {transform: 'translate(0, 0)', opacity: 1},
    {transform: 'translate(-30px, 0)', opacity: 0}
  ], 1000);
  setTimeout(leftScroll, 800);
  setTimeout(animRev, 800);
})  

//Анимация скролла влево
function leftScroll() {
  let elm = arr.shift(0);
  arr.push(elm);
  ul.innerHTML = '';
  major.innerHTML = '';
  creat(arr);
  second = document.querySelector('.second');
  ul.animate([
    {transform: 'translate(30px, 0)', opacity: 0},
    {transform: 'translate(0, 0)', opacity: 1}
  ], 800);
  second.animate([
    {transform: 'translate(0, 10px)'},
    {transform: 'translate(0, 0)'},
  ], 800);
}

//Скроллинг комментаторов вправо
right.addEventListener('click', () => {
  second = document.querySelector('.second');
  second.animate([
    {transform: 'translate(0, 0)'},
    {transform: 'translate(0, 10px)'},
  ], 800);
  ava.animate([
    {transform: 'translate(0, 0)', opacity: 1},
    {transform: 'translate(0, 0)',opacity: 0}
  ], 800);
    ul.animate([
      {transform: 'translate(0, 0)', opacity: 1},
      {transform: 'translate(30px, 0)', opacity: 0}
    ], 800);
    setTimeout(rightScroll, 800);
    setTimeout(animRev, 800);
})  

//Анимация аватара
function animRev() {
  ava.animate([
        {transform: 'translate(0, 0)', opacity: 0},
        {transform: 'translate(0, 0)',opacity: 1}
      ], 800)
}

//Анимация скролла вправо
function rightScroll() {
  let elm = arr.pop(3);
  arr.unshift(elm);
  ul.textContent = '';
  major.innerHTML = '';
  creat(arr);
  second = document.querySelector('.second');
  ul.animate([
    {transform: 'translate(-30px, 0)', opacity: 0},
    {transform: 'translate(0, 0)', opacity: 1}
  ], 800);
  second.animate([
    {transform: 'translate(0, 10px)'},
    {transform: 'translate(0, 0)'},
  ], 800);
}

//Переключение вкладки по клику
work.addEventListener('click', (event) => {
  toggle(event.target, worklist, worktabs);
  morework.style.display === 'none' ? morework.style.display = 'block' : null
});

tabs.addEventListener("click", (event) => {
  toggle(event.target, tabttl, tabmain);
});

function toggle(target, buttonList, list) {
  buttonList.forEach((button, index) => {
    button.dataset.status = (button === target) ? "active" : "inactive";
    list[index].dataset.status = button.dataset.status;
  });
}


let arrClone = [];

//Рандомные картинки в All
function showAllImg(length) {
  for (let i = 0; i < 12; i++) {
  if (allWork.children.length < length) {
      let rand = Math.floor(Math.random() * 94);
      if (arrClone.includes(rand)) {
        return showAllImg(length);
      }
        arrClone.push(rand);
        let clone = imgsWork[rand].cloneNode();
        clone.style.display = 'block';
        allWork.append(clone);
    }
  }
}

showAllImg(12);
let sss = 0;

//Добавление картинок
morework.addEventListener('click', () => {
  for (let i = 0; i < worklist.length; i++) {
    if (worklist[0].dataset.status === "active") {
      showAllImg(24);
    }
    if (worklist[i].dataset.status === "active") {
        for (let y = 0; y < 24; y++) {
          if (worktabs[i].children[y].style.display === 'none') {
            worktabs[i].children[y].style.display = 'block';
          } 
        }
        morework.style.display = 'none';
    }
  }
});
