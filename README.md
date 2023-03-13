# Note Taker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Live Application**: [https://damp-gorge-21732.herokuapp.com/](https://damp-gorge-21732.herokuapp.com/)

## Description

Application that uses an Express.js back end to save and retrieve a user's notes data to and from a JSON file. On the client side, the user can view, save, and delete notes. These actions activate GET, POST, and DELETE requests on the server side. The GET requests read data from a database json file, the POST requests appends data to the database, and a DELETE request removes notes from the database. During this project, Abdelrahman learnt the following skills:
- Creating servers using the express.js framework to develop an application
- Setting up middleware functions to parse JSON data in the request body & serve static files (such as HTML & CSS files)
- Set up GET, POST, and DELETE requests that interact with the server-side database json file to handle client-side fetch requests
- Set up route parameters to allow for dynamic routing and to handle requests for different resources using a single route handler
- Used modular routing to organize routes and handlers into separate, reusable modules. Using express.Router(), handelrs & application routes were broken into separate files based on their functionality (html requests & api requests).
- Deploy application on Heroku 
- Navigating through the application's logs to check request information & error messages


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

The project is deployed on heroku, so no installation is required. However, if you would like to run the application through the command line, the user will have to first install the express.js and uuid packages. To install these packages, the user must navigate to the main directory of the project where the package.json file is contained and run the command `npm i` or `npm install` in the terminal. Once the packages are installed, run the command `npm start` to run/start the application.

## Usage

To use this application, simply [click here](https://damp-gorge-21732.herokuapp.com/)

This will take the user to the live deployed Heroku application. Click on the `Get Started` button and this will take you to the notes page. On the notes page, the user can view/read, save, and delete notes. Existing notes are listed in the left-hand column, and empty fields to enter a new note title and the note’s text are in the right-hand column. Once the user enters a title and a text, a save button will appear in the top right corner. When the user clicks the save button then the note is saved and appears in the left-hand column with the other existing notes. Saved notes on the left-hand column contain a delete button which will remove the note from the column.

## License

This project is licensed under the MIT License. To see the license permissions for commercial and non-commercial use, modification, and distribution of the software, please see the full text of the license, available at https://opensource.org/licenses/MIT.

## How to Contribute

N/A

## Tests

N/A

## Questions

If you have any questions regarding this application, feel free to reach me at abdelrahman.ahmed605@hotmail.com with the subject title "Questions for Note Taker Application"
You can also find me on github here: https://github.com/AbdelrahmanAhmed605

