import "reflect-metadata";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";

async function bootstrap() {
	const PORT = process.env.PORT || 3000;
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(
		new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
	);
	await app.listen(PORT);
}
bootstrap();
