// Get the chatText element
var chatText = document.getElementById("chatText");

// Set the text content for each option
var optionTexts = {
  "option1": "This was our first assignment, we split up into groups and were tasked with making our own key and creating unique images that followed that key. My group decided to do only ASCII special charcters and numbers, backgrounds will be numbers, the subject will be special characters, and any color can be used.",
  "option2": "This assignment was really cool! The class made a still life and we all took different pictures of the still life to recreate on Codepen, I really wanted mine to have the mini pig and Gameboy. I also learned what a Div is in this assignment.",
  "option3": "This was the final assignment for section 1. This assignment was scary at first because we were making our own webpages, but it ended up being really fun. I made a college student simulator and it was my first website ever!",
  "option4": "This is our class web ring. We all implemented a 'go somehwere else' link in our websites from section 1's final project, click on it to navigate through all of our websites!",
  "option5": "This assignment explored css selectors and hover effects. It also served as an exploration for alt-text, which I struggled with because of the way I implemented my images, if I could go back, I would plan out the format of my page in advance instead of trying to add it last.  ",
  "option6": "This was the final project for section 2, we had to make a functioning clock in any level of complexity. I had a lot of fun making my clock, I had circles that changed in size with the time, accompanied by its number, and the background would change depending on if it is am or pm.",
  "option7": "This was a group project where we had to have a performance and script. My group went through a lot of trial and error and change of ideas, but we ended with a projection-mapped video of a rabbit going through different sceneries inspired by Alice in wonderland.",
  "option8": "This was another group project in section 3. IN this assignment we had to make our own applet and a website to pitch the applet. Our applet played Sunshine every morning on spotify. We challeneged ourselves with trying to make the sun and logo switch on scroll. The javascript is still buggy but we got it pretty close when scrolled slow. Trying to figure out the javascript was a fun challenge.",
  "option9": "This is the final project for section 3, we were tasked with making a generative design that uses functions and loops. This was really fun to do and see what everyone came up with. My design was a field that you can fill up with flowers with each click. The more you click the more flowers on the field. "
};

// Function to set the text content
function setChatText(option) {
  chatText.textContent = optionTexts[option] || "Hi! I'm Starry, I'll be your guide to Yaxlei's Portfolio, hover on any of the options to see more.";
}

// Function to handle mouseover and mouseout events for an option
function handleOptionEvents(optionElement, optionKey) {
  optionElement.addEventListener("mouseover", function() {
    setChatText(optionKey);
  });

  optionElement.addEventListener("mouseout", function() {
    setChatText(); // Set back to default text
  });
}

// Add event listeners for hover on each option dynamically
for (var i = 1; i <= 9; i++) {
  var optionElement = document.getElementById("option" + i);
  if (optionElement) {
    handleOptionEvents(optionElement, "option" + i);
  }
}

function goToLink(link) {
  // Open the link in a new tab
  window.open(link, '_blank');
}
