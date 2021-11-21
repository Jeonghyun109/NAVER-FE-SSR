const { default: axios } = require("axios");
const config = require("config")
const querystring = require('querystring')

class UrlShortener {
    constructor() {
        this.url = config.get("urlShortenerAddress")
        this.clientId = config.get("naverClientId")
        this.clientSecret = config.get("naverClientSecret")
    }

    do(url) {
        const data = querystring.stringify({
            "url": url
        })

        const options = {
            "url": this.url,
            "method": "POST",
            "data": data,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "x-naver-client-id": this.clientId,
                "x-naver-client-secret": this.clientSecret,
              }
          };

        return axios(options)
    }
}

exports.UrlShortener = new UrlShortener()
