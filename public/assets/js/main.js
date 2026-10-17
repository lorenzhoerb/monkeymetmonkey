// Minimal slideshow: prev/next buttons, swipe, counter. Everything else is plain HTML/CSS.
(function () {
  var box = document.querySelector('.slideshow');
  if (!box) return;
  var slides = box.querySelectorAll('.slide');
  var count = box.querySelector('.count');
  var i = 0;

  function show(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach(function (s, k) { s.classList.toggle('active', k === i); });
    count.textContent = (i + 1) + '/' + slides.length;
  }

  box.querySelector('.prev').addEventListener('click', function () { show(i - 1); });
  box.querySelector('.next').addEventListener('click', function () { show(i + 1); });

  var x0 = null;
  box.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) show(i + (dx < 0 ? 1 : -1));
    x0 = null;
  });
})();
