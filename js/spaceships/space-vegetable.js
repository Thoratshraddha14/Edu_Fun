const vegetables =[
    {name: "Potato", img: "../../image/vegetable/veg_potato.jpg"},
    {name: "Onion", img: "../../image/vegetable/veg_onion.jpg"},
    {name: "Tomato", img: "../../image/vegetable/veg_tomato.jpg"},
    {name: "Capsicum", img: "../../image/vegetable/veg_capsicum.jpg"},
    {name: "Brinjal", img: "../../image/vegetable/veg_brinjal.webp"},
    {name: "Cauliflower", img: "../../image/vegetable/veg_cauliflower.jpg"},
    {name: "Chilli", img: "../../image/vegetable/veg_chilli.jpg" },
    {name: "Carrot", img: "../../image/vegetable/veg_carrot.jpg"},
    {name: "Radish", img: "../../image/vegetable/veg_radish.avif"},
    {name: "Cucumber", img: "../../image/vegetable/veg_cucumber.jpeg"}
];

const container = document.getElementById('vegetable-container');

vegetables.forEach(vegetable =>{
    const box =document.createElement('div');
    box.classList.add('sub-box');

    const img = document.createElement('img');
    img.src = vegetable.img;
    img.alt = vegetable.name;

    const name = document.createElement('p');
    name.innerText = vegetable.name;

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
