const questions = [
    {
    img:"../../image/fruit/fruit_apple.jpg",
    answer:"Apple",
    options:["Mango","Apple","Banana","Orange"]
    },

    {
    img:"../../image/fruit/fruit_banana.jpg",
    answer:"Banana",
    options:["Mango","Grapes","Guava","Banana"]
    },

    {
    img:"../../image/fruit/fruit_grape.jpg",
    answer:"Grapes",
    options:["Grapes","Watermelon","Papaya","Apple"]
    },

    {
    img:"../../image/fruit/fruit_avocado.jpg",
    answer:"Avocado",
    options:["Strawberry","Orange","Avocado","Pineapple"]
    },

    {
    img:"../../image/fruit/fruit_guava.jpg",
    answer:"Guava",
    options:["Papaya","Guava","Watermelon","Banana"]
    },

    {
    img:"../../image/fruit/fruit_mango.jpg",
    answer:"Mango",
    options:["Mango","Grapes","Guava","Strawberry"]
    },

    {
    img:"../../image/fruit/fruit_strawberry.jpg",
    answer:"Strawberry",
    options:["Apple","Strawberry","Avocado","Orange"]
    },

    {
    img:"../../image/fruit/fruit_orange.jpg",
    answer:"Orange",
    options:["Banana","Pineapple","Apple","Orange"]
    },

    {
    img:"../../image/fruit/fruit_watermelon.jpg",
    answer:"Watermelon",
    options:["Guava","Papaya","Watermelon","Strawberry"]
    },

    {
    img:"../../image/fruit/fruit_papaya.jpg",
    answer:"Papaya",
    options:["Orange","Grapes","Banana","Papaya"]
    },

    {
    img:"../../image/fruit/fruit_pineapple.jpg",
    answer:"Pineaaple",
    options:["Pineaaple","Watermelon","Guava","Apple"]
    }

];

const fruitElement = document.getElementById('fruit-img');
const optionsDiv   = document.getElementById('options');
const resultElement= document.getElementById('result');

let current = 0;
let score = 0;

function loadQuestion(){
    fruitElement.src = questions[current].img;
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
            fruitElement.style.display = "none";
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