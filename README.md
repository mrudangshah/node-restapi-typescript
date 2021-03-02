# node-restapi-typescript
Production ready NodeJS RestAPI with Typescript in MongoDB and MySQL database connection. 

# Features: 
* TypeScript
* MongoDB connection
* MariaDB connection
* Sequelize ORM
* JWT Authentication
* Sample CRUD functionality with file upload

# Running locally
Make sure you have [Node.js](http://nodejs.org/), [typescript](https://www.typescriptlang.org/) and [mongodb](https://www.mongodb.com/) configuration on your local system.

``` sh
touch .env      >>> create .env file on root dir then copy env.sample file to .env 
npm install     >>> install node packages 
npm run build   >>> generate build
npm start       >>> start node server
```

Make sure to update database configuration form /config folder files with your local dabatabse configuration.
