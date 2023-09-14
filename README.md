# person-api

### <a name="about">About</a>

A simple REST API capable of CRUD operations on a "PERSON" resource

Lets take a look at our set-up

- `config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.

- `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it.

- `controllers` -> they are kind of the last middlewares as post them you call you business layer to execute the budiness logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.


- `utils` -> this contains validation, etc.

### Prerequisites

Before you begin, ensure you have the following:

- [Node.js](https://nodejs.org/) installed on your machine.
- A database system (PostgreSQL) for this instance i used the postgress instance on supabase .

### Setup the project

1. Clone this repository:

   ```bash
   git clone https://github.com/adefoluso/person-api.git
   ```

- Inside the root directory execute the following command:

  ```
  yarn install or npm install
  ```

- In the root directory create a `.env` file and add the following env variables depending on your preferences:

    ```
        PORT=<port number of your choice>

    ```

    ex:

    ```
        PORT=3000,
        DATABASE_HOST,
        DB_USERNAME,
        DEV_DATABASE_PORT,
        DEV_DATABASE,
        DATABASE_PASSWORD
        POSTGRESQL_DB_URL
    ```

- go inside the root dirtectory of the project and execute the following command:

    ```
      npx sequelize init
    ```

- By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder.
- If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc
- If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

Below is an example of how your `config.json` file should be structured for development mode only.

## Configuration File Example (`config.js`) for cloud db (supabase)

```json
{
  "development": {
    "host": "<YOUR_DB_USERNAME OR DATABASE_HOST>",
    "password": "<YOUR_DB_PASSWORD>",
    "port": < "YOUR_DATABASE_PORT">,
    "username": <"YOUR_DB_USERNAME">,
    "database": <"YOUR_DEV_DATABASE_NAME">,
    "dialect": "postgres",
  }
}
```

- When the db is connected you can then run the migration command
```
npx sequelize db:migrate
```
- To run the server execute

 ```
 npm start
 ```

##### UML DIAGRAM FOR PROJECT
The UML diagram can be found [here] <https://github.com/adefoluso/stage2-Task/blob/main/src/UML-IMAGE/UML_screenshot.png>
