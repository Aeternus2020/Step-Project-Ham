"use strict";

const worklist = document.querySelectorAll(".work_list");
const work = document.querySelector(".work");
const major = document.querySelector('.major');
const allWork = document.querySelector('.all');
const workWrapper = document.querySelector('.work_wrapper');
let second;
let ava;

const buttonAdd = document.createElement("button");
      buttonAdd.id = "moreWork";
      buttonAdd.innerHTML = "<span>&#43;</span>Load More";
      workWrapper.appendChild(buttonAdd);
const morework = document.getElementById('moreWork');

//Creating lists of commentators
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
  document.querySelector('.list_commet').append(ul);
}

creat(arr);

//Scrolling comments to the left
document.getElementById('right').addEventListener('click', () => {
  scroll(rightScroll, "-30px")
})  

//Scrolling commentators to the right
document.getElementById('left').addEventListener('click', () => {
  scroll(leftScroll, "30px")
})  

//Scrolling commentators
function scroll(side, y) {
  second = document.querySelector('.second');
  second.animate([
    {transform: 'translate(0, 0)'},
    {transform: 'translate(0, 10px)'},
  ], 1000);
    ul.animate([
      {transform: 'translate(0, 0)', opacity: 1},
      {transform: `translate(${y}, 0)`, opacity: 0}
    ], 1000);
    setTimeout(side, 800);
    setTimeout(animRev, 800);
}

//Avatar animation
function animRev() {
    ava.animate([
      {transform: 'translate(0, 0)', opacity: 1},
      {transform: 'translate(0, 0)',opacity: 0}
    ], 1000);
    ava.animate([
        {transform: 'translate(0, 0)', opacity: 0},
        {transform: 'translate(0, 0)',opacity: 1}
      ], 1000)
}

//Scroll Animation
function scrollUl(y) {
  ul.animate([
    {transform: `translate(${y}, 0)`, opacity: 0},
    {transform: 'translate(0, 0)', opacity: 1}
  ], 1000);
  second.animate([
    {transform: 'translate(0, 10px)'},
    {transform: 'translate(0, 0)'},
  ], 1000);
}

//Scroll left animation
function rightScroll() {
  let elm = arr.shift(0);
  arr.push(elm);
  ul.innerHTML = '';
  major.innerHTML = '';
  creat(arr);
  second = document.querySelector('.second');
  scrollUl("30px");
}

//Scroll right animation
function leftScroll() {
  let elm = arr.pop(3);
  arr.unshift(elm);
  ul.innerHTML = '';
  major.innerHTML = '';
  creat(arr);
  second = document.querySelector('.second');
  scrollUl("-30px");
}

//Tab switching on click
function toggle(target, buttonList, list) {
  buttonList.forEach((button, index) => {
    console.log(target);
    button.dataset.status = (button === target) ? "active" : "inactive";
    list[index].dataset.status = button.dataset.status;
  });
  worklist[0].dataset.status !== "active" || allWork.children.length === 24 ?  morework.remove() : workWrapper.appendChild(buttonAdd);
}

work.addEventListener('click', (event) => {
  let newArrClone =[]
  arrClone.forEach(img => {
    if (img.alt === event.target.innerHTML) {
      newArrClone.push(img);
      img.style.display = "block";
    }
  })
  toggle(event.target, worklist, document.querySelectorAll(".work_tabs"));
});

document.querySelector(".tabs").addEventListener("click", (event) => {
  toggle(event.target, document.querySelectorAll(".tabs-title"), document.querySelectorAll(".tabs-main"));
});

const arrClone = [];

//Adding pictures in a block "Our Amazing Work"
function showAllImg(length) {
  while (allWork.children.length < length) {
    let rand = Math.floor(Math.random() * 94);
    let selectedImg = document.querySelectorAll('.work_tabs img')[rand];
    
    if (!arrClone.includes(selectedImg)) {
      let clone = selectedImg.cloneNode();
      clone.style.display = 'block';
      allWork.append(clone);
      arrClone.push(selectedImg);
    }
  }
  morework.addEventListener('click', () => {
    for (let i = 0; i < worklist.length; i++) {
      worklist[0].dataset.status === "active" ?  showAllImg(24) : null;
      }
      morework.remove();
    });
}

showAllImg(12);