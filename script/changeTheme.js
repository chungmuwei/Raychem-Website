function changeTheme() {
    var themeIcon = document.getElementById("themeIcon");
    var video = document.getElementById("background-video")
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        themeIcon.src = "/img/lightmode.png";
        video.style.filter = "brightness(60%)"
    } else {
        themeIcon.src = "/img/darkmode.png";
        video.style.filter = "brightness(100%)"
    }
}