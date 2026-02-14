const questions = [
    {
    img:"../../image/colour/colour_black.webp",
    answer:"Black",
    options:["Red","Yellow","Green","Black"]
    },

    {
    img:"../../image/colour/colour_blue.png",
    answer:"Blue",
    options:["Red","Blue","Orange","Pink"]
    },

    {
    img:"../../image/colour/colour_green.jpeg",
    answer:"Green",
    options:["Green","Purple","Yellow","Red"]
    },

    {
    img:"../../image/colour/colour_orange.jpg",
    answer:"Orange",
    options:["Black","Orange","Brown","White"]
    },

    {
    img:"../../image/colour/colour_pink.jpeg",
    answer:"Pink",
    options:["Yellow","Pink","Blue","Purple"]
    },

    {
    img:"../../image/colour/colour_brown.jpg",
    answer:"Brown",
    options:["White","Yellow","Black","Brown"]
    },

    {
    img:"../../image/colour/colour_red.webp",
    answer:"Red",
    options:["Blue","Red","Pink","Orange"]
    },

    {
    img:"../../image/colour/colour_purple.webp",
    answer:"Purple",
    options:["Purple","Yellow","Green","Brown"]
    },

    {
    img:"../../image/colour/colour_white.webp",
    answer:"White",
    options:["White","Black","Red","Pink"]
    },

    {
    img:"../../image/colour/colour_yellow.jpg",
    answer:"Yellow",
    options:["Orange","Brown","Green","Yellow"]
    }

];

const colourElement = document.getElementById('colour-img');
const optionsDiv   = document.getElementById('options');
const resultElement= document.getElementById('result');

let current = 0;
let score = 0;

function loadQuestion(){
    colourElement.src = questions[current].img;
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
            colourElement.style.display = "none";
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