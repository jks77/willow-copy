const closeButton = document.querySelector('.close-nav');
const openButton = document.querySelector('.open-nav');
const nav = document.querySelector('nav');

openButton.addEventListener('click', () => {
	nav.classList.add('navigation-open');
	openButton.classList.remove('show');
	closeButton.classList.add('show');
});

closeButton.addEventListener('click', () => {
	nav.classList.remove('navigation-open');
	openButton.classList.add('show');
	closeButton.classList.remove('show');
});
