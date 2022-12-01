import { Injectable } from '@nestjs/common';
import { GetManyCommonPaginationDto } from 'src/common/inputs/pagination.input';
import { AbstractRepositoryWithFind } from 'src/common/repositories/repository.abstract';
import { PrismaService } from 'src/prisma/prisma.service';
import { HealthProfessionalHasProfessionEntity } from '../entities/health-professional-has-profession.entity';
import {
  ProfessionArrayEntity,
  ProfessionEntity,
} from '../entities/profession.entity';
import {
  CreateProfessionInputDto,
  ProfessionSortInputDto,
  ProfessionWhereInputDto,
  UniqueProfessionInputDto,
  UpdateProfessionInputDto,
} from '../inputs/profession.input';

@Injectable()
export class ProfessionRepository extends AbstractRepositoryWithFind<
  ProfessionEntity,
  ProfessionArrayEntity,
  UniqueProfessionInputDto,
  CreateProfessionInputDto,
  UpdateProfessionInputDto,
  ProfessionWhereInputDto,
  ProfessionSortInputDto,
  GetManyCommonPaginationDto
> {
  constructor(private readonly prismaService: PrismaService) {
    super(ProfessionEntity, ProfessionArrayEntity, prismaService);
  }

  create = async (data: CreateProfessionInputDto) => {
    const entity = await new ProfessionEntity(this.prismaService).create(data);
    if (data.healthProfessionalId) {
      await new HealthProfessionalHasProfessionEntity(
        this.prismaService,
      ).create({
        profession: { id: entity.id },
        healthProfessional: { id: data.healthProfessionalId },
      });
    }
    return entity;
  };

  getOrCreate = async (data: CreateProfessionInputDto) => {
    const entity = await new ProfessionEntity(this.prismaService).getOrCreate(
      data,
    );
    if (data.healthProfessionalId) {
      await new HealthProfessionalHasProfessionEntity(
        this.prismaService,
      ).getOrCreate({
        professionId: entity.id,
        healthProfessionalId: data.healthProfessionalId,
      });
    }
    return entity;
  };
}
