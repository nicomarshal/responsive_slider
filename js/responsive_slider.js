const d = document;

export function responsiveSlider1() {
	const $nextBtn = d.querySelector(".slider1 .slider-btns .next");
	const $prevBtn = d.querySelector(".slider1 .slider-btns .prev");
	const $slides = d.querySelectorAll(".slider1 .slider-slide");

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

export function responsiveSlider2() {
	const $nextBtn = d.querySelector(".slider2 .slider-btns .next");
	const $prevBtn = d.querySelector(".slider2 .slider-btns .prev");
	const $slides = d.querySelectorAll(".slider2 .slider-slide");
	const $images = d.querySelectorAll(".slider2 img");
	console.log($images);

	//Almacenamos posiciones originales
	let images = [];
	for (let m = 0; m < $slides.length; m++) {
		images.push($images[m]);
	}
	console.log(images);

	//Delegación de eventos.
	d.addEventListener("click", e => {
		if (e.target === $prevBtn) {
			e.preventDefault();

			let start = images.shift();
			images.push(start);
			console.log(images);

			for (let j = 0; j < $slides.length; j++) {
				let img = images[j].outerHTML;
				$slides[j].innerHTML = img;
			}

		}

		if (e.target === $nextBtn) {
			e.preventDefault();
			let end = images.pop();
			images.unshift(end);
			console.log(images);

			for (let j = $slides.length; j > 0; j--) {
				let img = images[j-1].outerHTML;
				$slides[j-1].innerHTML = img;
			}
		}
	})
}