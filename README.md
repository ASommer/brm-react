# Bikerentalmap
Demo: [brm-react-demo.bikerentalmap.com](htts://brm-react-demo.bikerentalmap.com)

React based App show availables bike, scooters etc. 
Data are provided by the [flucto API](https://flow.fluctuo.com/)
Trying React Hooks

## Get work on your local machine
You should have a current version (9+) of [NodeJs](https://nodejs.org) installed on your machine.

1. Clone or download this repo.
2. In order to use the [HERE](https:://here.com) [Geolocation API](https://developer.here.com/documentation/geocoder/topics/what-is.html?create=Freemium-Basic&keepState=true&step=account), create an account for free.
3. To fetch vehicle data create a developer account for the [flucto API](https://flow.fluctuo.com/login) (it's free for hoby prject and low traffic applications)
4. Create an `.env` File and add the necessary API tokens:
    ```javascript
    REACT_APP_HERE_APP_ID=YOUR_APP_ID
    REACT_APP_HERE_APP_CODE=YOUR_APP_CODE
    REACT_APP_MULTICYCLES_API_TOKEN=YOUR_API_TOKEN
    ```
5. Install the packages via `yarn` or `npm install`
6. Start the development server with `yarn start` or `npm run start`

## Services, Sources and Inspirations
- the Address Autocomplete Forme use the Geolocation APP from [HERE](https:://here.com) 
- The Vehicles Data use the API provided by [Fluctuo](https://fluctuo.com/) (former Multicycles). Thanks to the work of [Pierrick Paul](https://github.com/PierrickP)!

## Todo
- add submitbutton to locationsearchform
- vehicle details animation(slide) with react Transitions
- refetch with debounce on moveend
- cache policy (prevent refetching on page switch)
- testing with jest and react-testing
- TravisCI
- fitbound map to results
- add filter options (for provider and vehicle types)
- enable PWA
- convert into Monorepo with own Graphql endpoint for usage of further API (bikeciti.es et. al.)
---


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
