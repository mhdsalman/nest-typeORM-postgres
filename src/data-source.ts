import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',   // or your database host
  port: 5432,          // default PostgreSQL port
  username: 'postgres', // make sure the username is correct
  password: 'root', // replace 'your_password' with the actual password
  database: 'postgres', // your database name
  entities: [__dirname + '/entities/*.entity{.ts,.js}'],
  migrations: ['db/migrations/*{.ts,.js}'],
  synchronize: false,
});