# Helsinki-City-Bike-App

https://user-images.githubusercontent.com/90003389/236701014-1c9c4e66-be4d-472a-bbab-7a27f72366f9.mp4

Backround picture from unsplash.com license: https://unsplash.com/license

## Description

Helsinki City Bike App is a simple fullstack application that allows the user to browse information about bicycle journeys and stations stored in database. The user can also add new bicycle stations to the database.

<br/>

The application has a frontend / UI which is done with React TypeScript and it is run on a browser. Frontend state management was implemented using redux/redux Toolkit. Frontend utilizes many ready-made components of material ui because they are easy to configure and with them you can easily make the application modular.

<br/>

The implementation environment of the application's backend is node.js and it uses the express.js framework because it is very easy to use and configure. The backend is also made with typescript.

<br/>

The application uses MongoBb Atlas's cloud database to retrieve and store data.

<br/>

Cypress was used for testing the E2E application because it is easy to use and requires little configuration.

## Technologies

### CLIENT / FRONTEND

- React
- Typescript
- Redux/Redux Toolkit for state managing
- https://mui.com/ components & styling
- formik for handling forms https://formik.org/
- jest for unit testing https://jestjs.io/

### API / BACKEND

- Typescript
- Node.js/express.js https://nodejs.org/en https://expressjs.com/
- mongoose for handling MongoDB connection and documents https://mongoosejs.com/
- jest/supertest for testing https://jestjs.io/
- backend also runs in Docker: https://hub.docker.com/r/jhveps/helsinki-city-bike-app/tags

### E2E Testing

- cypress https://docs.cypress.io/guides/overview/why-cypress

### DATABASE

- MongoDB Atlas cloud database https://account.mongodb.com/account/login

## Instructions

you have three different folders:

1. `api:` backend

2. `client:` Frontend

3. `importer:` App to import CSV data to MongoDB

> importer is NOT needed when testing/reviewing this App

To install, you need to go to correct directories and install their packages:

### API

- [ ] cd api

- [ ] yarn install

- [ ] add `.env` file to `api` folder with following:

- MONGODB_URI = "MONGO URI HERE"
- TEST_MONGODB_URI = "MONGO TEST URI HERE"
- PORT= "PORT HERE"

- [ ] Docker image for API: https://hub.docker.com/r/jhveps/helsinki-city-bike-app/tags

<br/>

- [ ] `yarn test`, run tests for API

- [ ] `yarn run dev`, run in development environment

- [ ] `yarn start`, run in production environment

- [ ] `yart start:test`, run in test environment `(use this command when running E2E tests)`

### CLIENT

- [ ] cd client

- [ ] yarn install

- [ ] add `secrets` folder to `client` folder

- [ ] add `secrets.ts` file to `secrets` folder with following:

- export const API_URL = "API URL HERE";

- export const CLIENT_URL = "CLIENT URL HERE";

<br/>

- [ ] add `secrets` folder to `src` folder

- [ ] add `secrets.ts` file in `secrets` folder with following:

- export const REACT_APP_GOOGLE_MAP_API = "GOOGLE MAPS API KEY HERE";

- export const API_URL = "API URL HERE>;

<br/>

- [ ] `yarn test`, run tests for CLIENT

- [ ] `yarn start`, run in production environment

- [ ] `yarn run cypress:open`, (when client running and api running in test environment)

### IMPORTER

- [ ] cd import_api

- [ ] yarn install

- [ ] add `.env` file to `import_api` folder with following:

- MONGODB_URI = "MONGO URI HERE"

- PORT = "PORT HERE"

- [ ] `yarn start`, run in production enviroment

- [ ] `yarn start dev`, run in development environment

- [ ] run `index.html` in import_client folder

> you can select only specific CSV files to import

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
