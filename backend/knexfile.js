module.exports = {
    
  /*
  client: 'postgresql',
  connection: {
      database: 'knowledge',
      user: 'postgres',
      password: '123456'
  },
  pool: {
      min: 2,
      max: 10
  },
  migrations: {
      tableName: 'knex_migrations'
  }*/
  
  /*
  client: 'postgresql',
  connection: {
      host: 'codaxpostgres.c8rmjbl8lqg6.us-west-2.rds.amazonaws.com',
      database: 'postgres',
      user: 'codax',
      password: 'codax2020'
  },
  pool: {
      min: 2,
      max: 10
  },
  migrations: {
      tableName: 'knex_migrations'
  }*/
  development: {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '160195',
        database: 'appsaude'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory:`${__dirname}/src/database/seeds`
    }
  }
  
};
