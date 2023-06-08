var images =[
    "img/pexels-elias-tigiser-1083342.jpg",
    "img/pexels-elias-tigiser-1090745.jpg",
    "img/pexels-enakshi-mukhopadhyaya-441663.jpg",
    "img/pexels-pixabay-209807.jpg",
    "img/03-paisajes-en-movimiento.gif",
    "img/04-paisajes-en-movimiento.gif",
    "img/Captura.PNG"
];
// Variable para llevar el registro de la imagen actual
var currentImageIndex = 0;

// Obtener elementos del DOM
var imageElement = document.querySelector(".imagen");
var previousButton = document.querySelector(".previous-button");
var nextButton = document.querySelector(".next-button");

// Función para actualizar la imagen mostrada
function updateImage() {
  var currentImage = images[currentImageIndex];
  imageElement.src = currentImage;
}

// Evento de clic en el botón "anterior"
previousButton.addEventListener("click", function() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  updateImage();
});

// Evento de clic en el botón "siguiente"
nextButton.addEventListener("click", function() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  updateImage();
});

// Actualizar la imagen inicial
updateImage();
// Obtener el botón por su ID
const toggleButton = document.getElementById('toggle-button');

// Agregar un manejador de eventos para el clic en el botón
toggleButton.addEventListener('click', function () {
  const sliderContainer = document.querySelector('.slider-container');
  const galleryContainer = document.querySelector('.gallery-container');

  // Verificar el estado actual y cambiarlo
  if (sliderContainer.style.display === 'none') {
    // Mostrar el slider y ocultar la galería
    sliderContainer.style.display = 'block';
    galleryContainer.style.display = 'none';
    toggleButton.textContent = 'Ver vista galería de imágenes';
  } else {
    // Mostrar la galería y ocultar el slider
    sliderContainer.style.display = 'none';
    galleryContainer.style.display = 'block';
    toggleButton.textContent = 'Ver vista deslizador de imágenes';
  }
});

