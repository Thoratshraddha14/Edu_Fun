const questions = [
    {
    img:"../../image/animal/animal_lion.webp",
    answer:"Lion",
    options:["Dog","Cow","Lion","Cat"]
    },

    {
    img:"../../image/animal/animal_elephant.jpg",
    answer:"Elephant",
    options:["Elephant","Monkey","Bear","Zebra"]
    },

    {
    img:"../../image/animal/animal_tiger.jpg",
    answer:"Tiger",
    options:["Dog","Cat","Camel","Tiger"]
    },

    {
    img:"../../image/animal/animal_cow.jpg",
    answer:"Cow",
    options:["Lion","Cow","Dog","Tiger"]
    },

    {
    img:"../../image/animal/animal_monkey.jpg",
    answer:"Monkey",
    options:["Tiger","Camel","Bear","Monkey"]
    },

    {
    img:"../../image/animal/animal_cat.jpg",
    answer:"Cat",
    options:["Bear","Cat","Zebra","Camel"]
    },

    {
    img:"../../image/animal/animal_zebra.jpg",
    answer:"Zebra",
    options:["Dog","Lion","Zebra","Cow"]
    },

    {
    img:"../../image/animal/animal_dog.jpg",
    answer:"Dog",
    options:["Cat","Monkey","Tiger","Dog"]
    },

    {
    img:"../../image/animal/animal_camel.webp",
    answer:"Camel",
    options:["Camel","Cow","Zebra","Cat"]
    },

    {
    img:"../../image/animal/animal_bear.jpg",
    answer:"Bear",
    options:["Elephant","Monkey","Bear","Lion"]
    }

];

const animalElement = document.getElementById('animal-img');
const optionsDiv   = document.getElementById('options');
const resultElement= document.getElementById('result');

let current = 0;
let score = 0;

function loadQuestion(){
    animalElement.src = questions[current].img;
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
            animalElement.style.display = "none";
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