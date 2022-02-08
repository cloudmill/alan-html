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
    let videoObserver = null;

    const handleVideoIntersection = (entries) => {
      entries.forEach(({ isIntersecting, video }) => {
        try {
          if (isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        } catch {}
      });

      console.log(entries);
    };

    const updateVideoObserver = () => {
      if (videoObserver) {
        videoObserver.disconnect();
      }

      videoObserver = new IntersectionObserver(handleVideoIntersection, {
        rootMargin: `${Math.ceil(
          document.documentElement.clientHeight * 1.5
        )}px 0`,
      });

      allVideo.forEach((video) => videoObserver.observe(video));

      console.log(videoObserver, videoObserver.rootMargin);
    };

    updateVideoObserver();
    ["load", "resize"].forEach((eventType) =>
      window.addEventListener(eventType, updateVideoObserver)
    );
  }
});
