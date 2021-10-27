import { IConfiguration } from './interfaces/IConfiguration';

export const config: IConfiguration = {
  database: {
    type: process.env.DB_TYPE || 'mysql',
    host: process.env.DB_HOST || '0.0.0.0',
    port: parseInt(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root',
    database: process.env.DB_NAME || 'nestjs',
    entities: [__dirname + '../**/*/*.entitty{.ts,.js}'],
    migrations: ['dist/migrations/**/*{.ts,.js}'],
    synchrozine: true,
  },
};

export default () => {
  return config;
};
