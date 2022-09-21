const d = document;

export default function responsiveSlider() {
	const $nextBtn = d.querySelector(".slider-btns .next");
	const $prevBtn = d.querySelector(".slider-btns .prev");
	const $slides = d.querySelectorAll(".slider-slide");

	let i = 0;
	//Delegación de eventos.
	d.addEventListener("click", e => {
		if (e.target === $prevBtn) {
			e.preventDefault();
			$slides[i].classList.remove("active");
			i--;

			if (i < 0) {
				i = $slides.length - 1;
			}

			$slides[i].classList.add("active");
		}

		if (e.target === $nextBtn) {
			e.preventDefault();
			$slides[i].classList.remove("active");
			i++;

			if (i >= $slides.length) {
				i = 0;
			}

			$slides[i].classList.add("active");
		}
	});
}