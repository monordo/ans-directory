import { Injectable } from '@nestjs/common';
import { GetManyCommonPaginationDto } from 'src/common/inputs/pagination.input';
import {
  AbstractRepository,
  AbstractRepositoryWithFind,
} from 'src/common/repositories/repository.abstract';
import { PrismaService } from 'src/prisma/prisma.service';
import { HealthProfessionalHasKnowHowEntity } from '../entities/health-professional-has-know-how.entity';
import { KnowHowArrayEntity, KnowHowEntity } from '../entities/know-how.entity';
import {
  CreateKnowHowInputDto,
  KnowHowSortInputDto,
  KnowHowWhereInputDto,
  UniqueKnowHowInputDto,
  UpdateKnowHowInputDto,
} from '../inputs/know-how.input';

@Injectable()
export class KnowHowRepository extends AbstractRepositoryWithFind<
  KnowHowEntity,
  KnowHowArrayEntity,
  UniqueKnowHowInputDto,
  CreateKnowHowInputDto,
  UpdateKnowHowInputDto,
  KnowHowWhereInputDto,
  KnowHowSortInputDto,
  GetManyCommonPaginationDto
> {
  constructor(private readonly prismaService: PrismaService) {
    super(KnowHowEntity, KnowHowArrayEntity, prismaService);
  }

  create = async (data: CreateKnowHowInputDto) => {
    const entity = await new KnowHowEntity(this.prismaService).create(data);
    if (data.healthProfessionalId) {
      await new HealthProfessionalHasKnowHowEntity(this.prismaService).create({
        knowHow: { id: entity.id },
        healthProfessional: { id: data.healthProfessionalId },
      });
    }
    return entity;
  };

  getOrCreate = async (data: CreateKnowHowInputDto) => {
    const entity = await new KnowHowEntity(this.prismaService).getOrCreate(
      data,
    );
    if (data.healthProfessionalId) {
      await new HealthProfessionalHasKnowHowEntity(
        this.prismaService,
      ).getOrCreate({
        knowHowId: entity.id,
        healthProfessionalId: data.healthProfessionalId,
      });
    }
    return entity;
  };
}
