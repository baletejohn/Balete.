const openBtn = document.getElementById('openBtn');
const cover = document.getElementById('cover');
const messageBox = document.getElementById('messageBox');

if (openBtn && cover && messageBox) {
  openBtn.addEventListener('click', () => {
    cover.style.display = 'none';
    messageBox.style.display = 'block';
    messageBox.classList.remove('hidden');
  });
}
