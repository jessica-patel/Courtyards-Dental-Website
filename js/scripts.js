console.log("Hello and welcome to my portfolio site! -Jess")

// navigation toggling
function menuToggle() { // shows menu links when hamburger is clicked on
    var x = document.getElementById('myNavtoggle'); // assigns menu object to a variable using the ID (searched document for the provided ID)
    if (x.className === 'navtoggle') { // checks if classname of x is navtoggle
      x.className += ' responsive'; // changes class of object based on whether it's shown. this shows menu
    } else { // aka if it is navtoggle responsive
      x.className = 'navtoggle'; // effectively hides menu
    }
}

// smooth scrolling
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigation").style.top = "0";
  } else {
    document.getElementById("navigation").style.top = "-110px";
  }
  prevScrollpos = currentScrollPos;
}


// slideshows pictures
const images = ['img/front.jpg', 'img/chairs_front.jpg', 'img/chairs_back.jpg', 'img/hall.jpg', 'img/operatory.jpg']; // Add your image URLs here
let currentIndex = 0;

const galleryImage = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function showImage(index) {
  galleryImage.src = images[index];
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Initial image
showImage(currentIndex);


// lazy reveal
const content = document.querySelector('.content');

function revealContent() {
  const contentRect = content.getBoundingClientRect();

  if (contentRect.top < window.innerHeight) {
    content.style.display = 'block';
  }
}

window.addEventListener('scroll', revealContent);



const slowLoadElement = document.getElementById('slowLoadElement');

function checkScroll() {
  const elementTop = slowLoadElement.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (elementTop < windowHeight) {
    slowLoadElement.classList.remove('hidden');
    slowLoadElement.style.opacity = '1';
    slowLoadElement.style.transform = 'translateY(0)';
    window.removeEventListener('scroll', checkScroll);
  }
}

window.addEventListener('scroll', checkScroll);

const observer = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));