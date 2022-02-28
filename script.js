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
          const inputCheckbox = soundSwitch.querySelector("input");

          inputCheckbox.checked = false;
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
          const video = tab.querySelector("video");
          const inputCheckbox = tab.querySelector("input");
          const checked = inputCheckbox.checked;

          video.muted = !checked;
        })
      );
    }
  }

  // waves
  {
    if (matchMedia("(min-width: 480px)").matches) {
      // let interval = null;

      // const FPS = 30;
      // const SPEED = (60 / FPS) * 2.5;
      const SPEED = 3;
      // const INTERVAL = 1000 / FPS;

      var waves1 = new SineWaves({
        el: document.getElementById("waves"),

        speed: SPEED,
        running: false,

        width: function () {
          return document
            .querySelector(".waves-wrapper")
            .getBoundingClientRect().width;
        },

        height: function () {
          return document
            .querySelector(".waves-wrapper")
            .getBoundingClientRect().height;
        },

        ease: "SineInOut",

        wavesWidth: "100%",

        waves: [
          {
            timeModifier: 3,
            lineWidth: 1,
            amplitude: -400,
            waveLength: 400,
            segmentLength: 15,
          },
          {
            type: "SineWave",
            segmentLength: 1,
            segmentLength: 15,
          },
          {
            timeModifier: 2,
            lineWidth: 1,
            amplitude: -370,
            wavelength: 100,
            segmentLength: 15,
          },
          {
            timeModifier: 1,
            lineWidth: 1,
            amplitude: -500,
            wavelength: 350,
            segmentLength: 15,
          },
          {
            timeModifier: 0.5,
            lineWidth: 1,
            amplitude: -380,
            wavelength: 180,
            segmentLength: 15,
          },
          {
            timeModifier: 0.4,
            lineWidth: 1,
            amplitude: -300,
            wavelength: 200,
            segmentLength: 15,
          },
        ],

        // Called on window resize
        resizeEvent: function () {
          // var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
          // gradient.addColorStop(0.3, "rgba(48, 166, 255, 1)");
          // gradient.addColorStop(0.5, "rgba(22, 106, 240, 1)");
          // gradient.addColorStop(0.7, "rgba(22, 0, 157, 1)");

          // var index = -1;
          // var length = this.waves.length;
          // for (index = 0; index < length; index++) {
          //   this.waves[index].strokeStyle = gradient;
          // }

          this.waves.forEach(
            (wave) => (wave.strokeStyle = "rgba(22, 106, 240, 1)")
          );

          // Clean Up
        },
      });
      var waves2 = new SineWaves({
        el: document.getElementById("waves_2"),

        speed: SPEED,
        running: false,

        width: function () {
          return document
            .querySelector(".waves-wrapper")
            .getBoundingClientRect().width;
        },

        height: function () {
          return document
            .querySelector(".waves-wrapper")
            .getBoundingClientRect().height;
        },

        ease: "SineInOut",

        wavesWidth: "100%",

        waves: [
          {
            timeModifier: 3,
            lineWidth: 1,
            amplitude: -400,
            waveLength: 400,
            segmentLength: 15,
          },
          {
            type: "SineWave",
            segmentLength: 1,
            segmentLength: 15,
          },
          {
            timeModifier: 2,
            lineWidth: 1,
            amplitude: -370,
            wavelength: 100,
            segmentLength: 15,
          },
          {
            timeModifier: 1,
            lineWidth: 1,
            amplitude: -500,
            wavelength: 350,
            segmentLength: 15,
          },
          {
            timeModifier: 0.5,
            lineWidth: 1,
            amplitude: -380,
            wavelength: 180,
            segmentLength: 15,
          },
          {
            timeModifier: 0.4,
            lineWidth: 1,
            amplitude: -300,
            wavelength: 200,
            segmentLength: 15,
          },
        ],

        // Called on window resize
        resizeEvent: function () {
          // var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
          // gradient.addColorStop(0.3, "rgba(48, 166, 255, 1)");
          // gradient.addColorStop(0.5, "rgba(22, 106, 240, 1)");
          // gradient.addColorStop(0.7, "rgba(22, 0, 157, 1)");

          // var index = -1;
          // var length = this.waves.length;
          // for (index = 0; index < length; index++) {
          //   this.waves[index].strokeStyle = gradient;
          // }

          this.waves.forEach(
            (wave) => (wave.strokeStyle = "rgba(22, 106, 240, 1)")
          );

          // Clean Up
        },
      });

      // const tick = () => {
      //   waves1.update();
      //   waves2.update();

      //   console.log("tick");
      // };

      const handleWavesIntersection = (entries) => {
        entries.forEach(({ isIntersecting }) => {
          if (isIntersecting) {
            // interval = setInterval(tick, INTERVAL);
            waves1.running = true;
            waves2.running = true;
          } else {
            // if (interval) {
            //   clearInterval(interval);
            // }
            waves1.running = false;
            waves2.running = false;
          }
        });
      };

      const wavesObserver = new IntersectionObserver(handleWavesIntersection, {
        rootMargin: "20% 0px",
      });

      wavesObserver.observe(document.querySelector(".waves-wrapper"));
    }
  }

  // alan-btn
  {
    const ANIMATION_INTERVAL = 3000;
    const ANIMATION_STEPS = [
      "listening",
      "intermediate",
      "understood",
      "speaking",
    ];

    const allAlanBtn = document.querySelectorAll(".alan-btn");

    allAlanBtn.forEach((alanBtn) => {
      const state = {
        el: alanBtn,
        wrapper: alanBtn.closest(".alan-btn-wrapper"),

        size: null,
        btn: null,
        step: null,
        interval: null,
      };

      const updateSize = () => {
        state.size = String(
          Math.ceil(state.wrapper.getBoundingClientRect().width)
        );
      };
      const updateBtn = () => {
        state.btn = alanBtnFake({
          rootEl: state.el,
          position: "absolute",
          top: "0",
          left: "0",
          size: state.size,
        });
      };
      const updateStep = () => {
        state.step = 0;
      };

      const normalizeStep = () => {
        const stepsCount = ANIMATION_STEPS.length;

        if (state.step >= stepsCount) {
          state.step %= stepsCount;
        }
      };
      const animateBtn = () => {
        console.log("animateBtn", state);

        normalizeStep();

        state.btn.switchState(ANIMATION_STEPS[state.step++]);
      };
      const updateInterval = () => {
        if (state.interval) {
          clearInterval(state.interval);
        }

        animateBtn();
        state.interval = setInterval(animateBtn, ANIMATION_INTERVAL);
      };

      const update = () => {
        console.log("update", state);

        updateSize();
        updateBtn();
        updateStep();
        updateInterval();
      };

      update();
      window.addEventListener("load", update);
      window.addEventListener("resize", update);
    });
  }
});
