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
})();

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
});
icons.forEach(i => i.addEventListener('mouseover', glitchOnHover));
icons.forEach(i => i.addEventListener('mouseleave', glitchOnHover));

// Console Message
const styles = [
  , 'color: black'
  , 'display: block'
  , 'background: linear-gradient(90deg, #f368e0 0%, #e8198b 100%)'
  , 'line-height: 50px'
  , 'text-align: center'
  , 'font-size: 20px'
  , 'font-weight: bold'
  , 'font-family:monospace'
].join(';');

console.log('%c Hello! I\'m Eszter ', styles);

console.log('%c Feel free to drop me a message! ⇒ hello@eszter.dev'
  , 'font-family:monospace;font-size: 12px;');
