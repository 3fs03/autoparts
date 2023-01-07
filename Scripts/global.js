
hamburger = document.getElementsByClassName(".hamburger");
hamburger.onclick = function() {
    navBar = document.getElementsByClassName(".nav-links");
    navBar.classList.toggle("active");
}

