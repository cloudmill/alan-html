
var waves = new SineWaves({
  el: document.getElementById("waves_2"),

  speed: 3,

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
