import { UserAlreadyExistsError } from "../../../app/errors/user-already-exists.error.js";
import type { ICreateUserUseCase } from "../../../app/ports/create-user.port.js";
import { User } from "../../../core/entities/user.entity.js";
import type { IUserRepository } from "../../ports/user.repository.port.js";
import type { CreateUserInputDto } from "./dtos/create-user-input.dto.js";
import type { CreateUserOutputDto } from "./dtos/create-user-output.dto.js";

export class CreateUserUseCase
	implements ICreateUserUseCase<CreateUserOutputDto>
{
	constructor(private readonly userRepository: IUserRepository) {}

	async execute(input: CreateUserInputDto): Promise<CreateUserOutputDto> {
		const existingUser = await this.userRepository.findByEmail(input.email);

		if (existingUser) {
			throw new UserAlreadyExistsError(
				`User with email ${input.email} already exists.`,
			);
		}

		const newUser = new User(input);
		const userData = newUser.getUserData();

		await this.userRepository.create(userData);

		const response: CreateUserOutputDto = {
			name: userData.name,
			email: userData.email,
		};
		return response;
	}
}
