import { Logger } from '@nestjs/common';
import { Field, ObjectType } from '@nestjs/graphql';
import { ErrorEnum, errorToMessage } from './code.error';

@ObjectType()
export class ErrorDatailsDto {
  @Field(() => [String], { nullable: true })
  messages?: string[];
}

@ObjectType()
export class ProcessErrorDto {
  @Field()
  messages: string;

  @Field()
  code: string;

  @Field()
  details?: ErrorDatailsDto;
}

export class ProcessError extends Error {
  code: string;

  details?: ErrorDatailsDto;

  constructor(error: ErrorEnum, details?: ErrorDatailsDto) {
    super(errorToMessage(error));

    this.code = error;

    this.details = details;
  }

  toObject(): ProcessErrorDto {
    return {
      messages: this.message,
      code: this.code,
      details: this.details,
    };
  }
}
