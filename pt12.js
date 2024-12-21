let audio = document.getElementById("player");

var engegat = false;
var waves = document.querySelectorAll(".wave");

function animacioFuncionalitat(element){
    triggerAnimation(element);

    if(element.id == "play"){
        engegarAudio();
    }
    else{
        pausarAudio();
    }
}

function engegarAudio() {
  engegat = true;

  if (audio.paused && engegat) {
    // Si el audio está pausado, lo reproducimos y añadimos la animación

    audio.play();
    for (var i = 0; i < waves.length; i++) {
      waves[i].classList.add("playing");
    }
  } else {
  }
}

function pausarAudio() {
  if (engegat) {
    audio.pause();
    for (var i = 0; i < waves.length; i++) {
      waves[i].classList.remove("playing");
    }
  }

  engegat = false;
}

function cambiarVolumen() {
  // Cambia el volumen del audio según el valor del slider
  audio.volume = volumeSlider.value;
}

function triggerAnimation(element) {
  // Agrega la clase para la animación
  element.classList.add("animate");

  // Espera que termine la animación y elimina la clase
  setTimeout(() => {
    element.classList.remove("animate");
  }, 300); // Debe coincidir con la duración de la transición en CSS (0.3s)
}