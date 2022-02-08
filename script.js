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

  // tabs videos
  {
    const allVideo = document.querySelectorAll(".always-play");
    const allMuteAll = document.querySelectorAll(".mute_all");
    const allSoundSwitch = document.querySelectorAll(".video_click_div");

    if (allVideo.length && allMuteAll.length && allSoundSwitch.length) {
      const rewindAllVideo = () => {
        allVideo.forEach((video) => {
          try {
            video.currentTime = 0;
          } catch (e) {
            console.error(e);
          }
        });
      };

      const muteAllVideo = () => {
        allVideo.forEach((video) => {
          try {
            video.muted = true;
          } catch (e) {
            console.error(e);
          }
        });
      };

      const resetAllSoundSwitch = () => {
        allSoundSwitch.forEach((soundSwitch) => {
          const offButton = soundSwitch.querySelector(".mute_bt_off");
          const onButton = soundSwitch.querySelector(".mute_bt");

          offButton.style.opacity = 0;
          onButton.style.opacity = 1;
        });
      };

      const resetAllTab = () => {
        rewindAllVideo();
        muteAllVideo();
        resetAllSoundSwitch();
      };

      resetAllTab();

      let curMuteAll = [...allMuteAll].find((muteAll) =>
        muteAll.classList.contains("w--current")
      );

      allMuteAll.forEach((muteAll) =>
        muteAll.addEventListener("click", ({ currentTarget }) => {
          if (currentTarget !== curMuteAll) {
            resetAllTab();

            curMuteAll = currentTarget;
          }
        })
      );

      allSoundSwitch.forEach((soundSwitch) =>
        soundSwitch.addEventListener("click", ({ currentTarget }) => {
          const tab = currentTarget.closest(".tab-pane");
          const offButton = currentTarget.querySelector(".mute_bt_off");
          const onButton = currentTarget.querySelector(".mute_bt");
          const video = tab.querySelector("video");
          const isMuted = video.muted;

          video.muted = !isMuted;
          offButton.style.opacity = +isMuted;
          onButton.style.opacity = +!isMuted;
        })
      );
    }
  }
});
