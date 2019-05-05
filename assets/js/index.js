import '../sass/index.scss';
import { log } from 'util';

(function() {
  // Fix for window resize on mobile
  let originalHeight = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${originalHeight}px`);
  window.addEventListener('resize touchmove', () => {
    let currentHeight = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${currentHeight}px`);
  });

  // Glitch effect
  const logo = document.querySelector('.logo');
  const text = document.querySelector('h1');
  const icons = document.querySelectorAll('i');

  function glitchOnHover(e) {
    if (e.type == 'mouseover') text.classList.add('glitched');
    if (e.type == 'mouseleave') text.classList.remove('glitched');
  }

  ['mouseover', 'mouseleave'].forEach(e => {
    logo.addEventListener(e, glitchOnHover);
  })
  icons.forEach(i => i.addEventListener('mouseover', glitchOnHover));
  icons.forEach(i => i.addEventListener('mouseleave', glitchOnHover));
})();

// ASCII Console Art
console.log(`%c

       _/_/_/_/    _/_/_/  _/_/_/_/_/  _/_/_/_/_/  _/_/_/_/  _/_/_/
      _/        _/              _/        _/      _/        _/    _/
    _/_/_/      _/_/        _/          _/      _/_/_/    _/_/_/
  _/              _/    _/            _/      _/        _/    _/
_/_/_/_/  _/_/_/    _/_/_/_/_/      _/      _/_/_/_/  _/    _/


Drop me a message! hello@eszter.dev`, "font-family:monospace");
