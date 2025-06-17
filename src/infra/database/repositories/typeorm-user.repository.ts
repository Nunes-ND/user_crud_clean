import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import type { Repository } from "typeorm";
import type { IUserRepository } from "../../../app/ports/user.repository.port.js";
import type { CreateUserInputDto } from "../../../app/use-cases/user/dtos/create-user-input.dto.js";
import { User } from "../entities/user.entity.js";

@Injectable()
export class TypeOrmUserRepository implements IUserRepository {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
	) {}

	async create(userInput: CreateUserInputDto): Promise<User> {
		const user = this.userRepository.create(userInput);
		return this.userRepository.save(user);
	}

	async findByEmail(email: string): Promise<User | null> {
		return this.userRepository.findOneBy({ email });
	}
}
