const ParentEl = document.querySelector(".header");

let state = false;

const handleOpenMobileNav = e => {
	const navBtn = e.target.closest(".header__mobile__nav-icon");
	console.log(navBtn);
	if (!navBtn) return;
	const mobileNav = ParentEl.querySelector(".header__mobile__nav");
	mobileNav.classList.toggle("show");
};

ParentEl.addEventListener("click", handleOpenMobileNav);
