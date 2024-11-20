import { getRandomColor } from './utils';

export default function initApp() {
	const button = document.createElement('button');
	const body = document.body;

	button.className = 'button';
	button.textContent = 'Изменить цвет страницы';

	body.append(button);

	button.addEventListener('click', () => {
		body.style.backgroundColor = getRandomColor();
	});
}
