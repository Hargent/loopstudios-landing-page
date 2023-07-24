const ParentEl = document.querySelector(".header");
const dateEl = document.querySelector(".footer__year");

const handleOpenMobileNav = e => {
	const navBtn = e.target.closest(".header__mobile__nav-icon");
	if (!navBtn) return;
	console.log(navBtn);
	const mobileNav = ParentEl.querySelector(".mobile__menu");
	mobileNav.classList.toggle("toggle-display");
};

ParentEl.addEventListener("click", handleOpenMobileNav);

// year generation
const date = new Date();
const year = date.getFullYear();
