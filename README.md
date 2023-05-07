# Helsinki-City-Bike-App

https://user-images.githubusercontent.com/90003389/236701014-1c9c4e66-be4d-472a-bbab-7a27f72366f9.mp4

Backround picture from unsplash.com license: https://unsplash.com/license

## Instructions

you have three different folders:

1. `api:` backend

2. `client:` Frontend

3. `importer:` App to import CSV data to MongoDB

To install, you need to go to both directories and install their packages as such:

### API

- [ ] cd api

- [ ] yarn install

- [ ] add `.env` file to api folder with following:

- `MONGODB_URI` = `"MONGO URI HERE"`
- `TEST_MONGODB_URI` = `"MONGO TEST URI HERE"`
- `PORT`= `"PORT HERE"`

- [ ] Docker image url: https://hub.docker.com/r/jhveps/helsinki-city-bike-app/tags

<br/>

- [ ] `yarn test`, run tests for API

- [ ] `yarn run dev`, run in development environment

- [ ] `yarn start`, run in production environment

- [ ] `yart start:test`, run in test environment (for E2E testing)

### CLIENT

- [ ] cd client

- [ ] yarn install

- [ ] add `secrets` folder to client folder

- [ ] add `secrets.ts` file to `secrets` folder with following:

- `export const API_URL` = `"API URL HERE";`

- `export const CLIENT_URL` = `"CLIENT URL HERE";`

<br/>

- [ ] add `secrets` folder to src folder

- [ ] add `secrets.ts` file in `secrets` folder with following:

- `export const REACT_APP_GOOGLE_MAP_API` = `"GOOGLE MAPS API KEY HERE";`

- `export const API_URL` = `"API URL HERE>;`

<br/>

- [ ] `yarn test`, run tests for CLIENT

- [ ] `yarn start`, run in production environment

- [ ] `yarn run cypress:open`, (when client running and api running in test environment)

### IMPORTER

- [ ] cd import_api

- [ ] yarn install

- [ ] add `.env` file to import_api folder with following:

- `MONGODB_URI`=`"MONGO URI HERE"`

- `PORT`=`"PORT HERE"`

- [ ] `yarn start`, run in production enviroment

- [ ] `yarn start dev`, run in development environment

- [ ] run `index.html` in import_client folder

> select correct CSV files to import

<br/>

## TODO

### import csv to database, CSV importer app

- [x] ~~Import data to MongoDB Atlas~~

### Implement Application

#### API

- [x] ~~Recommended~~
- [x] ~~Additional~~

#### CLIENT

##### Journey list view

- [x] ~~Recommended~~
- [x] ~~Additional~~

##### Station list view

- [x] ~~Recommended~~
- [x] ~~Additional~~

#### Single station view

- [x] ~~Recommended~~
- [x] ~~Additional~~

#### Bonus

- [x] ~~E2E tests~~
