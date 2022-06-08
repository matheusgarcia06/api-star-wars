const results = document.querySelector('#results');

async function asyncFetch(value) {
	const res = await fetch(`https://swapi.dev/api/${value}`);
	const data = await res.json();
	displayResults(data, value);
}

function displayResults(data, value) {
	let output = '';
	console.log(data);
	if (value === 'films') {
		data.results.forEach(
			(item) =>
				(output += `
				<div class="card">
					<h4 class="card-title text-center">${item.title}</h4>
					<div class="card-content"> 
						<span>Producer: </span>${item.producer}<br>
						<span>Director: </span>${item.director}<br>
						<span>Release Date: </span>${item.release_date}<br>
					</div>
				</div>
			`)
		);
	}

	if (value === 'people') {
		data.results.forEach(
			(item) =>
				(output += `
				<div class="card">
					<h4 class="card-title text-center">${item.name}</h4>
					<div class="card-content"> 
						<span>Height: </span>${item.height}<br>
						<span>Birth Year: </span>${item.birth_year}<br>
						<span>Skin Color: </span>${item.skin_color}<br>
					</div>
				</div>
			`)
		);
	}

	if (value === 'vehicles') {
		data.results.forEach(
			(item) =>
				(output += `
				<div class="card">
					<h4 class="card-title text-center">${item.name}</h4>
					<div class="card-content"> 
						<span>Capacity: </span>${item.cargo_capacity} kg<br>
						<span>Model: </span>${item.model}<br>
						<span>Manufacture: </span>${item.manufacturer}<br>
						<span>Vehicle Class: </span>${item.vehicle_class}<br>
						
					</div>
				</div>
			`)
		);
	}

	results.innerHTML = output;
}

document.querySelector('.buttons').addEventListener('click', (e) => {
	asyncFetch(e.target.textContent.toLowerCase());
});
