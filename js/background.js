const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// // document.body.appendChild(bgImage);

document.body.style.backgroundImage = `url(img/${chosenImage})`;

// function randombg() {
//   const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
//   const chosenImage = images[Math.floor(Math.random() * images.length)];
//   const randomUrl = `url(img/${chosenImage})`;
//   document.querySelector(".background").backgroundImage = randomUrl;
// }
