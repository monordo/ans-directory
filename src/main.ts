import {
  ArgumentMetadata,
  BadRequestException,
  ValidationPipe,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorEnum } from './common/errors/code.error';
import { throwError } from './common/errors/utils.error';

export class CustomValidationPipe extends ValidationPipe {
  public async transform(value, metadata: ArgumentMetadata) {
    try {
      return await super.transform(value, metadata);
    } catch (e) {
      const errors = e.response;
      if (e instanceof BadRequestException) {
        throwError(ErrorEnum.VALIDATION_ERROR, {
          messages: errors ? errors.message : [e.message],
        });
      }
    }
  }
}

// @Catch(ForbiddenException)
// export class ForbiddenExceptionFilter implements ExceptionFilter {
//   catch(exception: ForbiddenException, host: ArgumentsHost) {
//     throwError(ErrorEnum.FORBIDDEN_ERROR);
//   }
// }

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new CustomValidationPipe());
  await app.listen(3000);
}
bootstrap();
