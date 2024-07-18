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
  var movies = document.querySelectorAll(".film-list-entry");

  if (!movies) return;

  var movie = findMovieEntry(movies, "Antigang");
  
  if (!movie) return;
})();

function findMovieEntry(movies, name) {
  var filmName = null;
  var i = 0;
  do {
      var deleteButton;
      var movie = movies[i];
      var meta = movie.getAttribute("data-film-name");
      filmName = meta;
      if (meta && meta === name) {
          deleteButton = movie.querySelector(".list-item-remove.replace");
          if (deleteButton) {
              simulateClick(deleteButton);
          }
          break;
      }
      i++;     
  } while (i < movies.length);

  return filmName;
}

function simulateClick(element) {
  element.addEventListener("click", function (e) {
    
  });

}
