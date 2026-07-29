// Courtesy of W3 Schools ~*~

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 

// Courtesy of Adam Terlson
// https://stackoverflow.com/questions/7064998/how-to-make-a-link-open-multiple-pages-when-clicked

/* $('a.multi-link').click(
  function(e) {
    e.preventDefault();
    // Links go here
    window.open('https://web.archive.org/web/20260420005646/https://archiveswest.orbiscascade.org/ark:80444/xv791503');
    window.open('https://web.archive.org/web/20260729174051/https://archiveswest.orbiscascade.org/ark:80444/xv708159');
    window.open('https://web.archive.org/web/20260729174301/https://archiveswest.orbiscascade.org/ark:80444/xv506181');
});
*/
