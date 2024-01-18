document.addEventListener("DOMContentLoaded", function () {
    var controller = new ScrollMagic.Controller();
    var fadeElements = document.querySelectorAll('.fade-element');
    var videos = document.querySelectorAll(".grid video");
  
    function handleVideoClick(video) {
      videos.forEach(function (v) {
        if (v !== video) {
          v.pause();
        }
      });
  
      video.classList.toggle("enlarged");  
      video.controls = !video.controls;
  
      var rect = video.getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.scrollY - window.innerHeight / 2 + rect.height / 2,
        behavior: "smooth"
      });
    }
  
    function handleClearButtonClick(video) {
      video.classList.remove("enlarged");  
      video.controls = false;
    }
  
    videos.forEach(function (video) {
      video.addEventListener("click", function () {
        handleVideoClick(video);
      });
    });
  
    var clearButtons = document.querySelectorAll(".clear-button");
    clearButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var video = button.closest(".grid").querySelector("video");
        handleClearButtonClick(video);
      });
    });
  
    fadeElements.forEach(function (element) {
      new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: 0.6,
        reverse: true
      })
        .setTween(gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration: 1.4 }))
        .addTo(controller);
    });
  });
  