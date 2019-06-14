# reactweatherapp
React Weather App 
Instructions: 1-Execute npm start to run the application. 2- open http://localhost:9000 in browser
Api:
The Apixu API (https://www.apixu.com/)
Technologies:
Visual studio code webpack, babel react react router redux , reduxthunk axios, sass loader,
How it works
the user insert the name of the city for example Melbourne in search box, with handlechange the state for location will be updated in store after press submit button call the action that get location state from store, add to query string and get json result from api and dispatch results in store using thunk, (the submit button link to another page in router called home) then in home page call weather component it will get the location and get api results from store, and map it
in Forecast section we can see the forecast for next 5 days.

