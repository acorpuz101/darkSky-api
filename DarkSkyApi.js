const fetch = require("node-fetch");
const auth = require("./auth.json");

module.exports = class DarkSkyApi {
  constructor() {
	  this.apiHostname = "https://api.darksky.net/forecast/";
	  this.method = "GET";
	  this.apiKey = auth.apiKeys.darkSky;
	  this.headers = { 'Content-Type': 'application/json' };
  }
  
	async getForecast(latLongStr, futureDate = "") {
		futureDate = (futureDate != "") ? "," + futureDate : futureDate;
		let uri = this.apiHostname + this.apiKey + "/" + latLongStr + futureDate;
		console.log("uri", uri);
	  try {
		  const response = await fetch(uri, {
			  method: this.method,
			  headers: this.headers
			}
		  );
		  const data = await response.json();
		  return data;
	  } catch (e) {
		  console.log('map err', e);
		  return e;
		}
  }
}
