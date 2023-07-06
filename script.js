const acessKey = "c05cc54e8ac95bd867aa9ac4ff586ca5" ;
const url = "https://api.openweathermap.org/data/2.5/weather?units=Metric&q="
const cityName = document.getElementById('city');
const temp = document.getElementById('temp');
const humidity = document.getElementById('humidity')
const windSpeed = document.getElementById('wind-speed')
const input = document.getElementById('search-input')
const btn = document.getElementById('search-btn')
const weatherIcon = document.querySelector('.weather-icon')

let city = 'Tokyo'

  

async function checkWeather(city){
 
    const response = await fetch(url + city + `&appid=${acessKey}`)
    let data = await response.json()

    console.log(data)
     cityName.innerText = data.name
     temp.innerText = data.main.temp+'°C';
     humidity.innerText = data.main.humidity
     windSpeed.innerText = data.wind.speed
     weatherIcon.src = `images/${data.weather[0].main}.png`
     weatherIcon.alt = data.weather[0].main
     console.log(data)
}

checkWeather(city)

btn.addEventListener('click' , ()=>{
 
    checkWeather(input.value)
    

})