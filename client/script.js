// Fetch data from API and render breweries
fetch('/api/breweries')
  .then(response => response.json())
  .then(data => renderBreweries(data))
  .catch(error => console.log(error));

// Render breweries on the page
function renderBreweries(breweries) {
  const breweriesContainer = document.getElementById('breweries-container');

  breweries.forEach(brewery => {
    const breweryCard = document.createElement('div');
    breweryCard.className = 'brewery-card';

    const name = document.createElement('h2');
    name.textContent = brewery.name;

    const city = document.createElement('p');
    city.textContent = `City: ${brewery.city}`;

    const state = document.createElement('p');
    state.textContent = `State: ${brewery.state}`;

    breweryCard.appendChild(name);
    breweryCard.appendChild(city);
    breweryCard.appendChild(state);

    breweriesContainer.appendChild(breweryCard);
  });
}


  