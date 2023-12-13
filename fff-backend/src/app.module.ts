import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { GatewayModule } from './gateway/features.module';
import { FeaturesGateway } from './features.gateway';
// import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [],
  providers: [FeaturesGateway],
})
export class AppModule {}
