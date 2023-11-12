import { json } from "stream/consumers";

const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3a2c9d1d46msh7e2a2b35220aac4p163f29jsnde7f818c35ec',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export async function fetchCars() {
  const headers = {
		'X-RapidAPI-Key': '3a2c9d1d46msh7e2a2b35220aac4p163f29jsnde7f818c35ec',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  });

	const result = await response.json();

	return result;
}
