## About: 
- This REST API was built during **DCI's WEB Development Course**, which We attended between 2019 - 2021.
- This API is beeing used for the [Dtravel Client](https://github.com/bidodev/react-dtravel-client) 

## Endpoints

Method | Desc | Endpoint
------------ | -------------| -------------
GET | Get all the places | /api/v1/places
GET | Get an unique place | /api/v1/places/id
PATCH | Update an unique place | /api/v1/places/id
DELETE | Delete an unique place | /api/v1/places/id
POST | Create an unique place | /api/v1/places


## Pagination
**/api/v1/places?page=1&limit=5**

### Creating an new Place using Postman

**localhost:8000/api/v1/places**

*JSON Body*

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

### `yarn install`
Install all the required packages.

### `yarn start:dev`

Runs the app in the development mode.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

### `yarn start:production`

Start the API in production mode, all the loggers will be disabled<br />

### `yarn debug`

Start the API in debugger mode using [ndb](https://github.com/GoogleChromeLabs/ndb) debugger <br />


## 🚀 Technologies used
<img title="Express 4" src="https://uploads.toptal.io/blog/category/logo/25/express_js.png" width="72" /> <img title="JasonWebToken" src="https://werkraum.net/fileadmin/news_import/jwt_pic_logo.svg.png" width="72" /> <img title="MongoDB" src="https://www.clouda.ca/wp-content/uploads/2013/03/mongodb-logo.png" width="72" /> <img title="Node.js 12" src="https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg" width="72" />

## Contact
Created by [Claudinei Bido](https://www.linkedin.com/in/bidoc/) - feel free to contact me!
