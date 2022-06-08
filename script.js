const results = document.querySelector('#results');

function asyncFetch(value) {
	console.log(value);
}

document.querySelector('.buttons').addEventListener('click', (e) => {
	asyncFetch(e.target.textContent.trim().toLowerCase());
});
