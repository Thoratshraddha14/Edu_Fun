const birds = [
  { name: "Parrot", img: "../../image/bird/birds_parrot.jpg" },
  { name: "Peacock", img: "../../image/bird/birds_peacock.jpg" },
  { name: "Crow", img: "../../image/bird/birds_crow.jpg" },
  { name: "Duck", img: "../../image/bird/birds_duck.jpeg" },
  { name: "Hen", img: "../../image/bird/birds_hen.jpeg" },
  { name: "Eagle", img: "../../image/bird/birds_eagle.avif" },
  { name: "Owl", img: "../../image/bird/birds_owl.jpg" },
  { name: "Crane", img: "../../image/bird/birds_crane.jpg" },
  { name: "Pigeon", img: "../../image/bird/birds_pigeon.webp" },
  { name: "Penguin", img: "../../image/bird/birds_penguin.png" }
];

const container = document.getElementById('bird-container');

birds.forEach(bird => {
  const box = document.createElement('div');
  box.classList.add('sub-box');

  const img = document.createElement('img');
  img.src = bird.img;
  img.alt = bird.name;

  const name = document.createElement('p');
  name.innerText = bird.name;

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