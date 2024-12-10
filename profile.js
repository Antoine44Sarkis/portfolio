const paragraphs = document.querySelectorAll("p");

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
        paragraph.style.color = 'rgb(147, 225, 247)';
    }
}

paragraph.addEventListener("mouseover", () => {
    if (!typing) {
        typing = true;
        index = 0;
        paragraph.textContent = "";
        paragraph.style.color = 'cyan';
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