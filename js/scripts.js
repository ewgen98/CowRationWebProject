var sliderFormat = document.getElementById("slider-format");

noUiSlider.create(sliderFormat, {
  direction: "rtl",
  orientation: "vertical",
  start: [0],
  step: 1,
  range: {
    min: [0],
    max: [100]
  },
  format: {
    to: function(value) {
      return value + " BYN";
    },
    from: function(value) {
      return value.replace("BYN", "");
    }
  },
  pips: {
    mode: "range",
    density: 3
  }
});

var inputFormat = document.getElementById("input-format");

sliderFormat.noUiSlider.on("update", function(values, handle) {
  inputFormat.value = values[handle];
});

inputFormat.addEventListener("change", function() {
  sliderFormat.noUiSlider.set(this.value);
});

var sliderFormat1 = document.getElementById("slider-format1");

noUiSlider.create(sliderFormat1, {
  direction: "rtl",
  orientation: "vertical",
  start: [0],
  step: 1,
  range: {
    min: [0],
    max: [100]
  },
  format: {
    to: function(value) {
      return value + " BYN";
    },
    from: function(value) {
      return value.replace("BYN", "");
    }
  },
  pips: {
    mode: "range",
    density: 3
  }
});

var inputFormat1 = document.getElementById("input-format1");

sliderFormat1.noUiSlider.on("update", function(values, handle) {
  inputFormat1.value = values[handle];
});

inputFormat1.addEventListener("change", function() {
  sliderFormat1.noUiSlider.set(this.value);
});

var sliderFormat2 = document.getElementById("slider-format2");

noUiSlider.create(sliderFormat2, {
  direction: "rtl",
  orientation: "vertical",
  start: [0],
  step: 1,
  range: {
    min: [0],
    max: [100]
  },
  format: {
    to: function(value) {
      return value + " BYN";
    },
    from: function(value) {
      return value.replace("BYN", "");
    }
  },
  pips: {
    mode: "range",
    density: 3
  }
});

var inputFormat2 = document.getElementById("input-format2");

sliderFormat2.noUiSlider.on("update", function(values, handle) {
  inputFormat2.value = values[handle];
});

inputFormat2.addEventListener("change", function() {
  sliderFormat2.noUiSlider.set(this.value);
});
