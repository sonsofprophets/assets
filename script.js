// replace favicon
let newIcon = "https://sonsofprophets.github.io/assets/favicon.ico";

let nodes = document.getElementsByTagName("link");

let favicons = [...nodes].filter(link => link.getAttribute("rel") === "icon");

favicons.forEach(favicon => favicon.setAttribute("href", newIcon))


// Change "Listen for free" text
document.querySelector('.follow-this-podcast h4').innerText = 'Subscribe to this podcast'

// Change "Show notes" text
document.querySelector('.episode-link span').innerText = 'Episode details'
