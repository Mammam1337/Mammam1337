var audio = document.getElementById("waliza");
$("#clickme").click(function () {
  audio.play();
  $("#dc").show();
  document.getElementById("clickme").classList.toggle("hide");
});
$("#dc-name").click(function () {
  navigator.clipboard.writeText("! Majek_PL#1337");
  document.getElementById("copied").classList.toggle("hide");
  setTimeout(function () {
    document.getElementById("copied").classList.add("hide");
  }, 1500);
});
