document.addEventListener('DOMContentLoaded', function() {
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    const img = document.querySelector('#img-container img');
  
    const imgSource = [
      'famous-streets-in-Seoul.jpg',
      'istockphoto-1203001368-612x612.jpg',
      'fa5a9dc08783dfd964c0d034fa5d5480.jpg',
      'flatten.webp'
    ];
  
    let currentIndex = 0;
  
    function switchToNextImage() {
      currentIndex++;
  
      if (currentIndex >= imgSource.length) {
        currentIndex = 0;
      }
  
      img.src = imgSource[currentIndex];
    }
  
    function switchToPreviousImage() {
      currentIndex--;
  
      if (currentIndex < 0) {
        currentIndex = imgSource.length - 1;
      }
  
      img.src = imgSource[currentIndex];
    }
  
    arrowRight.addEventListener('click', switchToNextImage);
    arrowLeft.addEventListener('click', switchToPreviousImage);
  });
  