const track = document.querySelector('.track'),
      note = document.querySelector('#cover-note');
let index = Number(sessionStorage.getItem('redPacketCover') ?? 1),
    startX = 0, dragging = false;
const names = ['红色', '绿色', '橙色'];

function render() {
  track.style.transform = `translateX(${-index * 100}%)`;
  note.textContent = `已选择：${names[index]}红包封面（左右滑动或点击切换）`;
  sessionStorage.setItem('redPacketCover', String(index));
}

function start(e) {
  dragging = true;
  startX = (e.touches ? e.touches[0] : e).clientX;
  track.style.transition = 'none';
}

function end(e) {
  if (!dragging) return;
  const x = (e.changedTouches ? e.changedTouches[0] : e).clientX;
  if (x - startX > 45) index = Math.max(0, index - 1);
  if (x - startX < -45) index = Math.min(2, index + 1);
  dragging = false;
  track.style.transition = 'transform .28s ease';
  render();
}

track.addEventListener('touchstart', start, { passive: true });
track.addEventListener('touchend', end);
track.addEventListener('pointerdown', start);
track.addEventListener('pointerup', end);
track.addEventListener('click', e => {
  const image = e.target.closest('img');
  if (!image) return;
  index = [...track.children].indexOf(image);
  render();
});

render();
document.querySelector('#next').addEventListener('click', () => location.href = 'quantity.html');
