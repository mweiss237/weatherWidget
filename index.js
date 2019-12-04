const WeatherGadget = require('./src/WeatherGadget.js')
const express = require('express')
var app = express()

var widget = new WeatherGadget(app, 'myApiKey', 'Donauwörth', 'metric')
console.log(widget.settings.getURL())
widget.loadWeatherData()

app.listen(5000);