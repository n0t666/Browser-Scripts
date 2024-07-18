// ==UserScript==
// @name        Letterboxd Magnet Links
// @namespace   n0tScripts
// @description Add magnet links to Letterboxd, for 1337x, YTS, Rutracker, and WatchSoMuch
// @author       Leandro Pereira
// @icon
// @license MIT
// @version    1.0
// @match        *://*.letterboxd.com/*
// @grant       none
// ==/UserScript==

(function () {
  const endPoints = {
    "1337x": "https://1337x.st/search/",
    "yts": "https://yts.mx/browse-movies/",
    "rutracker": "https://rutracker.net/forum/tracker.php?nm=",
    "watchsomuch": "https://watchsomuch.to/Movies/"
  };

  const images = {
    "1337x":"https://upload.wikimedia.org/wikipedia/commons/b/bb/1337X_logo.svg",
    "yts": "https://yts.mx/assets/images/website/logo-YTS.svg",
    "rutracker": "https://static.rutracker.cc/logo/logo-3.svg",
    "watchsomuch": "https://watchsomuch.to/Images/Logo.png"
  };

  var titleContainer = document.querySelector(".headline-1");
  var yearContainer = document.querySelector(".releaseyear");

  if (titleContainer && yearContainer) {
    var title = titleContainer.textContent.trim();
    var year = yearContainer.textContent.trim();
    var searchQuery = `${title} ${year}`;

    var metaBlock = document.querySelector(".metablock");
    var p = document.createElement("p");
    p.style.marginTop = "10px";

    for (var key in endPoints) {
      var a = document.createElement("a");
      var href;
      switch (key) {
        case "1337x":
          href = `${endPoints[key]}${searchQuery}/1/`;
          console.log(href);
          break;
        case "yts":
          href = `${endPoints[key]}${searchQuery}` +  "/all/all/0/seeds/0/all";
          console.log(href);
          break;
        default:
          href = `${endPoints[key]}${searchQuery}`;
          break;
      }
      a.href = href;
      a.target = "_blank";
      a.style.display = "inline-block";
      a.style.marginRight = "20px";

      var img = document.createElement("img");
      img.src = images[key];
      img.alt = key;
      img.style.height = "30px";
      img.style.verticalAlign = "middle";
      img.style.marginRight = "5px";

      a.appendChild(img);
      p.appendChild(a);
    }

    metaBlock.parentNode.insertBefore(p, metaBlock.nextSibling);
  }
})();
