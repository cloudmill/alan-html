window.addEventListener("DOMContentLoaded", () => {
  const allVideo = document.querySelectorAll("video:not(.always-play)");

  if (allVideo.length) {
    const PERIOD = 1000;

    allVideo.forEach((video) => {
      video.removeAttribute("autoplay");
      video.autoplay = false;
    });

    setInterval(() => {
      allVideo.forEach((video) => {
        const isInViewport = inViewport(video, {
          offset: 1620,
          debounce: 1000,
        });

        try {
          if (isInViewport) {
            video.play();
          } else {
            video.pause();
          }
        } catch (e) {
          console.log(e);
        }
      });
    }, PERIOD);
  }
});
