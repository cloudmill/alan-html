window.addEventListener("DOMContentLoaded", () => {
  // legacy
  try {
    const allVideo = document.getElementsByTagName("video");

    allVideo.forEach((video) => {
      video.muted = true;
      video.playsInline = true;
    });
  } catch {}

  // video play/pause on scroll
  {
    const allVideo = document.querySelectorAll("video:not(.always-play)");

    if (allVideo.length) {
      const handleVideoIntersection = (entries) => {
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
        const videoObserver = new IntersectionObserver(
          handleVideoIntersection,
          {
            rootMargin: "150% 0px",
          }
        );

        allVideo.forEach((video) => videoObserver.observe(video));
      } catch (e) {
        console.error(e);
      }
    }
  }
});
