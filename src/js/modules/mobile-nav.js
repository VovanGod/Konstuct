function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav-active');
		navBtn.classList.toggle('mobile-nav-btn-active');
		document.body.classList.toggle('no-scroll');
	};
}

const hrefNav = document.querySelectorAll('.nav-href');
const navBtn = document.querySelector('.mobile-nav-btn');
const nav = document.querySelector('.mobile-nav');

hrefNav.forEach(function(item) {
	item.addEventListener('click', function() {
		nav.classList.toggle('mobile-nav-active');
		navBtn.classList.toggle('mobile-nav-btn-active');
		document.body.classList.toggle('no-scroll');
	});
});

export default mobileNav;