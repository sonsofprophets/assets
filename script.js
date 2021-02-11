// replace favicon
let newIcon = "https://sonsofprophets.github.io/assets/favicon.ico";

let nodes = document.getElementsByTagName("link");

let favicons = [...nodes].filter(link => link.getAttribute("rel") === "icon");

favicons.forEach(favicon => favicon.setAttribute("href", newIcon))
