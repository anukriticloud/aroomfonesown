const images = [
  "https://cdn.glitch.global/3a2ea6b7-ee34-462a-bda5-b46b01d9a5c9/01.png?v=1742585640715",
  "https://cdn.glitch.global/3a2ea6b7-ee34-462a-bda5-b46b01d9a5c9/02.png?v=1742585644000",
  "https://cdn.glitch.global/3a2ea6b7-ee34-462a-bda5-b46b01d9a5c9/03.png?v=1742585647788",
  "https://cdn.glitch.global/3a2ea6b7-ee34-462a-bda5-b46b01d9a5c9/04.png?v=1742585653395",
  "https://cdn.glitch.global/3a2ea6b7-ee34-462a-bda5-b46b01d9a5c9/06.png?v=1742585657654",
  "https://cdn.glitch.global/3a2ea6b7-ee34-462a-bda5-b46b01d9a5c9/07.png?v=1742585661222",
];

function createRandomImage() {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  const img = document.createElement("img");
  img.src = randomImage;

  // Set random size (between 100px and 300px for width and height)
  const imgWidth = Math.random() * 700 + 100; // Width between 100px and 300px
  const imgHeight = Math.random() * 700 + 100; // Height between 100px and 300px
  img.style.width = `${imgWidth}px`;
  img.style.height = `${imgHeight}px`;

  // Set random position within viewport
  const maxX = window.innerWidth - imgWidth;
  const maxY = window.innerHeight - imgHeight;
  img.style.left = `${Math.random() * maxX}px`;
  img.style.top = `${Math.random() * maxY}px`;

  document.getElementById("container").appendChild(img);

  // Fade-in effect
  setTimeout(() => {
    img.style.opacity = 1;
  }, 50);

  // Make image draggable
  //makeDraggable(img);
  //addZoomFunctionality(img);

  // Schedule next image creation at a random interval (1 to 5 seconds)
  setTimeout(createRandomImage, Math.random() * 4000 + 1000);

  // Start the fade-out effect after 1 minute (60000 ms)
  setTimeout(() => {
    fadeOutAndRemove(img);
  }, 60000); // 1 minute
}

function fadeOutAndRemove(img) {
  img.style.transition = "opacity 5s ease-in-out";
  img.style.opacity = 0;

  setTimeout(() => {
    img.remove();
  }, 5000); // 5 seconds fade-out duration
}

//function makeDraggable(img) {
 // let offsetX,
  //  offsetY,
   // isDragging = false;

 // img.addEventListener("mousedown", function (event) {
 //   isDragging = true;
   // offsetX = event.clientX - img.getBoundingClientRect().left;
    //offsetY = event.clientY - img.getBoundingClientRect().top;
    //img.style.cursor = "grabbing";
 // });

  //document.addEventListener("mousemove", function (event) {
    //if (isDragging) {
      //img.style.left = `${event.clientX - offsetX}px`;
      //img.style.top = `${event.clientY - offsetY}px`;
 //   }
  //});

//  document.addEventListener("mouseup", function () {
//    if (isDragging) {
 //     isDragging = false;
 //     img.style.cursor = "pointer";
//    }
 // });
//}

//function addZoomFunctionality(img) {
  //let scale = 1;
  //const zoomStep = 0.1;

 // img.addEventListener("wheel", function (event) {
 //   event.preventDefault();
//    scale += event.deltaY < 0 ? zoomStep : -zoomStep;
//    if (scale < 0.5) scale = 0.5;
//    img.style.transform = `scale(${scale})`;
//  });
//}

createRandomImage();
