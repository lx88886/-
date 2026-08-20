(() => {
  const fit = () => {
    const board = document.querySelector('.artboard, .screen');
    if (!board) return;
    const scale = Math.min(window.innerWidth / 750, 1);
    board.style.transform = `scale(${scale})`;
    board.style.transformOrigin = 'top center';
    board.style.marginBottom = `${-1626 * (1 - scale)}px`;
    document.body.style.overflowX = 'hidden';
  };
  fit();
  addEventListener('resize', fit, { passive: true });
})();

