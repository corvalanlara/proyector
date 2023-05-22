document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

function returnAnimal(nombre) {
    let lista = { vaca: '🐄', gallina: '🐓', cerdo: '🐖', llama: '🦙', caballo: '🐎', oveja: '🐑', carnero: '🐏'};
    if (nombre) {
        return lista[nombre];
    } else {
        let keys = Object.keys(lista);
        let random = keys[Math.floor(Math.random() * keys.length)];
        return lista[random];
    }
}

function changeAnimal(nombre) {
    let animal = document.getElementById('animal');
    animal.innerHTML = returnAnimal(nombre);
}

let animal = document.getElementById('animal');
animal.innerHTML = returnAnimal();

let vaca = document.getElementById('vaca');
vaca.addEventListener('click', function () { changeAnimal('vaca'); });

let gallina = document.getElementById('gallina');
gallina.addEventListener('click', function() { changeAnimal('gallina'); });

let caballo = document.getElementById('caballo');
caballo.addEventListener('click', function () { changeAnimal('caballo'); });

let cerdo = document.getElementById('cerdo');
cerdo.addEventListener('click', function () { changeAnimal('cerdo'); });

let llama = document.getElementById('llama');
llama.addEventListener('click', function () { changeAnimal('llama'); });

let oveja = document.getElementById('oveja');
oveja.addEventListener('click', function () { changeAnimal('oveja'); });

let carnero = document.getElementById('carnero');
carnero.addEventListener('click', function () { changeAnimal('carnero') });
