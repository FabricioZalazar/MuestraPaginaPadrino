const inner = document.querySelector('.carousel-inner');
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');

let index = 0;
let intervalId;

function showNextImage() {
  index = (index + 1) % items.length;
  inner.style.transform = `translateX(-${index * 100}%)`;
}

function startCarousel() {
  intervalId = setInterval(showNextImage, 3000);
}

function stopCarousel() {
  clearInterval(intervalId);
}

startCarousel();

carousel.addEventListener('mouseenter', stopCarousel);
carousel.addEventListener('mouseleave', startCarousel);

//Menu Hamburguesa

	document.addEventListener('DOMContentLoaded', () => {
		const toggle = document.querySelector('.nav-toggle');
		const navLinks = document.querySelector('.nav-links');

		let menuOpen = false;

		toggle.addEventListener('click', () => {
			if (!menuOpen) {
				navLinks.classList.add('show');
				navLinks.classList.remove('hide');
				menuOpen = true;
			} else {
				navLinks.classList.remove('show');
				navLinks.classList.add('hide');

				// Esperá a que termine la animación para ocultar
				setTimeout(() => {
					navLinks.classList.remove('hide');
					menuOpen = false;
				}, 200); // igual al tiempo de fadeOut
			}
		});
	});