module.exports = {
  "type": "postgres",
  "port": 5432,
  "host": "localhost", 
  "username": 'docker',
  "password": 'ignite',
  "database": 'rentalx',
  "migrations": ["./src/database/migrations/*.ts"],
  "entities": ["./src/modules/**/entities/*.ts"],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}