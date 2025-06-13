import { Module } from "@nestjs/common";
import { ApiController } from "./api/api.controller.js";

@Module({
	controllers: [ApiController],
})
export class AppModule {}
