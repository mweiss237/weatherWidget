
class WeatherData {

    constructor(raw) {
        this.data = {
            city: raw.name,
            clouds: raw.clouds.all,
            wind: raw.wind.speed,
            temp: {
                act: raw.main.temp,
                min: raw.main.temp_min,
                max: raw.main.temp_max 
            },
            sun: {
                rise: new Date(raw.sys.sunrise),
                set: new Date(raw.sys.sunset)
            },
            date: new Date(raw.dt)
        }
    }

    getData() {
        return this.data
    }

}

module.exports = WeatherData