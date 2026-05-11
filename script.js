const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// MENU MOBILE
hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});


// SLIDER
const slides = document.querySelectorAll(".slide");
let index = 0;
let timer;

// pokaż slajd
function showSlide(i){
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

// następny slajd
function nextSlide(){
    index = (index + 1) % slides.length;
    showSlide(index);
}

// poprzedni slajd
function prevSlide(){
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

// AUTO SLIDER
function startAuto(){
    timer = setInterval(nextSlide, 3000);
}

// reset po kliknięciu
function resetAuto(){
    clearInterval(timer);
    startAuto();
}

// STRZAŁKI
document.getElementById("next").addEventListener("click", () => {
    nextSlide();
    resetAuto();
});

document.getElementById("prev").addEventListener("click", () => {
    prevSlide();
    resetAuto();
});

// START
startAuto();
/* =========================
   VIDEO SLIDER
========================= */

const videos = document.querySelectorAll(".video-slide");

const videoPrev = document.getElementById("videoPrev");
const videoNext = document.getElementById("videoNext");

let currentVideo = 0;

/* POKAZ VIDEO */
function showVideo(index){

    videos.forEach(video => {

        video.classList.remove("active-video");

        video.pause();

    });

    currentVideo = index;

    videos[currentVideo].classList.add("active-video");

    videos[currentVideo].play();
}

/* NEXT */
videoNext.addEventListener("click", () => {

    let next = (currentVideo + 1) % videos.length;

    showVideo(next);

});

/* PREV */
videoPrev.addEventListener("click", () => {

    let prev =
    (currentVideo - 1 + videos.length) % videos.length;

    showVideo(prev);

});