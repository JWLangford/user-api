# User API

## Core Dependencies

1. [Nodejs](https://nodejs.org/en/)
2. [Express](https://expressjs.com/)
3. [Lowdb](https://www.npmjs.com/package/lowdb)
4. [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)
5. [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
6. [nodemon]("https://www.npmjs.com/package/nodemon")

## Installation

User API requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd user-api
yarn install
yarn start
```

## Routes

Below is a list of the routes that are available in the API.

| Routes      | Description                                            | Implemented |
| ----------- | ------------------------------------------------------ | :---------: |
| Get Users   | Gets a list of users                                   |   &check;   |
| Get User    | Gets a single user                                     |   &check;   |
| Create User | Creates a new user in the database                     |   &cross;   |
| Update User | Updates a user on the database                         |   &cross;   |
| Delete User | Deletes a user from the database                       |   &cross;   |
| Login       | Creates an authentication token for a new user session |   &cross;   |
