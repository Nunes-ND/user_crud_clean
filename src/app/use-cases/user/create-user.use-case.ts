import { UserAlreadyExistsError } from "../../../app/errors/user-already-exists.error.js";
import type { ICreateUserUseCase } from "../../../app/ports/create-user.port.js";
import type { User } from "../../../infra/database/entities/user.entity.js";
import type { IUserRepository } from "../../ports/user.repository.port.js";
import type { CreateUserDto } from "./dtos/create-user.dto.js";

export class CreateUserUseCase implements ICreateUserUseCase<User> {
	constructor(private readonly userRepository: IUserRepository) {}

	async execute(input: CreateUserDto): Promise<User> {
		const existingUser = await this.userRepository.findByEmail(input.email);

		if (existingUser) {
			throw new UserAlreadyExistsError(
				`User with email ${input.email} already exists.`,
			);
		}

		return this.userRepository.create(input);
	}
}
