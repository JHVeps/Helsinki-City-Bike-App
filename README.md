# Helsinki-City-Bike-App

## TODO

### import csv to database, CSV importer app

#### IMPORT_API

- [x] ~~connect to mongoDB~~
- [x] ~~Journey model / types~~
- [x] ~~Station model / types~~
- [x] ~~Router for importing journey/station~~
- [x] ~~Logic for importing journey~~
- [x] ~~Logic for importing station~~

#### IMPORT_CLIENT

- [x] ~~Add simple UI for adding files~~
- [x] ~~add index.html~~
- [x] ~~add journeys file import~~
- [x] ~~add stations file import~~
- [x] ~~add minimal styling~~
- [x] ~~script for adding files~~

- [x] ~~Import file to MongoDB~~

  > _Free Tier space did not allow all files to be imported !_<br/>

  > _.csv files (202105, 202106 and stations) imported to MongoDB Atlas_

### Implement Application

#### Implement API for Helsinki-City-Bike-App

- [x] ~~connect to mongoDB~~
- [x] ~~Journey model / types~~
- [x] ~~Station model / types~~
- [ ] Services for journey
- [ ] Services for station
- [ ] Routers for journey data
- [ ] Routers for station data
- [ ] controller for journey
- [ ] Controller for station
- [ ] Tests for API

#### Implement CLIENT for Helsinki-City-Bike-App

##### Journey list view

- [ ] List of journeys (departure and return stations, covered distance (km), duration (min))

##### Additional

- [ ] Pagination
- [ ] Ordering per column
- [ ] Seaching
- [ ] Filtering

##### Station list view

- [ ] List of all stations

##### Additional

- [ ] Pagination
- [ ] Searching

##### Single Station view

- [ ] Station name
- [ ] Station address
- [ ] Total number of journeys starting from the station
- [ ] Total number of journeys ending at the station

##### Additional

- [ ] Station location on the map
- [ ] The average distance of a journey starting from the station
- [ ] The average distance of a journey ending at the station
- [ ] Top 5 most popular return stations for journeys starting from the station
- [ ] Top 5 most popular departure stations for journeys ending at the station
- [ ] Ability to filter all the calculations per month

##### Bonus

- [ ] POST journeys / stations
- [ ] API Docker
- [ ] API - cloud
- [ ] E2E tests
- [ ] UI has functionality for adding journeys or bicycles
