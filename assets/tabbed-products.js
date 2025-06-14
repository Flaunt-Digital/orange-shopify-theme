document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tabbed-product-tab');
  const grids = document.querySelectorAll('.tabbed-product-grid');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const selectedTab = tab.dataset.tab;

      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      grids.forEach((grid) => {
        grid.classList.toggle('hidden', grid.dataset.tab !== selectedTab);
      });
    });
  });
});
