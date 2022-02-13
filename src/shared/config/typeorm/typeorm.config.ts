import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USER || '',
  password: process.env.DATABASE_PASSWORD || '',
  database: process.env.DATABASE_NAME || '',
  entities: [
    __dirname +
      './../../../modules/**/infra/typeorm/entities/*.entity{.ts,.js}',
  ],
  synchronize: false,
  schema: process.env.DATABASE_SCHEMA,
  migrationsRun: true,
  migrationsTableName: 'migrations',
  migrations: [__dirname + './../../infra/typeorm/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/shared/infra/typeorm/migrations',
  },
  // ssl: {
  //   rejectUnauthorized: false,
  // },
};

export default config;
