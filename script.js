// script.js

// Function to simulate a typewriter effect
function typeWriterEffect() {
  const nameElement = document.getElementById('name');
  const nameText = nameElement.textContent;
  nameElement.textContent = '';

  let i = 0;
  const typeInterval = setInterval(function() {
    if (i < nameText.length) {
      nameElement.textContent += nameText.charAt(i);
      i++;
    } else {
      clearInterval(typeInterval);
    }
  }, 100); // Adjust the interval for typing speed
}

// Call the typewriter function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', typeWriterEffect);

// Function to fade in portfolio sections when they come into view
function fadeInSections() {
  const sections = document.querySelectorAll('.portfolio-section');

  sections.forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%", // Adjust when the animation should start
        end: "bottom 80%", // Adjust when the animation should end
        scrub: 1, // Smooth scrolling effect
      }
    });
  });
}

// Call the animation function when the page loads
window.onload = function() {
  // Initialize ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  fadeInSections(); // Fade in the sections when they come into view
};


