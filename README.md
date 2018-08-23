# Would You Rather Project

This is the final assessment project for Udacity's React & Redux course.
The "Would You Rather?" web app lets user to play would you rather game.In this app user would have way to logging in as an existing user.The app allows logged in user to create new poll,Vote for a poll posted by another users,also user can toggle between his/her answered and unanswered polls on the home page.The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).The unanswered questions would be shown by default, and the name of the logged in user would be visible on the page.

## Requirments

The application was created with create-react-app and requires only npm

## TL;DR

To get it installed and launched:

* Download or Clone the Repository
* install all dependencies with `npm install`
* start the server with `npm start`
* After starting the server hit the URL:http://localhost:3000/

## App Functionality & Its Flows

Following are the various flows of app:

### Login Flow

The App user would have a way of logging in as an existing user.The Login Box appears at the root ('/') of the application that lets the user select a name from the list of existing users. app works correctly regardless of which user is selected. Once the user logs in, the home page will show.Also Name & Avatar of logged in user display on the page. If someone tries to navigate anywhere by entering the address in the address bar, the user is asked to sign in and then the requested page will be shown. The application allows the user to log out and log back in.

![Loginflow](https://github.com/nehach028/reactnd-project2-WouldYouRather_APP/blob/master/public/SignIn.png?raw=true)

### Home Page

Once the user logs in, the home page will be show.The user would be able to toggle between his/her answered and unanswered polls on the home page.The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom). The unanswered questions would be shown by default, and the name & avatar of the logged in user would be visible on the page.

![Image of Home Page](https://github.com/nehach028/reactnd-project2-WouldYouRather_APP/blob/master/public/Home.png?raw=true)

### ViewPoll

When a view poll button is clicked on the "unanswered" category of home page, User will be redirect to view poll page.The details of each poll will be available at questions/:question_id.

![Image of ViewPoll Page](https://github.com/nehach028/reactnd-project2-WouldYouRather_APP/blob/master/public/ViewPoll.png?raw=true)

When view poll button clicked on answered polls, user will be redirect to Poll detail page.On voting in a poll, all of the information of an answered poll will be displayed. The user’s Vote will be visible on the poll details page. Users can only vote once per poll also they are not allowed to change their answer after they’ve voted. When the user comes back to the home page, the polling question should appear in the “Answered” column.

![Image of ViewPollResult Page](https://github.com/nehach028/reactnd-project2-WouldYouRather_APP/blob/master/public/ViewPollResult.png?raw=true)

Note:The application will show a 404 page if the user is trying to access a poll that does not exist.

### New Question

The form for posting new polling questions will be available at the '/add' route.Also Form have two oprtion to create new Question/Poll. Upon submitting the form, a new poll will be created, the user will be redirect to the home page, and the new polling question will appear in the Unanswered category of home page.

![Image of New Question Page](https://github.com/nehach028/reactnd-project2-WouldYouRather_APP/blob/master/public/NewQuestion.png)

### LeaderBoard

The leaderboard will be available at the '/leaderboard' route. Each entry on the leaderboard will display the no of questions the user asked,& the no of questions the user answered.also Users will be displayed in descending order based on the sum of the number of questions they’ve asked and the number of questions they’ve answered.

![Image of LeaderBoard page](https://github.com/nehach028/reactnd-project2-WouldYouRather_APP/blob/master/public/LeaderBoard.png?raw=true)


## Backend Server

A backend server & javascript API is provided.The provided files are :
[`api.js`](src/utils/api.js),[`_DATA.js`](src/utils/_DATA.js) contains the methods you will need to perform necessary operations on the backend:

The `_DATA.js` file represents a fake database and methods that let you access the data.


## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

## FrontEnd UI

This project was build with [Semantic UI](https://react.semantic-ui.com/).
This is the UI Framework to build interactive user interfaces by using React functinality.Installation instructions are provided in the Usage section of [Semantic UI](https://react.semantic-ui.com/).

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

