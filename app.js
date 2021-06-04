let mouseCursor = document.querySelector('.custom-cursor');
let anchors = document.querySelectorAll('a');

window.addEventListener('mousemove', cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

anchors.forEach((link) => {
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add('link-grow');
  });
  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('link-grow');
  });
});
