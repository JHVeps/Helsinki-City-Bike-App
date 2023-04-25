# Helsinki-City-Bike-App

## TODO

### import csv to database

IMPORT_API

1. connect to mongoDB - DONE
2. Journey model / types - DONE
3. Station model / types - DONE
4. Router for importing journey/station - DONE
5. Logic for importing journey - DONE
6. Logic for importing station - DONE

IMPORT_CLIENT

1. Add simple UI for adding files

- add index.html - DONE
- add journeys file import - DONE
- add stations file import - DONE
- add minimal styling - DONE
- script for adding files - DONE

2. Import file to MongoDB - DONE

- Free Tier space did not allow all files to be imported !
- .csv files (202105, 202106 and stations) imported to MongoDB Atlas

### Implement API for Helsinki-City-Bike-App

1. connect to mongoDB - DONE
2. Journey model / types - DONE
3. Station model / types - DONE
4. Services for journey
5. Services for station
6. Routers for journey data
7. Routers for station data
8. controller for journey
9. Controller for station
10. Tests for API

### Implement CLIENT for Helsinki-City-Bike-App

1. Journey list view
   - List of journeys (departure and return stations, covered distance (km), duration (min))
2. Additional
   - Pagination
   - Ordering per column
   - Seaching
   - Filtering
3. Station list view
   - List of all stations
4. Additional
   - Pagination
   - Searching
5. Single Station view
   - Station name
   - Station address
   - Total number of journeys starting from the station
   - Total number of journeys ending at the station
6. Additional
   - Station location on the map
   - The average distance of a journey starting from the station
   - The average distance of a journey ending at the station
   - Top 5 most popular return stations for journeys starting from the station
   - Top 5 most popular departure stations for journeys ending at the station
   - Ability to filter all the calculations per month
7. Bonus
   - POST journeys / stations
   - API Docker
   - API - cloud
   - E2E tests
   - UI for adding journeys or bicycles
