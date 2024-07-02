const searchBar = document.getElementById('search-bar');
const form = document.getElementById('form');
const card = document.getElementById('card');
const apiKey = '';

async function fetchWeather(city) {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`
	);
	if (!response.ok) {
		throw new Error('Ocorreu um erro durante a busca');
	}
	if (response.status === 404) {
		throw new Error('Erro 404: Cidade não encontrada');
	}
	return await response.json();
}

async function showData(data) {
	const city = data.name;
	const temp = data.main.temp;
	const tempMin = data.main.temp_min;
	const tempMax = data.main.temp_max;
	const feelsLike = data.main.feels_like;
	const humidity = data.main.humidity;
	const windSpeed = data.wind.speed;
	const description = data.weather[0].description.toUpperCase();
	const cityDisplay = document.createElement('h1');
	const tempDisplay = document.createElement('span');
	const tempMinDisplay = document.createElement('span');
	const tempMaxDisplay = document.createElement('span');
}
