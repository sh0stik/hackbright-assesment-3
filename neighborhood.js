function randomRestaurantSelect() {
    let restaurants = ['Mountain Mike\'s Pizza', 'Custom Cut Butcher', 'Starbucks', 'Talab'];
    alert(restaurants[Math.floor(Math.random() * restaurants.length)]);
}
randomButton = document.querySelector("#random");
randomButton.addEventListener('click', randomRestaurantSelect);