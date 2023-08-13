function showHome() {
    var home = document.getElementById('home');

    home.style.display = "flex";

    aboutme.style.display = "none";
    work.style.display = "none";
}

function showAboutme() {
    var aboutme = document.getElementById('aboutme');

    aboutme.style.display = "block";
    home.style.display = "none";

    work.style.display = "none";
}




function showWork() {
    var work = document.getElementById('work');

    work.style.display = "block";
    home.style.display = "none"
    aboutme.style.display = "none";


}

