const env = require('dotenv').config().parsed;

module.exports = {
  test: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: env.pq_username,
      password: env.pq_pwd,
      database: 'mocha_chai_tv_shows_test',
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  },
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: env.pq_username,
      password: env.pq_pwd,
      database: 'mocha_chai_tv_shows',
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/production'
    }
  }
};
