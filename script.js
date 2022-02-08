window.addEventListener("DOMContentLoaded", () => {
  // legacy
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

  // video play/pause on scroll
  const allVideo = document.querySelectorAll("video:not(.always-play)");

  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      try {
        if (isIntersecting) {
          target.play();
        } else {
          target.pause();
        }
      } catch {}
    });
  });

  allVideo.forEach((video) => videoObserver.observe(video));

  console.log(allVideo);
});
