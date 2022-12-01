import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import {
  GetManyStringFilterDto,
  GetManyWhereDto,
} from 'src/common/inputs/get-many.input';
import { IsNotNull } from 'src/common/object-decorators/not-null.decorator';

@InputType()
export class CreateRoleInputDto {
  @Field()
  @IsNotEmpty()
  roleCode: string;

  @Field()
  @IsNotEmpty()
  roleLabel: string;
}

@InputType()
export class RoleWhereInputDto extends GetManyWhereDto {
  @Field(() => [RoleWhereInputDto], {
    nullable: true,
  })
  @ValidateNested()
  @Type(() => RoleWhereInputDto)
  OR?: RoleWhereInputDto[];

  @Field(() => [RoleWhereInputDto], {
    nullable: true,
  })
  @ValidateNested()
  @Type(() => RoleWhereInputDto)
  AND?: RoleWhereInputDto[];

  @Field(() => [RoleWhereInputDto], {
    nullable: true,
  })
  @ValidateNested()
  @Type(() => RoleWhereInputDto)
  NOT?: RoleWhereInputDto[];

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  roleCode?: GetManyStringFilterDto;

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  roleLabel?: GetManyStringFilterDto;
}
