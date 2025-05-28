(function () {
  const scrollContainer = document.getElementById('smooth-scroll');

  let targetScroll = 0;
  let currentScroll = 0;
  const ease = 0.05;
  function setBodyHeight() {
    document.body.style.height = scrollContainer.scrollHeight + 'px';
  }

  function smoothScroll() {
    currentScroll += (targetScroll - currentScroll) * ease;
    scrollContainer.style.transform = `translateY(-${currentScroll}px)`;
    requestAnimationFrame(smoothScroll);
  }

  window.addEventListener(
    'wheel',
    (e) => {
      e.preventDefault();

      const maxScroll = scrollContainer.scrollHeight - window.innerHeight;
      targetScroll += e.deltaY;
      targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));
    },
    { passive: false }
  );

  window.addEventListener('resize', setBodyHeight);
  window.addEventListener('load', () => {
    setBodyHeight();
    targetScroll = window.scrollY;
    smoothScroll();
  });
})();
