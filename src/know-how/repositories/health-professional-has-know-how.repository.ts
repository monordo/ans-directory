import { Injectable } from '@nestjs/common';
import { GetManyCommonPaginationDto } from 'src/common/inputs/pagination.input';
import {
  AbstractRepository,
  AbstractRepositoryWithFind,
} from 'src/common/repositories/repository.abstract';
import { HealthProfessionalEntity } from 'src/health-professional/entities/health-professional.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  HealthProfessionalHasKnowHowArrayEntity,
  HealthProfessionalHasKnowHowEntity,
} from '../entities/health-professional-has-know-how.entity';
import { KnowHowEntity } from '../entities/know-how.entity';
import {
  CreateHealthProfessionalHasKnowHowInputDto,
  HealthProfessionalHasKnowHowPaginationDto,
  HealthProfessionalHasKnowHowSortInputDto,
  HealthProfessionalHasKnowHowWhereInputDto,
  UniqueHealthProfessionalHasKnowHowInputDto,
  UpdateHealthProfessionalHasKnowHowInputDto,
} from '../inputs/health-professional-has-know-how.input';

@Injectable()
export class HealthProfessionalHasKnowHowRepository extends AbstractRepositoryWithFind<
  HealthProfessionalHasKnowHowEntity,
  HealthProfessionalHasKnowHowArrayEntity,
  UniqueHealthProfessionalHasKnowHowInputDto,
  CreateHealthProfessionalHasKnowHowInputDto,
  UpdateHealthProfessionalHasKnowHowInputDto,
  HealthProfessionalHasKnowHowWhereInputDto,
  HealthProfessionalHasKnowHowSortInputDto,
  HealthProfessionalHasKnowHowPaginationDto
> {
  constructor(private readonly prismaService: PrismaService) {
    super(
      HealthProfessionalHasKnowHowEntity,
      HealthProfessionalHasKnowHowArrayEntity,
      prismaService,
    );
  }

  getOrCreate = async (data: CreateHealthProfessionalHasKnowHowInputDto) => {
    const hp = await HealthProfessionalEntity.new(this.prismaService, {
      where: data.healthProfessional,
    });
    const knowHow = await KnowHowEntity.new(this.prismaService, {
      where: data.knowHow,
    });
    return new HealthProfessionalHasKnowHowEntity(
      this.prismaService,
    ).getOrCreate({
      healthProfessionalId: hp.id,
      knowHowId: knowHow.id,
    });
  };
}
