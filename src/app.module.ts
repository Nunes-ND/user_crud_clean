import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ApiController } from "./api/api.controller.js";
import { User } from "./database/entities/User.js";

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
	],
	controllers: [ApiController],
})
export class AppModule {}
