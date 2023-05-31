document.addEventListener('DOMContentLoaded', function() {
  // Hamburger button
  const toggleButton = document.querySelector('.toggle-button');
  const navbarLinks = document.querySelector('.navbar-links');


  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });

  // Links
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const button3 = document.getElementById('button3');
  const button4 = document.getElementById('button4');
  const button5 = document.getElementById('button5');
  const button6 = document.getElementById('button6');

  button1.addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://github.com/schnattiba1/schnattiba1.github.io/tree/main/coffee-place', '_blank');
    navbarLinks.classList.remove('active');
  });

  button2.addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://schnattiba1.github.io/coffee-place/coffee-place.html', '_blank');
    navbarLinks.classList.remove('active');
  });

  button3.addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://github.com/schnattiba1/schnattiba1.github.io/tree/main/pokemon-club', '_blank');
    navbarLinks.classList.remove('active');
  });

  button4.addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://schnattiba1.github.io/pokemon-club/pokemon.htm', '_blank');
    navbarLinks.classList.remove('active');
  });

  button5.addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://github.com/schnattiba1/schnattiba1.github.io/tree/main/tea-cozy', '_blank');
    navbarLinks.classList.remove('active');
  });

  button6.addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://schnattiba1.github.io/tea-cozy/tea-cozy.html', '_blank');
    navbarLinks.classList.remove('active');
  });
});
