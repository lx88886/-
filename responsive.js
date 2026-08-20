(() => {
  const DESIGN_WIDTH = 750;
  const DESIGN_HEIGHT = 1626;
  const fit = () => {
    const board = document.querySelector('.artboard, .screen');
    if (!board) return;
    const scale = window.innerWidth / DESIGN_WIDTH;
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.cssText += ';margin:0;display:block;overflow-x:hidden;min-width:0;';
    board.style.marginLeft = `calc(50vw - ${DESIGN_WIDTH / 2}px)`;
    board.style.marginRight = '0';
    board.style.transform = `scale(${scale})`;
    board.style.transformOrigin = 'top center';
    board.style.marginBottom = `${-(DESIGN_HEIGHT * (1 - scale))}px`;
  };
  fit();
  addEventListener('resize', fit, { passive: true });
})();

