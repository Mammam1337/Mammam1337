var audio = document.getElementById("waliza");
$("#clickme").click(function () {
  audio.play();
  $("#dc").show();
  document.getElementById("clickme").classList.toggle("hide");
});
$("#dc-name").click(function () {
  navigator.clipboard.writeText("Mammam_#7297");
  document.getElementById("copied").classList.toggle("hide");
  setTimeout(function () {
    document.getElementById("copied").classList.add("hide");
  }, 1500);
});
