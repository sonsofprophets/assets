// replace favicon
const heroContainer = document.querySelector('.hero-content .container');

const newIcon = "https://sonsofprophets.github.io/assets/favicon.ico";

const nodes = document.getElementsByTagName("link");

let favicons = [...nodes].filter(link => link.getAttribute("rel") === "icon");

favicons.forEach(favicon => favicon.setAttribute("href", newIcon));

// Change "Listen for free" text
let follow = document.querySelector('.follow-this-podcast h4');
if(follow) follow.innerText = 'Subscribe to this podcast';

// Change "Show notes" text
let episode = document.querySelector('.episode-link span');
if(episode) episode.innerText = 'Episode details';

// Create button link to first episode
let heroButton = document.createElement('a');

if(heroButton) {
  heroButton.classList.add('about-support');
  heroButton.href = 'https://www.sonsofprophets.co/episode/test-episode';
  heroButton.innerHTML = 'Play Intro Episode';

  heroContainer.append(heroButton);
}
