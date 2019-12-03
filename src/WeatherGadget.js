const request = require('request')
const CallSettings = require('./CallSettings')
const WeatherData = require('./WeatherData')
const Vue = require('vue')
const fs = require('fs')

class WeatherGadget {

    settings = null
    weatherData = null
    url = 'https://api.openweathermap.org/data/2.5/weather?'
    constructor(apiKey, city, metrics) {
        this.setCallSettings(apiKey, city, metrics, this.url)
    }

    setCallSettings(apiKey, city, metrics, baseURL = this.url) {
        this.settings = new CallSettings(apiKey, city, metrics, baseURL)
    }

    loadWeatherData() {
        if (!this.settings) return false
        request.get(this.settings.getURL(), (err, res, body) => {
            this.weatherData = new WeatherData(JSON.parse(body))
            this.logWeather()
        })
        return true
    }

    getWeatherData(key = undefined) {
        if (!this.weatherData) this.loadWeatherData()
        var wd = this.weatherData.getData()
        return key ? wd[key] : wd
    }


    logWeather() {
        let wd = this.getWeatherData()
        console.log('Weather in ' + wd.city)
        console.log('Temperature: ' + wd.temp.act)
        console.log('Today - Max ' + wd.temp.max + "°C / Min " + wd.temp.min + "°C")
        console.log('Wind: ' + wd.wind)
        // console.log('Sunrise at ' + wd.sun.rise + ' and sunset at ' + wd.sun.set)
    }

}

module.exports = WeatherGadget