# Trip Planning Backend

## Description

This is the backend for the Trip Planning App. It is built with Node.js, Express, and MongoDB.

## Installation

To install the dependencies, run the following command:

```bash
npm i
```

## Usage

To start the server, run the following command:

```bash
npm start
```

## Api Routes

### Admin Routes

```
GET /admin/getAllTrips
curl -X GET \
 'http://localhost:3000/admin/getAllTrips' \
 --header 'Accept: _/_'
```

```
POST /admin/addLocation
curl -X POST \
 'http://localhost:3000/admin/addLocation' \
 --header 'Accept: _/_' \
 --header 'Content-Type: application/json' \
 --data-raw '{
"countryName" : "India",
"region" : "North India"
}'
```

```
POST /admin/seeRegisteredUsers
curl -X POST \
 'http://localhost:3000/admin/seeRegisteredUsers' \
 --header 'Accept: _/_' \
 --header 'Content-Type: application/json'
```

### Trip Planning Routes

```
POST /planTrip/createTrip

curl  -X POST \
  'http://localhost:3000/planTrip/createTrip' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "name" : "Nimesh" ,
  "email" : "nimeshjohari95@gmail.com",
  "phoneNumber" : 8231209212,
  "destinationStations" : ["Abu Dhabi" , "Lucknow" , "Bengaluru"],
  "intertests" : ["Food" , "Drink" , "Game"],
  "numberOfTravelers" : 4 ,
  "bugdetPerTraveler" : 4000 ,
  "tripDate" : "2023-07-19",
  "tripDuration" : 4 ,
  "tripStatus" :"Definitely Travelling"
}'
```

```bash
GET /planTrip/getPlaces

curl -X GET \
  'http://localhost:3000/planTrip/getPlaces' \
  --header 'Accept: */*' \
  --header 'Content-Type: application/json' \

}'
```
