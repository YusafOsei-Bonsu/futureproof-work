
1. Install dependencies - `npm install`
2. Download Postgres
3. 'npm install knex -g'
4. Create two local Postgres databases - `mocha_chai_tv_shows` and `mocha_chai_tv_shows_test`
5. Migrate - `knex migrate:latest --env development`
6. Seed - `knex seed:run --env development`
7. Test - `npm test`
8. Run the development server - `npm start`

First, I went on package.json and removed the duplicate "script". Afterward, I attempted to install express, but couldn't do so, as 'node-pre-gyp' was required; therefore, I installed node-pre-gyp before installing express. 

I entered 'npm test' into the terminal to gain an idea of what I was up against and I discovered that 3 tests had failed and 3 had passed. From this point, I dedicated time into passing the tests.

I went on the postgreSQL terminal. After entering the appropriate credentials, I created two local databases: mocha_chai_tv_shows and mocha_chai_tv_shows_test, by writing/entering two SQL queries: `'CREATE DATABASE mocha_chai_tv_shows'` and `'CREATE DATABASE mocha_chai_tv_shows_test'`. After creating the databases, I ran the migration (i.e. "20160424103224_tv_shows.js") using `"knex migrate:latest --env development"`, which in turn, created the `'shows'` db table. After migration, I ran the seed files by entering `"knex seed:run --env development"` into the terminal; as a result, inserting 4 records (i.e. Suits, Game of Thrones, South Park & Mad Men) into the `"shows"` table.

Originally, the second route was a `POST` request and after noticing this, I changed the route to send a `GET` request. Also, for the 'add show' route, I rewrote 'put' to a 'post', as a new show was being inserted into the database table. 

In the queries.js (in the 'db' folder), I rewrote all functions in ES6 style.

For the test that retrieves a single show, I renamed `"suits"` to `"Suits"`; as a result, correcting the typo and passing the test.

For the second test-case of the `'PUT /api/v1/shows/:id'` test suite, I encased the code block inside an if-statement that says if the id is within the request, provide the user with an error message (status code 422).

I didn't use Gulp because after entering `'gulp'` (in the terminal) to run the dev server, it only printed `"Hello Gulp"`.

In the end, all my tests passed.