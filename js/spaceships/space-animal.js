
const animals = [
  { name: "Lion", img: "../../image/animal/animal_lion.webp" },
  { name: "Tiger", img: "../../image/animal/animal_tiger.jpg" },
  { name: "Elephant", img: "../../image/animal/animal_elephant.jpg" },
  { name: "Cat", img: "../../image/animal/animal_cat.jpg" },
  { name: "Dog", img: "../../image/animal/animal_dog.jpg" },
  { name: "Monkey", img: "../../image/animal/animal_monkey.jpg" },
  { name: "Cow", img: "../../image/animal/animal_cow.jpg" },
  { name: "Camel", img: "../../image/animal/animal_camel.webp" },
  { name: "Bear", img: "../../image/animal/animal_bear.jpg" },
  { name: "Zebra", img: "../../image/animal/animal_zebra.jpg" }
];

const container = document.getElementById('animal-container');

animals.forEach(animal => {
  const box = document.createElement('div');
  box.classList.add('sub-box');

  const img = document.createElement('img');
  img.src = animal.img;
  img.alt = animal.name;

  const name = document.createElement('p');
  name.innerText = animal.name;

  box.appendChild(img);
  box.appendChild(name);

  container.appendChild(box);
});

document.getElementById("logout-btn").addEventListener("click", () => {

    localStorage.clear();
    sessionStorage.clear();

    alert("You have logged out successfully!");

    window.location.href = "../../index.html";
  });
