Recess is a project by Guy Ginton and King of the Chill.
The basis is an app to get you out the house, and to a game or event, as soon as possible.
Additional features will relate to developing personal skills, leagues, scoring, communication and online gaming.

This app favores Node Packages over building everything from scratch.
It also will be built for minimal calls and server expenses. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
To learn React, check out the [React documentation](https://reactjs.org/).
It additionally uses Firebase Tools, including Firestore and Firebase Hosting. 


## Available Scripts
In the project directory, you can run:
* npm i -- you know what it does!
* npm start -- runs app in dev mode on http://localhost:3000
* npm test -- runs test runners. currently not applicable.
* npm run build -- makes a build of the app for deployment
* npm run eject -- does anyone use this? please dont
* firebase deploy -- deploys the latest build

## Flow
* Users going to the app, currently playlocal.games , immediately see a map of games available.
* From the map, users can click on a game. If not logged in, they will be prompted to.
* At any time, logged in users can go to a list of games, events and personal skills, or a list of clubs. 
* Users will be able to join teams, make reoccuring games, tournaments and more.

## Firebase notes
* Use mapStateToProps to get the state from database
* Use mapDispatchToProps to update DB. Dispatches are defined in 'src > store > actions'
* 
