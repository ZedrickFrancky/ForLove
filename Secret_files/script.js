let correctAnswers = 0;

function checkName() {
  const nameInput = document.getElementById("nameInput").value.toLowerCase();
  if (nameInput === "madelyn") {
    correctAnswers++;
    askRelationshipDate();
  } else {
    alert("Oops! That's not the correct name. Try again!");
  }
}

function askRelationshipDate() {
  document.getElementById("questions").innerHTML = "<p>When did we start our relationship? (MMDDYY)</p><input type='text' id='dateInput'><button onclick='checkDate()'>Submit</button>";
}

function checkDate() {
  const dateInput = document.getElementById("dateInput").value;
  if (dateInput === "042223") {
    correctAnswers++;
    askLoveQuestion();
  } else {
    alert("Incorrect date. Let's try again!");
  }
}

function askLoveQuestion() {
  document.getElementById("questions").innerHTML = "<p>Do you love me?</p><button onclick='increaseSize()'>No</button><button onclick='resetSize()'>Yes</button>";
}

function increaseSize() {
  correctAnswers++;
  const yesButton = document.getElementById("questions").querySelector("button:last-child");
  const currentFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  const newFontSize = currentFontSize + 10;

  yesButton.style.fontSize = newFontSize + "px";

  if (correctAnswers < 10) {
    setTimeout(increaseSize, 500);
  }
}

function resetSize() {
  correctAnswers++;
  document.getElementById("questions").innerHTML = "<h1>Phew! That was a close one. I love you!</h1><h1>HAPPY VALENTINES DAY LOVE!</h1><button onclick='showPictures()'>Click here</button>";
}

function showPictures() {
  document.getElementById("questions").innerHTML = "<h1>Here's a series of pictures for you!</h1><div id='imageContainer'></div>";

  const imageContainer = document.getElementById("imageContainer");
  const images = [
    'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg',
    'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg',
    'image11.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg', 'image15.jpg'
  ];

  images.forEach((image, index) => {
    const imgElement = document.createElement("img");
    imgElement.src = image;
    imgElement.alt = `Image ${index + 1}`;
    imgElement.style.opacity = 0;
    imgElement.style.width = '100px';
    imgElement.style.height = '100px';

    imageContainer.appendChild(imgElement);

    setTimeout(() => {
      fadeInImage(imgElement, index + 1 === images.length);
    }, index * 2000); // Change the delay (in milliseconds) between each image
  });
}

function fadeInImage(element, isLastImage) {
  let opacity = 0;
  const fadeInInterval = setInterval(() => {
    opacity += 0.1;
    element.style.opacity = opacity;

    if (opacity >= 1) {
      clearInterval(fadeInInterval);
      if (isLastImage) {
        showSeeAllButton();
      } else {
        setTimeout(() => fadeOutImage(element), 2000); // Adjust the duration the image stays visible
      }
    }
  }, 200);
}

function fadeOutImage(element) {
  let opacity = 1;
  const fadeOutInterval = setInterval(() => {
    opacity -= 0.1;
    element.style.opacity = opacity;

    if (opacity <= 0) {
      clearInterval(fadeOutInterval);
    }
  }, 200);
}

function showSeeAllButton() {
  const imageContainer = document.getElementById("imageContainer");

  const seeAllButton = document.createElement("button");
  seeAllButton.textContent = "See All Images";
  seeAllButton.onclick = displayLargeImages;

  const message = document.createElement("p");
  message.innerHTML = "Sorry, but only fifteen images is all I can put. However, the memories you gave me are more than everything!";
  message.style.marginTop = '20px';

  imageContainer.innerHTML = ""; // Clear the container
  imageContainer.appendChild(message);
  imageContainer.appendChild(seeAllButton);
}

function displayLargeImages() {
  const imageContainer = document.getElementById("imageContainer");
  imageContainer.innerHTML = ""; // Clear the container

  const images = [
    'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg',
    'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg',
    'image11.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg', 'image15.jpg'
  ];

  images.forEach(image => {
    const imgElement = document.createElement("img");
    imgElement.src = image;
    imgElement.alt = "Large Image";
    imgElement.style.width = '500px';
    imgElement.style.height = '500px';
    imgElement.style.margin = '10px';
    imageContainer.appendChild(imgElement);
  });

  imageContainer.style.display = 'flex';
  imageContainer.style.flexDirection = 'column';
  imageContainer.style.alignItems = 'center';
  imageContainer.style.height = '100vh'; // Set a fixed height to enable scrolling
  imageContainer.style.overflowY = 'scroll'; // Enable vertical scrolling
}
