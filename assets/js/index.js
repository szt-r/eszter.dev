import '../sass/index.scss';

console.log('JS Ready');

(function() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  var originalHeight = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', originalHeight + 'px');

  // We listen to the resize event
  window.addEventListener('resize', function() {
    if (budgetForm.classList.contains('open')) {
      document.documentElement.style.setProperty('--vh', originalHeight + 'px');
    } else {
      // We execute the same script as before
      var currentHeight = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', currentHeight + 'px');
    }
  });
})();
