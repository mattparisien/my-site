let colors = ["#eaadc0", "#db602a", "black", "#e54941", "#246be5" ]
let backgroundColors = ["#836ec4", "#ad9c93", "#edde4b", "#e0adc8", "#dee0d1" ]
let i = 0
function changeColors() {

  document.querySelector("body").style.backgroundColor = backgroundColors[i]
  document.querySelector("body").style.color = colors[i]
    i = (i++) % color.length;
  }

  setInterval(changeColors, 5000)