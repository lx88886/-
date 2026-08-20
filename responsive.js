(() => {
  const DESIGN_WIDTH = 750;
  const DESIGN_HEIGHT = 1626;
  function fitMobileBoard() {
    const board = document.querySelector('.artboard, .screen');
    if (!board) return;
    // 同时受宽度与实际可视高度约束，避免移动端必须纵向滚动才能看完整页。
    const viewportHeight = window.visualViewport?.height || window.innerHeight;
    const scale = Math.min(
      window.innerWidth / DESIGN_WIDTH,
      viewportHeight / DESIGN_HEIGHT,
      1
    );
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

