const fruits = [
  { name: "Apple", img: "../../image/fruit/fruit_apple.jpg" },
  { name: "Banana", img: "../../image/fruit/fruit_banana.jpg" },
  { name: "Grapes", img: "../../image/fruit/fruit_grape.jpg" },
  { name: "Mango", img: "../../image/fruit/fruit_mango.jpg" },
  { name: "Orange", img: "../../image/fruit/fruit_orange.jpg" },
  { name: "Strawberry", img: "../../image/fruit/fruit_strawberry.jpg" },
  { name: "Papaya", img: "../../image/fruit/fruit_papaya.jpg" },
  { name: "Pineapple", img: "../../image/fruit/fruit_pineapple.jpg" },
  { name: "Watermelon", img: "../../image/fruit/fruit_watermelon.jpg" },
  { name: "Guava", img: "../../image/fruit/fruit_guava.jpg" }
];

const container = document.getElementById('fruit-container');

fruits.forEach(fruit => {
  const box = document.createElement('div');
  box.classList.add('sub-box');

  const img = document.createElement('img');
  img.src = fruit.img;
  img.alt = fruit.name;

  const name = document.createElement('p');
  name.innerText = fruit.name;

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