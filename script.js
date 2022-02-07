import SineWaves from "https://isuttell.github.io/sine-waves/javascripts/sine-waves.min.js";

console.log(SineWaves);

window.addEventListener("DOMContentLoaded", () => {
  try {
    const preloaderVid = document.getElementById("preloader-vid");
    preloaderVid.playbackRate = 1.5;
  } catch {}

  try {
    const allVideo = document.getElementsByTagName("video");
    for (video of allVideo) {
      video.setAttribute("playsinline", "");
      video.setAttribute("muted", "");
      video.play();
    }
  } catch {}
});
