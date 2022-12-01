import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import {
  GetManyStringFilterDto,
  GetManyWhereDto,
} from 'src/common/inputs/get-many.input';
import { IsNotNull } from 'src/common/object-decorators/not-null.decorator';

@InputType()
export class CreatePracticeInputDto {
  @Field()
  @IsNotEmpty()
  practiceCode: string;

  @Field()
  @IsNotEmpty()
  practiceLabel: string;
}

@InputType()
export class PracticeWhereInputDto extends GetManyWhereDto {
  @Field(() => [PracticeWhereInputDto], {
    nullable: true,
  })
  @ValidateNested()
  @Type(() => PracticeWhereInputDto)
  OR?: PracticeWhereInputDto[];

  @Field(() => [PracticeWhereInputDto], {
    nullable: true,
  })
  @ValidateNested()
  @Type(() => PracticeWhereInputDto)
  AND?: PracticeWhereInputDto[];

  @Field(() => [PracticeWhereInputDto], {
    nullable: true,
  })
  @ValidateNested()
  @Type(() => PracticeWhereInputDto)
  NOT?: PracticeWhereInputDto[];

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  practiceCode?: GetManyStringFilterDto;

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  practiceLabel?: GetManyStringFilterDto;
}
