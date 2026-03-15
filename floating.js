const floatingObjects = [
    "images.jpg",   // Bible
    "f86f80ea4a96b8f98691b94b12880fd6.jpg",    // Cross (optional)
    "360_F_388510441_6vFzRyy1SpZBvTY7GuwGPF5tAcEj2YOy.jpg"      // Dove (optional)
];

const numObjects = 20;

for (let i = 0; i < numObjects; i++) {

    const obj = document.createElement("div");
    obj.classList.add("floating");

    const randomImage = floatingObjects[Math.floor(Math.random()*floatingObjects.length)];

    obj.style.backgroundImage = `url(${randomImage})`;

    obj.style.left = Math.random()*100 + "vw";

    obj.style.animationDuration = (15 + Math.random()*15) + "s";

    const size = 20 + Math.random()*50;

    obj.style.width = size + "px";
    obj.style.height = size + "px";

    obj.style.opacity = Math.random();

    document.body.appendChild(obj);

}