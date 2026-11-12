// Telefondaki ekranlar 3,5 saniyede bir değişir; noktalarla seçilebilir.
const resimler = [...document.querySelectorAll('.hero .screen img')];
const noktalar = document.querySelector('.dots');
let sira = 0, zamanlayici;
resimler.forEach((r, i) => {
  const b = document.createElement('button');
  b.setAttribute('aria-label', r.alt);
  b.addEventListener('click', () => { goster(i); baslat(); });
  noktalar.appendChild(b);
});
function goster(i) {
  sira = i;
  resimler.forEach((r, j) => r.classList.toggle('on', j === i));
  [...noktalar.children].forEach((b, j) => b.classList.toggle('on', j === i));
}
function baslat() {
  clearInterval(zamanlayici);
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  zamanlayici = setInterval(() => goster((sira + 1) % resimler.length), 3500);
}
goster(0);
baslat();
