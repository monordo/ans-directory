import { Injectable } from '@nestjs/common';
import { AbstractRepositoryWithFind } from 'src/common/repositories/repository.abstract';
import { HealthProfessionalEntity } from 'src/health-professional/entities/health-professional.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  HealthProfessionalHasProfessionArrayEntity,
  HealthProfessionalHasProfessionEntity,
} from '../entities/health-professional-has-profession.entity';
import { ProfessionEntity } from '../entities/profession.entity';
import {
  CreateHealthProfessionalHasProfessionInputDto,
  HealthProfessionalHasProfessionPaginationDto,
  HealthProfessionalHasProfessionSortInputDto,
  HealthProfessionalHasProfessionWhereInputDto,
  UniqueHealthProfessionalHasProfessionInputDto,
  UpdateHealthProfessionalHasProfessionInputDto,
} from '../inputs/health-professional-has-profession.input';

@Injectable()
export class HealthProfessionalHasProfessionRepository extends AbstractRepositoryWithFind<
  HealthProfessionalHasProfessionEntity,
  HealthProfessionalHasProfessionArrayEntity,
  UniqueHealthProfessionalHasProfessionInputDto,
  CreateHealthProfessionalHasProfessionInputDto,
  UpdateHealthProfessionalHasProfessionInputDto,
  HealthProfessionalHasProfessionWhereInputDto,
  HealthProfessionalHasProfessionSortInputDto,
  HealthProfessionalHasProfessionPaginationDto
> {
  constructor(private readonly prismaService: PrismaService) {
    super(
      HealthProfessionalHasProfessionEntity,
      HealthProfessionalHasProfessionArrayEntity,
      prismaService,
    );
  }

  getOrCreate = async (data: CreateHealthProfessionalHasProfessionInputDto) => {
    const hp = await HealthProfessionalEntity.new(this.prismaService, {
      where: data.healthProfessional,
    });
    const knowHow = await ProfessionEntity.new(this.prismaService, {
      where: data.profession,
    });
    return new HealthProfessionalHasProfessionEntity(
      this.prismaService,
    ).getOrCreate({
      healthProfessionalId: hp.id,
      professionId: knowHow.id,
    });
  };
}
