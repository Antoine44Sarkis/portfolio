const result = document.getElementById('item1');

function is__opera(operator) {
    return operator === '+' || operator === '-' || operator === 'x' || operator === '/' || operator === '%' || operator === '^' || operator === '√' || operator === '(' || operator === ')';
}

const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('click', () => {
        if (item.textContent !== '=') {
            if (item.textContent === 'AC') {
                result.textContent = '';
            } else {
                result.textContent += item.textContent;
            }
        } else {
            try {
                // Replace 'x' with '*' and '^' with '**' for JS evaluation
                let expression = result.textContent
                    .replace(/x/g, '*')
                    .replace(/\^/g, '**');

                // Handle square root with or without parentheses
                expression = expression.replace(/√\(([^()]+)\)/g, (_, subExpr) => `Math.sqrt(${subExpr})`);
                expression = expression.replace(/√(\d+(\.\d+)?)/g, (_, num) => `Math.sqrt(${num})`);

                // Use Function to safely evaluate the expression
                let evalResult = new Function(`return (${expression});`)();

                // Round result to avoid floating-point issues
                result.textContent = Math.round(evalResult * 100000) / 100000;
            } catch (e) {
                result.textContent = 'Error';
            }
        }
    });
});

const calc_btn = document.getElementById('calcul_btn');

calc_btn.addEventListener('click', () => {
    homepage.style.display = 'none';
    h.style.display = 'none';
    ab.style.display = 'none';
    p.style.display = 'none';
    calculation.style.display = 'flex';
});

const back3 = document.getElementById('back3');
back3.addEventListener('click', ()=>{
    homepage.style.display = 'block';
    calculation.style.display = 'none';
    h.style.display = 'block';
    ab.style.display = 'block';
    p.style.display = 'block';
});

const deleteBtn = document.getElementById('item23');

deleteBtn.addEventListener('click', () => {
    result.textContent = result.textContent.slice(0, -1);
});