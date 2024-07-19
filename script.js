var home_c = document.getElementById('home-contents');
var eaten_c = document.getElementById('eaten-contents');
var ezos_c = document.getElementById('ezos-contents');
var profile_c = document.getElementById('profile-contents');

var home_t = document.getElementById('home-tab');
var eaten_t = document.getElementById('eaten-tab');
var ezos_t = document.getElementById('ezos-tab');
var profile_t = document.getElementById('profile-tab');

home_t.addEventListener("click", function () {
    home_c.style.display = "block";
    eaten_c.style.display = "none";
    ezos_c.style.display = "none";
    profile_c.style.display = "none";
  });

eaten_t.addEventListener("click", function () {
    home_c.style.display = "none";
    eaten_c.style.display = "block";
    ezos_c.style.display = "none";
    profile_c.style.display = "none";
  });

ezos_t.addEventListener("click", function () {
    home_c.style.display = "none";
    eaten_c.style.display = "none";
    ezos_c.style.display = "block";
    profile_c.style.display = "none";
  });

profile_t.addEventListener("click", function () {
    home_c.style.display = "none";
    eaten_c.style.display = "none";
    ezos_c.style.display = "none";
    profile_c.style.display = "block";
  });