import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PrismaService } from '../../prisma/prisma.service';
import { Logger } from '@nestjs/common';
import { EntityDto, EntityInitArgs } from '../dtos/entity.dto';
import * as cuid from 'cuid';
import { randomBytes } from 'crypto';

@ObjectType()
export abstract class AbstractEntity {
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  createdAt: Date;

  private logger: Logger;

  isSave = () => !!this.id;

  constructor(
    protected readonly prismaService: PrismaService,
    protected readonly idPrefix: string,
    protected readonly entityName: string,
  ) {
    this.logger == new Logger(entityName);
  }

  toObject(): EntityDto {
    return {
      id: this.id,
      updatedAt: this.updatedAt,
      createdAt: this.createdAt,
    };
  }

  generateId = (prefix?: string, store = true): string => {
    const newId = `${prefix ?? this.idPrefix}_${cuid()}`;
    if (store) this.id = newId;
    return newId;
  };

  generateToken = (prefix = 'sk'): string => {
    this.id = `${prefix}_${this.idPrefix}_${cuid()}${randomBytes(50).toString(
      'hex',
    )}`;
    return this.id;
  };

  abstract init(args: EntityInitArgs): Promise<AbstractEntity>;

  abstract create(data: unknown): Promise<AbstractEntity>;

  abstract update(where: unknown, data: unknown): Promise<AbstractEntity>;

  abstract delete(where: unknown): Promise<AbstractEntity>;
}

@ObjectType()
export abstract class AbstractArrayEntity {
  @Field()
  count: number;

  @Field()
  total: number;

  abstract get(
    where?: unknown,
    sort?: unknown,
    pagination?: unknown,
  ): Promise<AbstractArrayEntity>;
}
