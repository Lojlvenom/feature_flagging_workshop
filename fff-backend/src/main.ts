import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true
  });


  // api docs
  const config = new DocumentBuilder()
    .setTitle('Feature Flagging Backend')
    .setDescription('Simple api for mocking feature flagging.')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  var options = {
    defaultModelsExpandDepth: -1,
    customSiteTitle:"foo"
  };

  
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: options,
  });

  await app.listen(3000);
}
bootstrap();
