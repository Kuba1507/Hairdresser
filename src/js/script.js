const mobileNav = document.querySelector(".nav-mobile__items");
const burgerBtn = document.querySelector(".hamburger");

const handleNav = () => {
	mobileNav.classList.toggle("show-nav");
	burgerBtn.classList.toggle("is-active");
};

burgerBtn.addEventListener("click", handleNav);
