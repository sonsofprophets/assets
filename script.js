// replace favicon
let heroContainer = document.querySelector('.hero-content .container');

let newIcon = "https://sonsofprophets.github.io/assets/favicon.ico";

let nodes = document.getElementsByTagName("link");

let favicons = [...nodes].filter(link => link.getAttribute("rel") === "icon");

favicons.forEach(favicon => favicon.setAttribute("href", newIcon));


// Change "Listen for free" text
document.querySelector('.follow-this-podcast h4').innerText = 'Subscribe to this podcast';

// Change "Show notes" text
document.querySelector('.episode-link span').innerText = 'Episode details';

// Create button link to first episode
let heroContainer = document.querySelector('.hero-content .container');
let heroButton = document.createElement('a');

heroButton.classList.add('about-support');
heroButton.href = 'https://www.sonsofprophets.co/episode/test-episode';
heroButton.innerText = 'Play Intro Episode';

heroContainer.append(heroButton);
