document.addEventListener("DOMContentLoaded", () => {
    const user_ask = document.getElementById('input-ask');
    const ai_rep = document.getElementById('send-ai');
    const botResponse = document.getElementById('bot-response');
    ai_rep.addEventListener('click', () => {
        let userText = user_ask.value.toLowerCase().trim(); // Get user input and remove extra spaces
        let response = "Sorry, I don't understand that question. Try asking something else!";

        // 🔹 Questions About Antoine Sarkis (The Owner)
        if (userText.includes('owner') || userText.includes('antoine sarkis') || userText.includes('antoine')) {
            response = "Are you asking about my owner, Antoine Sarkis? You can ask about his age, studies, country, hobbies, or projects!";
        }
        // 🔹 General Questions About Antoine Sarkis
        else if (userText.includes('name'))
        {
            response = "The owner of the web name is Antoine";
        }
        else if (userText.includes('gender') || userText.includes('male') || userText.includes('female'))
        {
            response = "Antoine is a male."
        }
        else if (userText.includes('age') || userText.includes('old are you') || userText.includes('old')) {
            response = "Antoine is 26 years old.";
        } else if (userText.includes('birthday')) {
            response = "Antoine was born on 15/9/1998.";
        } else if (userText.includes('live') || userText.includes('you from') || userText.includes('country')) {
            response = "Antoine lives in Lebanon.";
        } else if (userText.includes('do for living') || userText.includes('do')) {
            response = "Antoine is a student at 42 Beirut and has a Master's degree in Physics.";
        } else if (userText.includes('studying') || userText.includes('study')) {
            response = "Antoine is studying programming and software development at 42 Beirut.";
        } else if (userText.includes('skills')) {
            response = "Antoine is skilled in C, JavaScript, Node.js, and web development. have a look at About me section->skills!";
        } else if (userText.includes('hobbies')) {
            response = "Antoine loves coding, gaming, and working on cool projects!";
        } else if (userText.includes('what projects are you working on') || userText.includes('projects')) {
            response = "Antoine is working on lots of projects you can find some on this web page go to projects, there is more projects doing by Antoine in c/c++ (42 projects)";
        } else if (userText.includes('youtube channel') || userText.includes('youtube')) {
            response = "Yes! Antoine is planning to start a YouTube channel about coding.";
        } else if (userText.includes('phone') || userText.includes('number') || userText.includes('email') || userText.includes('contact') || userText.includes('reach you')) {
            response = "Click on contact Info button on the top of the page under or next my name ANTOINE SARKIS";
        }
        else if (userText.includes('xo project')) {
            response = "is a simple project play with a computer first you have choose a mode to play, to win you should get 3 x diagonally horizontally or vertically. You can check your score and if you want go back u can  click on botton and ul back to the primary page";
        }
        else if (userText.includes('rock paper scissors project')) {
            response = "is a simple project play with a computer first you have choose rock or paper or scissors, rock beats scissors, paper beats rock and scissors beats paper. You can check your score and if you want go back u can  click on botton and ul back to the primary page";
        }
        else if (userText.includes('snake project')) {
            response = "On pc you can use up, left , down and right arrow to move the more you eat the more your snake get longer and if you want go back u can  click on botton and ul back to the primary page.";
        }
        else if (userText.includes('casino game project')) {
            response = "simple version of a casino slot spinner with a login page you enter with a balance worth of 1000$ then you can play you may loose or win . Do your bet and then spin.";
        }
        else if (userText.includes('calculator')) {
            response = "do your own calculations , u can use () parantheses but always add * and / before or after depend on your calculation example you can do 2x(2+2) but you cannot do 2(2+2). AC : clear all or use the icon to clear one by one , % is module , x is the multiplication and if you want go back u can  click on botton and ul back to the primary page";
        }
        else if (userText.includes('are you single')) {
            response = "Yes i am.";
        }
        else {
            response = "Sorry, I don't understand that question. Try asking something else!";
        }

        botResponse.innerText = response; // Display the response on the webpage
        user_ask.value = ''; // Clear input field after clicking the button
    });
});