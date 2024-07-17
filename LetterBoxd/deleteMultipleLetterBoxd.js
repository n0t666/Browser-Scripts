// ==UserScript==
// @name        Letterboxd Magnet Links 
// @namespace 
// @description Add magnet links to Letterboxd, for 1337x, YTS, Rutracker, and WatchSoMuch
// @copyright Leandro Pereira
// @icon 
// @license MIT
// @version    1.0
// @match        *://*.letterboxd.com/*
// @grant       none
// ==/UserScript==

(function () {
    const endPoints = {
      "1337x": "https://1337x.st/search/",
      yts: "https://yts.mx/browse-movies/",
    };
  
    const images = {
      "1337x":
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/1337X_logo.svg",
      yts: "https://yts.mx/assets/images/website/logo-YTS.svg",
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
        if (key === "1337x") {
          href = `${endPoints[key]}${searchQuery.replace(/ /g, "+")}/1/`;
        } else {
          href = `${endPoints[key]}${searchQuery}/all/all/0/latest/0/all`;
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
  