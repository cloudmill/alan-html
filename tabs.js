$(() => {
  // init videos
  var videos = document.querySelectorAll(
    ".video-tab-1 video, .video-tab-2 video, .video-tab-3 video, .video-tab-4 video"
  );

  function initVideos() {
    try {
      videos.forEach((video) => {
        video.currentTime = 0;
      });
    } catch {}
  }

  initVideos();

  // init sound on/off
  $("#videoonclick, #videoonclick-2, #videoonclick-3, #videoonclick-4").each(
    function () {
      $(this).find(".mute_bt_off").css("opacity", 0);
      $(this).find(".mute_bt").css("opacity", 1);
    }
  );

  // handle tab switch
  var curMuteAll = document.querySelector(".mute_all.w--current");

  $(window).click(function (e) {
    var muteAll = e.target.closest(".mute_all");

    if (muteAll) {
      if (muteAll !== curMuteAll) {
        // init videos
        initVideos();

        // sound on/off reset
        $(
          "#videoonclick, #videoonclick-2, #videoonclick-3, #videoonclick-4"
        ).each(function () {
          $(this).find(".mute_bt_off").css("opacity", 0);
          $(this).find(".mute_bt").css("opacity", 1);
        });

        // mute media
        document
          .querySelectorAll("body video, body audio")
          .forEach((media) => (media.muted = true));

        curMuteAll = muteAll;
      }
    }
  });

  // handle sound on/off click
  $("#videoonclick, #videoonclick-2, #videoonclick-3, #videoonclick-4").click(
    function () {
      if (+$(this).find(".mute_bt_off").css("opacity") === 0) {
        $(this).find(".mute_bt_off").css("opacity", 1);
        $(this).find(".mute_bt").css("opacity", 0);
      } else {
        $(this).find(".mute_bt_off").css("opacity", 0);
        $(this).find(".mute_bt").css("opacity", 1);
      }
    }
  );

  // sound on/off video control
  var video1 = $(".video-tab-1 video");

  video1.prop("muted", true);

  $("#videoonclick").click(function () {
    if (video1.prop("muted")) {
      video1.prop("muted", false);
    } else {
      video1.prop("muted", true);
    }
  });

  var video2 = $(".video-tab-2 video");

  video2.prop("muted", true);

  $("#videoonclick-2").click(function () {
    if (video2.prop("muted")) {
      video2.prop("muted", false);
    } else {
      video2.prop("muted", true);
    }
  });

  var video3 = $(".video-tab-3 video");

  video3.prop("muted", true);

  $("#videoonclick-3").click(function () {
    if (video3.prop("muted")) {
      video3.prop("muted", false);
    } else {
      video3.prop("muted", true);
    }
  });

  var video4 = $(".video-tab-4 video");

  video4.prop("muted", true);

  $("#videoonclick-4").click(function () {
    if (video4.prop("muted")) {
      video4.prop("muted", false);
    } else {
      video4.prop("muted", true);
    }
  });
});
