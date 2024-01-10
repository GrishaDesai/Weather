const submitBtn = document.getElementById('submitBtn')
const cityname = document.getElementById('cityname')
const cityName = document.getElementById('cityName')
const temp_status = document.getElementById('temp_status')
const temp = document.getElementById('temp')
const temp_real_val = document.getElementById('temp_real_val');
const data_hide = document.getElementById('.middleLayer')

const getInfo = async (e) => {
    e.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&lat={lat}&lon={lon}&appid=20f51bedb4ce8a021ae8cc42e4d1a65f`;
    let cityval = cityname.value;
    if (cityval === "") {
        // dataHide.style.visibility = 'hidden'
        cityName.innerHTML = 'Please write city name before search'
        // data_hide.classList.add('data_hide')
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&lat={lat}&lon={lon}&appid=20f51bedb4ce8a021ae8cc42e4d1a65f`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            cityName.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerHTML = arrData[0].main.temp;
            temp_status.innerHTML = arrData[0].weather[0].main;
            // dataHide.style.visibility = "visible"
            // data_hide.classList.remove('data_hide')

        } catch {
            cityName.innerHTML = 'Please enter the city name properly'
            // dataHide.style.visibility = 'hidden'
            // data_hide.classList.add('data_hide')
        }

    }
}

submitBtn.addEventListener('click', getInfo);