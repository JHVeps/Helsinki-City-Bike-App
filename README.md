# Helsinki-City-Bike-App

https://user-images.githubusercontent.com/90003389/236701014-1c9c4e66-be4d-472a-bbab-7a27f72366f9.mp4

<br/>

Backround picture from unsplash.com license: https://unsplash.com/license

## Description

The Helsinki City Bike App is a comprehensive full-stack web application that offers users a variety of features related to bicycle journeys and stations. The application is built with React TypeScript and uses Redux/Redux Toolkit for state management, making it highly responsive and user-friendly. The frontend features several customizable, pre-built components from Material UI, which make it easy to develop a modular application.

<br/>

The backend is powered by Node.js and Express.js, providing an efficient and easy-to-use framework for developers. The application uses a cloud-based database provided by MongoDB Atlas to store and retrieve data, ensuring seamless integration and scalability.

<br/>

To ensure the highest level of quality, the application utilizes Cypress for end-to-end testing. Additionally, the project includes the Importer App, which is a Node.js and Express.js-based application that allows users to import and validate CSV data into the database via a simple, three-page HTML frontend.

<br/>

## Technologies

### CLIENT / FRONTEND

- React
- Typescript
- Redux/Redux Toolkit for state managing
- https://mui.com/ components & styling
- formik for handling forms https://formik.org/
- jest for unit testing https://jestjs.io/

<br/>

### API / BACKEND

- Typescript
- Node.js/express.js https://nodejs.org/en https://expressjs.com/
- mongoose for handling MongoDB connection and documents https://mongoosejs.com/
- jest/supertest for testing https://jestjs.io/
- backend also runs in Docker: https://hub.docker.com/r/jhveps/helsinki-city-bike-app/tags

<br/>

### E2E Testing

- cypress https://docs.cypress.io/guides/overview/why-cypress

<br/>

### DATABASE

- MongoDB Atlas cloud database https://account.mongodb.com/account/login

<br/>

## Instructions

you have three different folders:

1. `api:` backend

2. `client:` Frontend

3. `importer:` App to import CSV data to MongoDB

> importer is NOT needed when testing/reviewing this App

<br/>

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

<br/>

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

<br/>

### E2E Testing with

1. in one terminal RUN API with: `yart start:test`

2. in another terminal RUN CLIENT with: `yart start`

3. in yet another terminal RUN E2E tests while CLIENT and API are running with: `yarn run cypress:open`

<br/>

### IMPORTER

- [ ] cd import_api

- [ ] yarn install

- [ ] add `.env` file to `import_api` folder with following:

- MONGODB_URI = "MONGO URI HERE"

- PORT = "PORT HERE"

<br/>

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
- [] Add user authentication
