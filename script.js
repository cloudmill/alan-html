window.addEventListener("DOMContentLoaded", () => {
  // legacy
  {
    try {
      var vid = document.getElementById("preloader-vid");
      vid.playbackRate = 1.5;
    } catch (e) {
      console.error(e);
    }

    try {
      for (const video of document.getElementsByTagName("video")) {
        video.setAttribute("playsinline", "");
        video.setAttribute("muted", "");
        video.play();
      }
    } catch (e) {
      console.error(e);
    }
  }

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
            rootMargin: "50% 0px",
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

  // waves
  {
    let interval = null;

    const FPS = 30;
    const SPEED = (60 / FPS) * 2.5;
    const INTERVAL = 1000 / FPS;

    var waves1 = new SineWaves({
      el: document.getElementById("waves"),

      speed: SPEED,
      running: false,

      width: function () {
        return $(window).width();
      },

      height: function () {
        return $(window).height();
      },

      ease: "SineInOut",

      wavesWidth: "100%",

      waves: [
        {
          timeModifier: 3,
          lineWidth: 1,
          amplitude: -400,
          waveLength: 400,
        },
        {
          type: "SineWave",
          segmentLength: 1,
        },
        {
          timeModifier: 2,
          lineWidth: 1,
          amplitude: -370,
          wavelength: 100,
        },
        {
          timeModifier: 1,
          lineWidth: 1,
          amplitude: -500,
          wavelength: 350,
        },
        {
          timeModifier: 0.5,
          lineWidth: 1,
          amplitude: -380,
          wavelength: 180,
        },
        {
          timeModifier: 0.4,
          lineWidth: 1,
          amplitude: -300,
          wavelength: 200,
        },
      ],

      // Called on window resize
      resizeEvent: function () {
        var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
        gradient.addColorStop(0.3, "rgba(48, 166, 255, 1)");
        gradient.addColorStop(0.5, "rgba(22, 106, 240, 1)");
        gradient.addColorStop(0.7, "rgba(22, 0, 157, 1)");

        var index = -1;
        var length = this.waves.length;
        for (index = 0; index < length; index++) {
          this.waves[index].strokeStyle = gradient;
        }

        // Clean Up
      },
    });
    var waves2 = new SineWaves({
      el: document.getElementById("waves_2"),

      speed: SPEED,
      running: false,

      width: function () {
        return $(window).width();
      },

      height: function () {
        return $(window).height();
      },

      ease: "SineInOut",

      wavesWidth: "100%",

      waves: [
        {
          timeModifier: 3,
          lineWidth: 1,
          amplitude: -400,
          waveLength: 400,
        },
        {
          type: "SineWave",
          segmentLength: 1,
        },
        {
          timeModifier: 2,
          lineWidth: 1,
          amplitude: -370,
          wavelength: 100,
        },
        {
          timeModifier: 1,
          lineWidth: 1,
          amplitude: -500,
          wavelength: 350,
        },
        {
          timeModifier: 0.5,
          lineWidth: 1,
          amplitude: -380,
          wavelength: 180,
        },
        {
          timeModifier: 0.4,
          lineWidth: 1,
          amplitude: -300,
          wavelength: 200,
        },
      ],

      // Called on window resize
      resizeEvent: function () {
        var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
        gradient.addColorStop(0.3, "rgba(48, 166, 255, 1)");
        gradient.addColorStop(0.5, "rgba(22, 106, 240, 1)");
        gradient.addColorStop(0.7, "rgba(22, 0, 157, 1)");

        var index = -1;
        var length = this.waves.length;
        for (index = 0; index < length; index++) {
          this.waves[index].strokeStyle = gradient;
        }

        // Clean Up
      },
    });

    const tick = () => {
      waves1.update();
      waves2.update();

      console.log("tick");
    };

    const handleWavesIntersection = (entries) => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          interval = setInterval(tick, INTERVAL);
        } else {
          if (interval) {
            clearInterval(interval);
          }
        }
      });
    };

    const wavesObserver = new IntersectionObserver(handleWavesIntersection, {
      rootMargin: "20% 0px",
    });

    wavesObserver.observe(document.querySelector(".waves-wrapper"));
  }
});
