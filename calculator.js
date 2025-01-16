const result = document.getElementById('item1');
const item1 = document.getElementById('item2');
const item2 = document.getElementById('item3');
const item3 = document.getElementById('item4');
const equal = document.getElementById('item5');
const item4 = document.getElementById('item6');
const item5 = document.getElementById('item7');
const item6 = document.getElementById('item8');
const plus = document.getElementById('item9');
const item7 = document.getElementById('item10');
const item8 = document.getElementById('item11');
const item9 = document.getElementById('item12');
const division = document.getElementById('item13');
const power = document.getElementById('item14');
const item0 = document.getElementById('item15');
const modulo = document.getElementById('item16');
const multiplication = document.getElementById('item17');

function is__opera(operator) {
    return operator === '+' || operator === '-' || operator === 'x' || operator === '/' || operator === '%' || operator === '^';
}

const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('click', () => {
        if (item.textContent !== '=') {
            if(item.textContent === 'AC')
                result.textContent = '';
            else
                result.textContent += item.textContent;
        } else {
            let opps = [];
            let nums = [];
            let idx = 0;
            let first_sign = false;

            // Handle negative sign for the first number
            if (result.textContent[0] === '-') {
                first_sign = true;
                idx++; // Skip the negative sign
            }

            // Parse numbers and operators
            while (idx < result.textContent.length) {
                let num = '';
                while (idx < result.textContent.length && !is__opera(result.textContent[idx])) {
                    num += result.textContent[idx];
                    idx++;
                }
                nums.push(parseFloat(num));

                if (idx < result.textContent.length && is__opera(result.textContent[idx])) {
                    opps.push(result.textContent[idx]);
                    idx++;
                }
            }

            // Handle the first negative sign
            if (first_sign) {
                nums[0] = -nums[0];
            }

            console.log(`opps: ${opps.join(', ')}; nums: ${nums.join(', ')}`);

            // Calculate based on operator precedence
            let idx_opp = 0;
            while (opps.includes('x') || opps.includes('/')) {
                if (opps[idx_opp] === 'x') {
                    nums[idx_opp] = nums[idx_opp] * nums[idx_opp + 1];
                    nums.splice(idx_opp + 1, 1);
                    opps.splice(idx_opp, 1);
                } else if (opps[idx_opp] === '/') {
                    if (nums[idx_opp + 1] === 0) {
                        result.textContent = 'Error'; // Division by zero
                        return;
                    }
                    nums[idx_opp] = nums[idx_opp] / nums[idx_opp + 1];
                    nums.splice(idx_opp + 1, 1);
                    opps.splice(idx_opp, 1);
                } else {
                    idx_opp++;
                }
            }

            // Handle addition and subtraction
            let sum = nums[0];
            for (let i = 0; i < opps.length; i++) {
                if (opps[i] === '+') {
                    sum += nums[i + 1];
                } else if (opps[i] === '-') {
                    sum -= nums[i + 1];
                }
            }

            // Update the result
            result.textContent = sum;
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