import type { CreateUserDto } from "../use-cases/user/dtos/create-user.dto.js";

export abstract class ICreateUserUseCase<T> {
	abstract execute(userInputDto: CreateUserDto): Promise<T>;
}
