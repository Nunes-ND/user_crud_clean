import type { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const dataSourceOptions: TypeOrmModuleOptions = {
	type: "postgres",
	host: process.env.DB_HOST || "localhost",
	port: Number(process.env.DB_PORT) || 5432,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	autoLoadEntities: true,
	synchronize: process.env.NODE_ENV === "development",
};
