(() => {
  const DESIGN_WIDTH = 750;
  const DESIGN_HEIGHT = 1626;
  function fitMobileBoard() {
    const board = document.querySelector('.artboard, .screen');
    if (!board) return;
    // 宽、高各自映射到当前可视区：设计稿完整铺满一屏，页面本身不能滚动。
    const viewportHeight = window.visualViewport?.height || window.innerHeight;
    const scaleX = window.innerWidth / DESIGN_WIDTH;
    const scaleY = viewportHeight / DESIGN_HEIGHT;
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.margin = '0';
    document.body.style.minWidth = '0';
    document.body.style.overflowX = 'hidden';
    document.body.style.width = '100vw';
    document.body.style.height = `${viewportHeight}px`;
    document.body.style.minHeight = `${viewportHeight}px`;
    document.body.style.overflow = 'hidden';
    board.style.marginLeft = `calc(50vw - ${DESIGN_WIDTH / 2}px)`;
    board.style.marginRight = '0';
    board.style.transformOrigin = 'top center';
    board.style.transform = `scale(${scaleX}, ${scaleY})`;
    board.style.marginBottom = `${-DESIGN_HEIGHT * (1 - scaleY)}px`;
  }
  fitMobileBoard();
  window.addEventListener('resize', fitMobileBoard, { passive: true });
  window.visualViewport?.addEventListener('resize', fitMobileBoard, { passive: true });
})();
