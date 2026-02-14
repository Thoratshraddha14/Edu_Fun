const questions = [
    {
    img:"../../image/flower/flower_rose.webp",
    answer:"Rose",
    options:["Lily","Lavender","Rose","Sunflower"]
    },

    {
    img:"../../image/flower/flower_daisy.jpg",
    answer:"Daisy",
    options:["Lotus","Daisy","Datura","Lily"]
    },

    {
    img:"../../image/flower/flower_hibiscus.jpg",
    answer:"Hibiscus",
    options:["Hibiscus","Rose","Jasmine","Sunflower"]
    },

    {
    img:"../../image/flower/flower_lavender.jpg",
    answer:"Lavender",
    options:["Daisy","Marigold","Jasmine","Lavender"]
    },

    {
    img:"../../image/flower/flower_datura.jpg",
    answer:"Datura",
    options:["Sunflower","Datura","Lotus","Jasmine"]
    },

    {
    img:"../../image/flower/flower_lily.jpg",
    answer:"Lily",
    options:["Lily","Rose","Lavender","Hibiscus"]
    },

    {
    img:"../../image/flower/flower_jasmine.jpg",
    answer:"Jasmine",
    options:["Marigold","Datura","Daisy","Jasmine"]
    },

    {
    img:"../../image/flower/flower_lotus.jpg",
    answer:"Lotus",
    options:["Hibiscus","Lily","Lotus","Marigold"]
    },

    {
    img:"../../image/flower/flower_marigold.webp",
    answer:"Marigold",
    options:["Marigold","Lavender","Lily","Rose"]
    },

    {
    img:"../../image/flower/flower_sunflower.jpg",
    answer:"Sunflower",
    options:["Datura","Sunflower","Daisy","Hibiscus"]
    }

];

const flowerElement = document.getElementById('flower-img');
const optionsDiv   = document.getElementById('options');
const resultElement= document.getElementById('result');

let current = 0;
let score = 0;

function loadQuestion(){
    flowerElement.src = questions[current].img;
    optionsDiv.innerHTML = "";

    questions[current].options.forEach(opt => {
        const btn = document.createElement("button");
        btn.type = 'button';
        btn.textContent = opt;
        btn.addEventListener('click',() => {
            checkAnswer(opt);
            document.querySelectorAll('#options button').forEach(b => b.disabled = true);
        });
        optionsDiv.appendChild(btn);
    });
    resultElement.innerText = "";
}

function checkAnswer(selected){
    const correct = questions[current].answer;
    if(selected === correct){
        resultElement.innerText = "Correct ✅"; 
        resultElement.className = 'correct';   
        score++;    
    }
    else{
        resultElement.innerText = "Wrong ❌ Correct answer: "  + correct;
         resultElement.className = 'wrong';
    }

    setTimeout(() =>{
        current++;
        if(current < questions.length){
            loadQuestion();
        }
        else{
            flowerElement.style.display = "none";
            optionsDiv.innerHTML = "";
            resultElement.innerText = `Quiz Finished 🎉 \n Your Score : ${score}/ ${questions.length}`;
        }
    },2500);
}
loadQuestion();


document.getElementById("logout-btn").addEventListener("click", () => {

    localStorage.clear();
    sessionStorage.clear();

    alert("You have logged out successfully!");

    window.location.href = "../../index.html";
  });