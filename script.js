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
        console.log("alan-btn update");

        updateSize();
        updateBtn();
        updateStep();
        updateInterval();
      };

      const updated = debounce(update, 1000);

      updated();
      window.addEventListener("load", updated);
      window.addEventListener("resize", updated);
    });
  }
});
