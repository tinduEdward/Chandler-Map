# Chandler Map of Schools
This is a single page application which shows the different types of schools available in the Chandler, AZ School district.

This application follow this [Udacity Project Rubric](https://review.udacity.com/#!/rubrics/1351/view)

## Features

1. Type into the filter/search box to filter the shown locations on the map.
2. Click on the button below the filter/search box to collapse or expand the suggestions list.
3. Click anywhere on the map to close the information window that opens.
4. Click on any marker to see the location details fetched from the [FourSquare APIs](https://developer.foursquare.com/).

## How to run the project in Development Mode
The project uses [Node.js >= 6.x](https://nodejs.org/en/) and the [Create-React-App starter code](https://github.com/facebookincubator/create-react-app).

After Node is installed in your system, follow the below steps.

1. Navigate to the directory where you want to store the app.
2. Clone the repo
3. Now install all modules listed as dependencies in `package.json` by running the command `npm install`
4. Launch the app with this command `npm start`

A new browser window open automatically displaying the app.  If it doesn't, navigate to [http://localhost:3000/](http://localhost:3000/) in your browser

***NOTE:*** *The service workers for this app will only cache the site when it is in production mode.*

## How to run the project in Production Mode

1. Build the production ready optimised code. `npm run build`
2. Deploy it to `gh-pages` branch by `npm run deploy`

