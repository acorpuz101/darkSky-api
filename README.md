# Dark Sky Weather API

## Purpose

This app is intended to be a microservice run on, and accessed by, a local network.

This app will probably need https and CORS if extended out to broader users.

## Setup

* Run `npm install` to install dependencies
* Copy `auth.json.dist` into the root directory without the .dist.
* Put your dark sky api credentials into `auth.json`
* Copy `conf.json.dist` into the root directory without the .dist.
* If needed, change any configuration properties in `config.json`.
* To start, run `node index.js`
