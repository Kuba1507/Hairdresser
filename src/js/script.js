const mobileNav = document.querySelector(".nav-mobile__items");
const burgerBtn = document.querySelector(".hamburger");

const addTypingEffect = () => {
	const screenWidth = window.innerWidth;
	const typingSpan = document.querySelector(".auto-type");

	if (screenWidth >= 992) {
		typingSpan.classList.add("auto-type");
		const typed = new Typed(".auto-type", {
			strings: ["niepowtarzalny", "niezwykły", "osobliwy", "oryginalny"],
			startDelay: 3000,
			typeSpeed: 150,
			backSpeed: 150,
			loop: true,
		});
	}
};

const handleNav = () => {
	mobileNav.classList.toggle("show-nav");
	burgerBtn.classList.toggle("is-active");
};

burgerBtn.addEventListener("click", handleNav);
document.addEventListener("DOMContentLoaded", addTypingEffect);
