## Endpoints

### Get all the Places
method: GET

host:port/api/v1/places

### Update a place
method: PATCH

host:port/api/v1/places/id

### Get a unique place
method: GET

host:port/api/v1/places/id

### Delete a unique place
method: DELETE

host:port/api/v1/places/id

### Create a place
method: POST

host:port/api/v1/places
JSON body example

```javascript
{
    "productName": "phuket",
    "description": "Located in southern Thailand, Phuket offers something for everyone, especially budget-minded travelers. Everything from accommodations to spa treatments to boat tours come with a low price tag. For stunning scenery, check out the limestone cliffs of Phang Nga Bay and lounge on Phuket's gorgeous white sand beaches. Other must-sees include Wat Chalong Temple and the Big Buddha. Once the sun sets, take part in the island's lively nightlife scene.",
    "country": "thailand",
    "continent": "asia",
    "type": "tropical",
    "difficulty": "medium",
    "price": 3000,
    "cover": {
      "url": "phuket/mike-swigunski.jpg",
      "description": "Maui is an island in the Central Pacific, part of the Hawaiian archipelago."
    },
    "imgs": [
      {
        "url": "phuket/william-rouseh.jpg",
        "description": "phuket Image 1 - Put some description"
      },
      {
        "url": "phuket/frankie-spontell.jpg",
        "description": "phuket Image 2 - Put some description"
      },
      {
        "url": "phuket/vitaly-sacred.jpg",
        "description": "Maui Image 3 - Put some description"
      }
    ]
  }
```


## Available Scripts

In the project directory, you can run:

### `yarn start:dev"`

Runs the app in the development mode.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

### `yarn start:production`

Start the API in production mode, all the loggers will be disabled<br />

### `yarn debug`

Start the API in debugger mode using [ndb](https://github.com/GoogleChromeLabs/ndb) debugger <br />