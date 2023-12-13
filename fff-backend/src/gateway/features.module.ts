import { Module } from "@nestjs/common";
import { FeaturesGateway } from "../features.gateway";


@Module({
imports: [FeaturesGateway]
})
export class GatewayModule {}

