document.addEventListener('DOMContentLoaded', function() {
  // Hamburger button
  const toggleButton = document.querySelector('.toggle-button');
  const navbarLinks = document.querySelector('.navbar-links');


  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });
  
  var dataHref = document.querySelectorAll('button[data-href]');

  for (let i = 0; i < dataHref.length; i++) {
    dataHref[i].addEventListener('click', function(event) {
      event.preventDefault();
      navbarLinks.classList.remove('active');
      const url = this.getAttribute('data-href');
      if (url) {
        window.open(url, '_blank');
      }
    });
  }
});
