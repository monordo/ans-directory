import { Injectable } from '@nestjs/common';
import { GetManyCommonPaginationDto } from 'src/common/inputs/pagination.input';
import {
  AbstractRepository,
  AbstractRepositoryWithFind,
} from 'src/common/repositories/repository.abstract';
import { PrismaService } from 'src/prisma/prisma.service';
import { HealthProfessionalHasPharmacistInformationEntity } from '../entities/health-professional-has-pharmacist-information.entity';
import {
  PharmacistInformationArrayEntity,
  PharmacistInformationEntity,
} from '../entities/pharmacist-information.entity';
import {
  CreatePharmacistInformationInputDto,
  PharmacistInformationPaginationDto,
  PharmacistInformationSortInputDto,
  PharmacistInformationWhereInputDto,
  UniquePharmacistInformationInputDto,
  UpdatePharmacistInformationInputDto,
} from '../inputs/pharmacist-information.input';

@Injectable()
export class PharmacistInformationRepository extends AbstractRepositoryWithFind<
  PharmacistInformationEntity,
  PharmacistInformationArrayEntity,
  UniquePharmacistInformationInputDto,
  CreatePharmacistInformationInputDto,
  UpdatePharmacistInformationInputDto,
  PharmacistInformationWhereInputDto,
  PharmacistInformationSortInputDto,
  PharmacistInformationPaginationDto
> {
  constructor(private readonly prismaService: PrismaService) {
    super(
      PharmacistInformationEntity,
      PharmacistInformationArrayEntity,
      prismaService,
    );
  }

  create = async (data: CreatePharmacistInformationInputDto) => {
    const entity = await new PharmacistInformationEntity(
      this.prismaService,
    ).create(data);
    if (data.healthProfessionalId) {
      await new HealthProfessionalHasPharmacistInformationEntity(
        this.prismaService,
      ).create({
        pharmacistInformation: { id: entity.id },
        healthProfessional: { id: data.healthProfessionalId },
      });
    }
    return entity;
  };

  getOrCreate = async (data: CreatePharmacistInformationInputDto) => {
    const entity = await new PharmacistInformationEntity(
      this.prismaService,
    ).getOrCreate(data);
    if (data.healthProfessionalId) {
      await new HealthProfessionalHasPharmacistInformationEntity(
        this.prismaService,
      ).getOrCreate({
        pharmacistInformationId: entity.id,
        healthProfessionalId: data.healthProfessionalId,
      });
    }
    return entity;
  };
}
