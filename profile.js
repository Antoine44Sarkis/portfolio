const paragraphs = document.querySelectorAll("p");
let isActive = false;

function toggleBoolean() {
    isActive = !isActive;
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

document.addEventListener('DOMContentLoaded', () => {
    
    const elements = document.getElementsByClassName('clicked');

    Array.from(elements).forEach((element) => {
        element.addEventListener('click', () => {
            // Reset all elements' background colors
            Array.from(elements).forEach((el) => {
                el.style.backgroundColor = '';
            });

            // Set the clicked element's background color
            element.style.backgroundColor = 'rgb(109, 108, 108)';
        });
    });
});

const about_me = document.getElementById('about');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const for_home = document.getElementById('for_home');

const h = document.getElementById('h');
const ab = document.getElementById('ab');
const p = document.getElementById('p');

// Function to hide all sections
const hideSections = () => {
    about_me.style.display = 'none';
    skills.style.display = 'none';
    projects.style.display = 'none';
    for_home.style.display = 'none';
};

// Event listener for 'h' (for_home)
h.addEventListener('click', () => {
    hideSections();
    for_home.style.display = 'block';
});

// Event listener for 'ab' (about_me and skills)
ab.addEventListener('click', () => {
    hideSections();
    about_me.style.display = 'block';
    skills.style.display = 'block';
});

// Event listener for 'p' (projects)
p.addEventListener('click', () => {
    hideSections();
    projects.style.display = 'block';
});

// Initially, hide all sections
hideSections();
for_home.style.display = 'block';
h.style.backgroundColor = 'rgb(109, 108, 108)';

const cnt_info = document.getElementById('contact-btn');
const info1 = document.getElementById('info1');
const info2 = document.getElementById('info2');
info1.style.display = 'none';
info2.style.display = 'none';
cnt_info.addEventListener('click', () => {

    if (info1.style.display !== 'none') {
        info1.style.display = 'none';
        info2.style.display = 'none';
    }
    else {
        info1.style.display = 'inline-block';
        info2.style.display = 'inline-block';
    }
});

function more_i(){
    const moreinfo = document.getElementById('more_info');
    moreinfo.classList.toggle('hide');
}

document.addEventListener("DOMContentLoaded", () => {
    const text = "Hi I'm a Web Developer";
    const element = document.getElementById("anime-web");
    const backcolor = document.getElementsByClassName('aw')[0];
    let index = 0;

    function typeletter() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            backcolor.style.width = `${(index + 1) * 13}px`;
            index++;
            setTimeout(typeletter, 200);
        } else {
            element.style.borderRight = "none";
        }
    }

    typeletter();
});
