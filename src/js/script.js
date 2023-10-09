const navItems = document.querySelector(".navbar__items");
const burgerBtn = document.querySelector(".hamburger");

const handleNav = () => {
	navItems.classList.toggle("show-nav");
	burgerBtn.classList.toggle("is-active");
};

burgerBtn.addEventListener("click", handleNav);
