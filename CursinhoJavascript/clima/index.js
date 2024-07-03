const searchBar = document.getElementById('search-bar');
const form = document.getElementById('form');
const card = document.getElementById('card');
const apiKey = 'API KEY AQUI';

form.addEventListener('submit', async (event) => {
	event.preventDefault();

	try {
		const data = await fetchWeather(searchBar.value);
		showData(data);
	} catch (error) {
		console.error(error);
		revealError(error);
	}
});

async function fetchWeather(city) {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`
	);
	if (response.status === 404) {
		throw new Error('Cidade não encontrada');
	}
	if (!response.ok) {
		throw new Error('Ocorreu um erro durante a busca');
	}
	return await response.json();
}

function showData(data) {
	card.innerHTML = '';

	const cityDisplay = document.createElement('h1');
	const weatherIconDisplay = document.createElement('img');
	const descriptionDisplay = document.createElement('span');
	const tempDisplay = document.createElement('span');
	const tempMinDisplay = document.createElement('span');
	const tempMaxDisplay = document.createElement('span');
	const feelsLikeDisplay = document.createElement('span');
	const humidityDisplay = document.createElement('span');
	const windSpeedDisplay = document.createElement('span');

	const information = document.createElement('article');
	information.id = 'information';

	cityDisplay.textContent = data.name;
	weatherIconDisplay.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
	weatherIconDisplay.alt = 'ícone clima';
	descriptionDisplay.textContent = data.weather[0].description;
	tempDisplay.textContent = `${data.main.temp.toFixed(2)}°C`;
	tempMinDisplay.textContent = `${data.main.temp_min.toFixed(2)}°C`;
	tempMaxDisplay.textContent = `${data.main.temp_max.toFixed(2)}°C`;
	feelsLikeDisplay.textContent = `${data.main.feels_like.toFixed(2)}°C`;
	humidityDisplay.textContent = `${data.main.humidity.toFixed(2)}%`;
	windSpeedDisplay.textContent = `${data.wind.speed.toFixed(2)}m/s`;

	cityDisplay.id = 'title';
	weatherIconDisplay.id = 'icon';
	descriptionDisplay.id = 'description';
	tempDisplay.classList.add('info');
	tempMinDisplay.classList.add('info');
	tempMaxDisplay.classList.add('info');
	feelsLikeDisplay.classList.add('info');
	humidityDisplay.classList.add('info');
	windSpeedDisplay.classList.add('info');

	tempDisplay.dataset.weatherProperty = 'Temperatura';
	tempMinDisplay.dataset.weatherProperty = 'Temperatura Mínima';
	tempMaxDisplay.dataset.weatherProperty = 'Temperatura Máxima';
	feelsLikeDisplay.dataset.weatherProperty = 'Sensação Térmica';
	humidityDisplay.dataset.weatherProperty = 'Umidade';
	windSpeedDisplay.dataset.weatherProperty = 'Velocidade do Vento';

	card.append(cityDisplay);
	card.append(weatherIconDisplay);
	card.append(descriptionDisplay);
	card.append(information);
	information.append(tempDisplay);
	information.append(tempMinDisplay);
	information.append(tempMaxDisplay);
	information.append(feelsLikeDisplay);
	information.append(humidityDisplay);
	information.append(windSpeedDisplay);
}

function revealError(error) {
	const message = error.message;
	card.innerHTML = `<h1>${message}</h1>`;
}
