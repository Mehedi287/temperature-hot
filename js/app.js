const searchTemperature = () => {
    const getCityName = document.getElementById('city-name');
    const cityName = getCityName.value;
    getCityName.value = '';
    getDetails(cityName);
}
const getDetails = name => {
    console.log(name);
    const api = 'c8f177b8dffdbcf3b3b2b2229a78f046';
    const url = (`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=c8f177b8dffdbcf3b3b2b2229a78f046&units=metric`);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCityDetails(data))
}
const setAttribute = (id, name) => {
    const city = document.getElementById(id).innerText = name;
}
const displayCityDetails = city => {
    setAttribute('city', city.name);
    setAttribute('temperature', city.main.temp)
    setAttribute('condition', city.weather[0].main)
    //    set icon 
    const icon = document.getElementById('weather-icon');
    const urlImg = `https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`;
    icon.setAttribute('src', urlImg);
}