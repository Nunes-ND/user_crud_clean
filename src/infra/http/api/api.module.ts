import { Module } from "@nestjs/common";
import { HealthHandler } from "../../../app/handlers/health.handler.js";
import { IHealthChecker } from "../../../app/ports/health-checker.port.js";
import { ApiController } from "./api.controller.js";

@Module({
	controllers: [ApiController],
	providers: [{ provide: IHealthChecker, useClass: HealthHandler }],
})
export class ApiModule {}
