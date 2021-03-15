document.addEventListener('DOMContentLoaded', (event) => {

  const header = document.querySelector('.header');
  const socialLinks = document.querySelector('.social-links');

  const heroHeader = document.querySelector('.hero-header');
  const heroContainer = document.querySelector('.hero-content .container');

  // const showEpisodes = document.querySelector('#showEpisodes')

  // replace favicon
  const newIcon = "https://sonsofprophets.github.io/assets/favicon.ico";

  const nodes = document.getElementsByTagName("link");

  let favicons = [...nodes].filter(link => link.getAttribute("rel") === "icon");

  favicons.forEach(favicon => favicon.setAttribute("href", newIcon));

  if(heroHeader) {
    let heroPlayer = document.createElement('div')
    heroPlayer.classList.add('hero-player');

    let audioPlayer = document.createElement('audio');
    audioPlayer.preload="none";
    audioPlayer.src = 'https://podcasts.captivate.fm/media/b7480508-eb93-4dbf-9bae-ff0ba9097831/ep1-3-14-21-10-46-pm.mp3';
    heroPlayer.append(audioPlayer)

    heroHeader.append(heroPlayer)

    new GreenAudioPlayer('.hero-player');
  }

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
  // let episodeLink = document.querySelector('.episode-link span');
  // if(episodeLink) episodeLink.innerText = 'Episode details';

  if(heroContainer) {
    if(socialLinks) heroContainer.append(socialLinks);

    let playBtn = document.querySelector('.play-pause-btn');

    if(playBtn) {
      // Create button link to first episode
      let heroButton = document.createElement('a');

      heroButton.classList.add('play-intro');
      // heroButton.href = 'https://www.sonsofprophets.co/episode/intro';
      heroButton.innerHTML = 'Play Intro Episode';

      heroButton.onclick = function() {
        playBtn.click()
      }

      heroContainer.append(heroButton);
    }
  }

  // if(showEpisodes) {
  //   showEpisodes.innerHTML = '<iframe src="https://embed.podcasts.apple.com/us/podcast/sons-of-prophets/id1558244267?itsct=podcast_box&amp;itscg=30200&amp;theme=dark" height="700px" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *;" style="width: 100%; max-width: 100%; overflow: hidden; border-radius: 7px; background: transparent;"></iframe>';
  // }
})
