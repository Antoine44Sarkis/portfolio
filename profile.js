const paragraphs = document.querySelectorAll("p");
let isActive = false;

function toggleBoolean() {
    isActive = !isActive;
    console.log(isActive);
}

paragraphs.forEach(paragraph => {
const text = paragraph.textContent;
let index = 0;
let typing = false;

function typeWriter() {
    if (index < text.length) {
        paragraph.textContent += text[index];
        index++;
        setTimeout(typeWriter, 1);
    } else {
        typing = false;
        if (isActive == false)
            paragraph.style.color = 'rgb(147, 225, 247)';
        else
            paragraph.style.color = 'black';
    }
}

paragraph.addEventListener("mouseover", () => {
    if (!typing) {
        typing = true;
        index = 0;
        paragraph.textContent = "";
        if (isActive == false)
            paragraph.style.color = 'cyan';
        else
            paragraph.style.color = 'lightgrey';
        typeWriter();
    }
});
});

let infor = document.getElementById('inform');
let click_me = document.getElementById('click-button');

click_me.addEventListener('click', () => {
    if (infor.style.display === 'none' || infor.style.display === '') {
        infor.style.display = 'block';
    } else {
        infor.style.display = 'none';
    }
});

var inf = document.querySelector(".info");
const h2 = document.querySelector("h2");
const h3 = document.querySelectorAll("h3");
const para = document.querySelector("p");
const ul = document.querySelectorAll("ul");
const sec = document.querySelectorAll("section");
const span = document.querySelectorAll("span");
const a = document.querySelectorAll("a");
var body = document.body;
color.addEventListener('click', ()=>{
    body.classList.toggle("white-mode");
    h2.classList.toggle("grey-mode");
    para.classList.toggle("grey-mode");
    inf.classList.toggle("grey-mode");
    toggleBoolean();
    span.forEach(function(span)
    {
        span.classList.toggle("special");
    });
    a.forEach(function(a)
    {
        a.classList.toggle("special");
    });
    ul.forEach(function(ul)
    {
        ul.classList.toggle("grey-mode");
    });
    h3.forEach(function(h3)
    {
        h3.classList.toggle("grey-mode");
    });
});