# Tech Blog
> This is a CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.  It follows the MVC paradigm in its architectural structure, using Handlebars.js, Sequelize, and the express-session npm package for authentication.
> Live demo [_here_](https://limitless-sands-39073-6434661b69ef.herokuapp.com/). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
- Provide general information about your project here.
- What problem does it (intend to) solve?
- What is the purpose of your project?
- Why did you undertake it?
In this CMS-style blog site, the homepage includes existing blog posts if any have been posted with navigation links for the homepage and the dashboard and the option to log in.  The user can click on sign up and be prompted to create a username and password.  When the sign-up button is clicked, the user credentials are saved and the user is able to log into the site.  Once the user signs up, they can revisit at a later time and choose to log in and enter their username and password to sign on to the site.  
<!-- You don't have to answer all the questions - just the ones relevant to your project. -->


## Technologies Used
- Handlebars.js
- Sequelize
- Express
- Express Session
- Bcrypt
- Dotenv
- MySQL2


## Features
- Sign up and create a username and password
- Log in and log out
- Awesome feature 3


## Screenshots
![Example screenshot](./img/screenshot.png)
<!-- If you have screenshots you'd like to share, include them here. -->


## Setup
In order to get started with the project, the user must add the database name and MySQL username and password in the .env file.  In the terminal, use the commands to invoke MySQL, seed the database with test data, and run the application.


## Usage
`npm i`

`mysql -u root -p`

`SOURCE db/schema.sql;`

`npm run seed`

`npm run start` to run the server OR `npm run watch` to use Nodemon


## Project Status
Project is: _in progress_.


## Room for Improvement
Include areas you believe need improvement / could be improved. Also add TODOs for future development.

Room for improvement:
- Improvement to be done 1
- Improvement to be done 2

To do:
- Feature to be added 1
- Feature to be added 2


## Acknowledgements
- Many thanks to my instructor, Michael Pacheco, the TAs, Nirav and Julius, tutor Dane Shrewsbury, and all the AskBCS learning assistants.


## Contact
Created by Kristine Kim.  Feel free to contact me at kristinehkim@gmail.com!


<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->

<!-- You don't have to include all sections - just the one's relevant to your project -->