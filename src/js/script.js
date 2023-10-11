const mobileNav = document.querySelector(".nav-mobile__items");
const navbar = document.querySelector(".nav-desktop");
const burgerBtn = document.querySelector(".hamburger");
const galleryImages = document.querySelectorAll(".gallery-img");
const fullImg = document.querySelector(".full-img");
const changingImg = document.querySelector(".changing-img");
const closeFullImgButton = document.querySelector(".closing-x");

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

const closeNav = () => {
	mobileNav.classList.remove("show-nav");
	burgerBtn.classList.remove("is-active");
};

const openFullImage = (e) => {
	const clickedImageSrc = e.target.getAttribute("src");
	changingImg.setAttribute("src", clickedImageSrc);
	fullImg.style.display = "flex";
};

const closeFullImage = () => {
	fullImg.style.display = "none";
};

document.addEventListener("DOMContentLoaded", addTypingEffect);
burgerBtn.addEventListener("click", handleNav);
mobileNav.addEventListener("click", closeNav);
galleryImages.forEach((image) => {
	image.addEventListener("click", openFullImage);
});
closeFullImgButton.addEventListener("click", closeFullImage);
