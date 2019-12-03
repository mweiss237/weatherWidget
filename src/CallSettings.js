class CallSettings {


    constructor(apiKey, city, units = 'metric', baseURL) {
        this.city = { key: 'q', value: city }
        this.units = { key: 'units', value: units }
        this.apiKey = { key: 'APPID', value: apiKey }
        this.baseURL = baseURL
    }

    getURL() {
        let params = [this.city, this.units, this.apiKey]
        let URL =  this.baseURL + params.reduce((pre, cur) => {
            if (cur.value) {
                pre.push(encodeURIComponent(cur.key) + "=" + encodeURIComponent(cur.value))
            }
            return pre
        }, []).join('&')
        return URL
    }
}

module.exports = CallSettings