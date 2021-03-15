document.addEventListener('DOMContentLoaded', (event) => {

  const header = document.querySelector('.header');
  const socialLinks = document.querySelector('.social-links');
  // search-box

  const heroContainer = document.querySelector('.hero-content .container');

  // replace favicon
  const newIcon = "https://sonsofprophets.github.io/assets/favicon.ico";

  const nodes = document.getElementsByTagName("link");

  let favicons = [...nodes].filter(link => link.getAttribute("rel") === "icon");

  favicons.forEach(favicon => favicon.setAttribute("href", newIcon));

  // modify social icon links
  if(socialLinks) {
    const socialIcons = document.querySelectorAll('.fab');

    if(socialIcons) {
      [...socialIcons].forEach(icon => icon.classList.add('fa-fw'));

      header.style.display = 'none';
    }
  }

  // Change "Listen for free" text
  let followText = document.querySelector('.follow-this-podcast h4');
  if(followText) followText.innerText = 'Subscribe to this podcast';

  // Change "Show notes" text
  let episodeLink = document.querySelector('.episode-link span');
  if(episodeLink) episodeLink.innerText = 'Episode details';

  if(heroContainer) {
    if(socialLinks) heroContainer.append(socialLinks);

    // Create button link to first episode
    let heroButton = document.createElement('a');

    heroButton.classList.add('about-support');
    heroButton.href = 'https://www.sonsofprophets.co/episode/intro';
    heroButton.innerHTML = 'Play Intro Episode';

    heroContainer.append(heroButton);
  }
})
