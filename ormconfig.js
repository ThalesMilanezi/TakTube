export default {
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: process.env.TYPEORM_SYNCHRONIZE,
  logging: process.env.LOGGING,
  entities: ['src/data/entity/**/*.ts'],
  migrations: ['src/data/migration/**/*.ts'],
  cli: {
    entitiesDir: 'src/data/entity',
    migrationsDir: 'src/data/migration',
  },
};
