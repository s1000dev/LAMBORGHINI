const swiper = new Swiper('.swiper', {
	loop: true,
	slidesPerView: 2,
	spaceBetween: 20,
	navigation: {
		nextEl: '.swiper-button-right',
		prevEl: '.swiper-button-left',
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		}
	}
});

// let map;

// function initMap() {
// 	map = new google.maps.Map(document.getElementById("map"), {
// 		center: { lat: 37.23198570237106, lng: -8.628314225575624 },
// 		zoom: 14,
// 	});
// }
// window.initMap = initMap;

// burger mobile menu
function burgerMenu() {
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const body = document.querySelector('body')
	burger.addEventListener('click', () => {
		if (!menu.classList.contains('active')) {
			menu.classList.add('active')
			burger.classList.add('active')
			body.classList.add('locked')
		} else {
			menu.classList.remove('active')
			burger.classList.remove('active')
			body.classList.remove('locked')
		}
	})
	// We set a breakpoint for navbar here
	window.addEventListener('resize', () => {
		if (window.innerWidth > 991.98) {
			menu.classList.remove('active')
			burger.classList.remove('active')
			body.classList.remove('locked')
		}
	})
}
burgerMenu()
