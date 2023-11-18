const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preload = document.querySelector(".preloader");



btn.addEventListener("click", () => {
    btn.classList.toggle("slide");
    
    switch (!btn.classList.contains("slide")) { 
        case true: video.play(); break; 
        case false: video.pause(); break; }
});



window.addEventListener("load", () => {
    preload.classList.add("hide-preloader");
});
