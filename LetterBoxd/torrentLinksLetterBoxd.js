// ==UserScript==
// @name        Letterboxd
// @namespace
// @description
// @copyright
// @icon
// @license
// @version
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

  console.log("loaded");
  if (titleContainer && yearContainer) {
    console.log("died");
    var title = titleContainer.textContent.trim();
    var year = yearContainer.textContent.trim();
    var searchQuery = `${title} ${year}`;


    var metaBlock = document.querySelector(".metablock");
    console.log(metaBlock);
    var p = document.createElement("p");
    p.style.marginTop = "20px"; 


    for (var key in endPoints) {
      var a = document.createElement("a");
      var href;
      switch(key)
      {
        case "1337x":
          href = `${endPoints[key]}${searchQuery.replace(/ /g, "+")}/1/`;
          break;
        case "yts":
          href = `${endPoints[key]}${searchQuery}/all/all/0/latest/0/all`;
          break;
        case "rutracker":
          href = `${endPoints[key]}${searchQuery.replace(/ /g, "+")}`;
          break;
        case "watchsomuch":
          href = `${endPoints[key]}${searchQuery}` + "/";
          break;
      }
      a.href = href;
      a.target = "_blank";
      a.style.display = "inline-block";
      a.style.marginRight = "20px";

      var img = document.createElement("img");
      img.src = images[key];
      img.alt = key;
      img.style.height = "15px";
      img.style.verticalAlign = "middle";
      img.style.marginRight = "5px";


      a.appendChild(img);
      p.appendChild(a);
    }

    metaBlock.parentNode.insertBefore(p, metaBlock.nextSibling);
  }
})();
