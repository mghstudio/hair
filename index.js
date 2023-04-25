
// video play and pause

const videos = document.querySelectorAll('.carousel video');

// Loop through each video and add a click event listener
videos.forEach(video => {
  video.addEventListener('click', togglePlay);
});

// Function to toggle play/pause
function togglePlay() {
  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
}

// carousel indicator with forms
const imageElements = document.querySelectorAll('.myImage');
const showContentButton = document.querySelector('#show-content-button');
const carouselItems = document.querySelectorAll('.carousel-item');
const indicatorElements = document.querySelectorAll('.indicator');


let selectedImageIndex = null;

imageElements.forEach((imageElement) => {
  imageElement.addEventListener('click', () => {
    selectedImageIndex = parseInt(imageElement.dataset.contentIndex);
    imageElements.forEach((otherImageElement) => {
      otherImageElement.classList.remove('selected');
    });
    imageElement.classList.add('selected');
  });
});

showContentButton.addEventListener('click', () => {
  if (selectedImageIndex !== null) {
    carouselItems[0].classList.remove('active')
    carouselItems[1].classList.add('active')
    const contentElements = document.querySelectorAll('.carousel-item:nth-of-type(2) .content');
    contentElements.forEach((contentElement, index) => {
      if (index === selectedImageIndex) {
        contentElement.classList.remove('hidden'); // remove hidden class
        contentElement.classList.add('active');
        indicatorElements[index].classList.add('active');   
      } else {
        contentElement.classList.remove('active');
        contentElement.classList.add('hidden'); // add hidden class
        indicatorElements[index].classList.add('active');   
      }
    });
  }
});
// img ids
const images = document.querySelectorAll('.gender img');

images.forEach(image => {
  image.addEventListener('click', () => {
    // Remove 'selected' class from all images
    images.forEach(image => image.classList.remove('selected'));
    // Add 'selected' class to clicked image
    image.classList.add('selected');
    // Get the ID of the clicked image
    const imageId = image.id;
    // Do something with the image ID (e.g. log it to the console)
    console.log(`Selected image ID: ${imageId}`);
  });
});




function sendEmail() {
    var a = {
        Name: document.getElementById('Firstname').value ,
        Email: document.getElementById('inputmail').value ,
        msg: document.getElementById('exampleFormControlTextarea1').value ,
    };
    const serviceid =""
    const templateid =""
    
    emailjs.send( serviceid,templateid,a)
    .then(
        re =>{
            document.getElementById('Firstname').value ="";
             document.getElementById('inputmail').value ="";
             document.getElementById('exampleFormControlTextarea1').value ="";
             console.log(res);
    
        }
    )
    .catch((err) =>console.log(err))
   
    
}
