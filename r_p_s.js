const start = document.getElementById('r_p_s_btn');
let comp = document.getElementById('comp');
const l_s = document.getElementById('l-s');
const w_s = document.getElementById('w-s');
const d_s = document.getElementById('d-s');
let intl_s = parseInt(l_s.textContent) || 0;
let intd_s = parseInt(l_s.textContent) || 0;
let intw_s = parseInt(w_s.textContent) || 0;
start.addEventListener('click', ()=>{
    const game2 = document.getElementById('game2');
    homepage.style.display = 'none';
    h.style.display = 'none';
    ab.style.display = 'none';
    p.style.display = 'none';
    game2.style.display = 'flex';
});

const backpage2 = document.getElementById('back2');
backpage2.addEventListener('click', ()=>{
    homepage.style.display = 'block';
    game2.style.display = 'none';
    h.style.display = 'block';
    ab.style.display = 'block';
    p.style.display = 'block';
});

const computer_choice = ['paper', 'rock', 'scissor'];
function play_r_p_s(variable){
    let computer_i = Math.floor(Math.random() * 3);
    console.log(`${computer_choice[computer_i]}`);
    if (computer_choice[computer_i] === 'paper')
    {
        comp.innerHTML = '<i class="fas fa-hand-paper"></i>'
        if(variable === 'paper')
        {
            intd_s++;
            d_s.textContent = intd_s;
            alert('draw');
        }
        else if (variable === 'rock')
        {
            intl_s++;
            l_s.textContent = intl_s;
            alert('YOU LOST');
        }
        else if (variable === 'scissor')
        {
            intw_s++;
            w_s.textContent = intw_s;
            alert('YOU WiN');
        }
    }
    else if (computer_choice[computer_i] === 'rock')
    {
        comp.innerHTML = '<i class="fas fa-hand-rock"></i>'
        if(variable === 'paper')
        {
            intw_s++;
            w_s.textContent = intw_s;
            alert('YOU WiN');
        }
        else if (variable === 'rock')
        {
            intd_s++;
            d_s.textContent = intd_s;
            alert('draw');
        }
        else if (variable === 'scissor')
        {
            intl_s++;
            l_s.textContent = intl_s;
            alert('YOU LOST');
        }
    }
    else if (computer_choice[computer_i] === 'scissor')
    {
        comp.innerHTML = '<i class="fas fa-hand-scissors"></i>'
        if(variable === 'paper')
        {
            intl_s++;
            l_s.textContent = intl_s;
            alert('YOU LOST');
        }
        else if (variable === 'rock')
        {
            intw_s++;
            w_s.textContent = intw_s;
            alert('YOU WiN');
        }
        else if (variable === 'scissor')
        {
            intd_s++;
            d_s.textContent = intd_s;
            alert('draw');
        }
    }
};