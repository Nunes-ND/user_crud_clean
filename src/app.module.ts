import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./database/entities/User.js";
import { ApiModule } from "./infra/http/api/api.module.js";

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "postgres",
			host: process.env.DB_HOST || "localhost",
			port: Number(process.env.DB_PORT) || 5432,
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE,
			autoLoadEntities: true,
			synchronize: process.env.NODE_ENV === "development",
		}),
		TypeOrmModule.forFeature([User]),
		ApiModule,
	],
})
export class AppModule {}
