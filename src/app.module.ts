import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./infra/database/entities/user.entity.js";
import { dataSourceOptions } from "./infra/database/typeorm.config.js";
import { ApiModule } from "./infra/http/api/api.module.js";
import { UsersModule } from "./infra/http/user/user.module.js";

@Module({
	imports: [
		TypeOrmModule.forRoot(dataSourceOptions),
		TypeOrmModule.forFeature([User]),
		ApiModule,
		UsersModule,
	],
})
export class AppModule {}
