const flowers = [
  { name: "Rose", img: "../../image/flower/flower_rose.webp" },
  { name: "Jasmine", img: "../../image/flower/flower_jasmine.jpg" },
  { name: "Lotus", img: "../../image/flower/flower_lotus.jpg" },
  { name: "Hibiscus", img: "../../image/flower/flower_hibiscus.jpg" },
  { name: "Levender", img: "../../image/flower/flower_lavender.jpg" },
  { name: "Marigold", img: "../../image/flower/flower_marigold.webp" },
  { name: "Lily", img: "../../image/flower/flower_lily.jpg" },
  { name: "Daisy", img: "../../image/flower/flower_daisy.jpg" },
  { name: "Sunflower", img: "../../image/flower/flower_sunflower.jpg" },
  { name: "Datura", img: "../../image/flower/flower_datura.jpg" }
];

const container = document.getElementById('flower-container');

flowers.forEach(flower => {
  const box = document.createElement('div');
  box.classList.add('sub-box');

  const img = document.createElement('img');
  img.src = flower.img;
  img.alt = flower.name;

  const name = document.createElement('p');
  name.innerText = flower.name;

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