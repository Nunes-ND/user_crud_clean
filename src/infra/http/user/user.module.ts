import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ICreateUserUseCase } from "../../../app/ports/create-user.port.js";
import { IUserRepository } from "../../../app/ports/user.repository.port.js";
import { CreateUserUseCase } from "../../../app/use-cases/user/create-user.use-case.js";
import { TypeOrmUserRepository } from "../../../infra/database/repositories/typeorm-user.repository.js";
import { User } from "../../database/entities/user.entity.js";
import { UsersController } from "./user.controller.js";

@Module({
	imports: [TypeOrmModule.forFeature([User])],
	controllers: [UsersController],
	providers: [
		{
			provide: ICreateUserUseCase,
			useClass: CreateUserUseCase,
		},
		{
			provide: IUserRepository,
			useClass: TypeOrmUserRepository,
		},
	],
})
export class UsersModule {}
