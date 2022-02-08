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

  if (allVideo.length) {
    const handleVideoIntersection = (entries) => {
      console.log(entries);

      entries.forEach(({ isIntersecting, target }) => {
        try {
          if (isIntersecting) {
            target.play();
          } else {
            target.pause();
          }
        } catch (e) {
          console.error(e);
        }
      });
    };

    try {
      const videoObserver = new IntersectionObserver(handleVideoIntersection, {
        rootMargin: "150% 0px",
      });

      allVideo.forEach((video) => videoObserver.observe(video));
    } catch (e) {
      console.error(e);
    }
  }
});
