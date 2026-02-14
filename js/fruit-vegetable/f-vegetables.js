const questions1 = [
    {
        img: "../../image/vegetable/veg_potato.jpg",
        answer: "Potato",
        options: ["Tomato", "Potato", "Carrot", "Onion"]
    },

    {
        img: "../../image/vegetable/veg_tomato.jpg",
        answer: "Tomato",
        options: ["Cucumber", "Chilli", "Tomato", "Radish"]
    },

    {
        img: "../../image/vegetable/veg_onion.jpg",
        answer: "Onion",
        options: ["Onion", "Capsicum", "Potato", "Cauliflower"]
    },

    {
        img: "../../image/vegetable/veg_chilli.jpg",
        answer: "Chilli",
        options: ["Brinjal", "Cucumber", "Radish", "Chilli"]
    },

    {
        img: "../../image/vegetable/veg_cauliflower.jpg",
        answer: "Cauliflower",
        options: ["Potato", "Cauliflower", "Onion", "Tomato"]
    },

    {
        img: "../../image/vegetable/veg_carrot.jpg",
        answer: "Carrot",
        options: ["Chilli", "Radich", "Carrot", "Cucumber"]
    },

    {
        img: "../../image/vegetable/veg_capsicum.jpg",
        answer: "Capsicum",
        options: ["Cauliflower", "Tomato", "Potato", "Capsicum"]
    },

    {
        img: "../../image/vegetable/veg_radish.avif",
        answer: "Radish",
        options: ["Radish", "Carrot", "Brinjal", "Chilli"]
    },

    {
        img: "../../image/vegetable/veg_cucumber.jpeg",
        answer: "Cucumber",
        options: ["Carrot", "Potato", "Radish", "Cucumber"]
    },

    {
        img: "../../image/vegetable/veg_brinjal.webp",
        answer: "Brinjal",
        options: ["Brinjal", "Tomato", "Cauliflower", "Onion"]
    }

]; 

const vegElement = document.getElementById("vegetable-img");
const optionsDiv = document.getElementById("options");
const resultElement = document.getElementById("result");

let current = 0;
let score = 0;

function loadQuestion1() {
    vegElement.src = questions1[current].img;
    optionsDiv.innerHTML = "";

    questions1[current].options.forEach(opt => {
        const btn = document.createElement("button");
        btn.type = 'button';
        btn.textContent = opt;
        btn.addEventListener('click', () => {
            checkAnswer1(opt);
            document.querySelectorAll('#options button').forEach(b => b.disabled = true);
        });
        optionsDiv.appendChild(btn);
    });
    resultElement.innerText = "";
}


function checkAnswer1(selected) {
    const correct = questions1[current].answer;

    if (selected === correct) {
        resultElement.innerText = "Correct ✅";
        resultElement.className = 'correct';
        score++;
    }
    else {
        resultElement.innerText = "Wrong ❌ Correct answer: " + correct;
        resultElement.className = 'wrong';
    }

    setTimeout(() => {
        current++;
        if (current < questions1.length) {
            loadQuestion1();
        }
        else {
            vegElement.style.display = "none";
            optionsDiv.innerHTML = "";
            resultElement.innerText = `Quiz Finished 🎉 \n Your Score : ${score}/ ${questions1.length}`;
        }
    }, 2500);
}
loadQuestion1();

document.getElementById("logout-btn").addEventListener("click", () => {

    localStorage.clear();
    sessionStorage.clear();

    alert("You have logged out successfully!");

    window.location.href = "../../index.html";
  });
