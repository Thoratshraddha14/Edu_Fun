const questions = [
    {
    img:"../../image/bird/birds_peacock.jpg",
    answer:"Peacock",
    options:["Crow","Peacock","Eagle","Penguin"]
    },

    {
    img:"../../image/bird/birds_duck.jpeg",
    answer:"Duck",
    options:["Owl","Crane","Hen","Duck"]
    },

    {
    img:"../../image/bird/birds_crane.jpg",
    answer:"Crane",
    options:["Crane","Penguin","Crow","Parrot"]
    },

    {
    img:"../../image/bird/birds_owl.jpg",
    answer:"Owl",
    options:["Pigeon","Eagle","Owl","Pineapple"]
    },

    {
    img:"../../image/bird/birds_hen.jpeg",
    answer:"Hen",
    options:["Duck","Hen","Crane","Peacock"]
    },

    {
    img:"../../image/bird/birds_penguin.png",
    answer:"Penguin",
    options:["Parrot","Owl","Crow","Penguin"]
    },

    {
    img:"../../image/bird/birds_parrot.jpg",
    answer:"Parrot",
    options:["Parrot","Duck","Pigeon","Hen"]
    },

    {
    img:"../../image/bird/birds_eagle.avif",
    answer:"Eagle",
    options:["Peacock","Hen","Eagle","Penguin"]
    },

    {
    img:"../../image/bird/birds_pigeon.webp",
    answer:"Pigeon",
    options:["Crane","Penguin","Parrot","Pigeon"]
    },

    {
    img:"../../image/bird/birds_crow.jpg",
    answer:"Crow",
    options:["Duck","Eagle","Crow","Peacock"]
    }

];

const birdElement = document.getElementById('bird-img');
const optionsDiv   = document.getElementById('options');
const resultElement= document.getElementById('result');

let current = 0;
let score = 0;

function loadQuestion(){
    birdElement.src = questions[current].img;
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
            birdElement.style.display = "none";
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