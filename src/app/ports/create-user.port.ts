import type { CreateUserInputDto } from "../use-cases/user/dtos/create-user-input.dto.js";

export abstract class ICreateUserUseCase<T> {
	abstract execute(userInputDto: CreateUserInputDto): Promise<T>;
}
