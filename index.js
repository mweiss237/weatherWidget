const WeatherGadget = require('./src/WeatherGadget.js')

var widget = new WeatherGadget('myApiKey', 'Sydney,au', 'metric')
console.log(widget.settings.getURL())
widget.loadWeatherData()