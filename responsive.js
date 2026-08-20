(() => {
  const DESIGN_WIDTH = 750;
  const DESIGN_HEIGHT = 1626;
  function fitMobileBoard() {
    const board = document.querySelector('.artboard, .screen');
    if (!board) return;
    const scale = Math.min(window.innerWidth / DESIGN_WIDTH, 1);
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.margin = '0';
    document.body.style.minWidth = '0';
    document.body.style.overflowX = 'hidden';
    document.body.style.minHeight = `${DESIGN_HEIGHT * scale}px`;
    board.style.marginLeft = `calc(50vw - ${DESIGN_WIDTH / 2}px)`;
    board.style.marginRight = '0';
    board.style.transformOrigin = 'top center';
    board.style.transform = `scale(${scale})`;
    board.style.marginBottom = `${-DESIGN_HEIGHT * (1 - scale)}px`;
  }
  fitMobileBoard();
  window.addEventListener('resize', fitMobileBoard, { passive: true });
})();
