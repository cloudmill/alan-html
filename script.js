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

  const allVideo = document.querySelectorAll("video:not(.always-play)");

  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
    });
  });

  allVideo.forEach((video) => videoObserver.observe(video));
});
