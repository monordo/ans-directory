import { Injectable } from '@nestjs/common';
import { GetManyCommonPaginationDto } from 'src/common/inputs/pagination.input';
import {
  AbstractRepository,
  AbstractRepositoryWithFind,
} from 'src/common/repositories/repository.abstract';
import { HealthProfessionalEntity } from 'src/health-professional/entities/health-professional.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  HealthProfessionalHasPharmacistInformationArrayEntity,
  HealthProfessionalHasPharmacistInformationEntity,
} from '../entities/health-professional-has-pharmacist-information.entity';
import { PharmacistInformationEntity } from '../entities/pharmacist-information.entity';
import {
  CreateHealthProfessionalHasPharmacistInformationInputDto,
  HealthProfessionalHasPharmacistInformationPaginationDto,
  HealthProfessionalHasPharmacistInformationSortInputDto,
  HealthProfessionalHasPharmacistInformationWhereInputDto,
  UniqueHealthProfessionalHasPharmacistInformationInputDto,
  UpdateHealthProfessionalHasPharmacistInformationInputDto,
} from '../inputs/health-professional-has-pharmacist-information.input';

@Injectable()
export class HealthProfessionalHasPharmacistInformationRepository extends AbstractRepositoryWithFind<
  HealthProfessionalHasPharmacistInformationEntity,
  HealthProfessionalHasPharmacistInformationArrayEntity,
  UniqueHealthProfessionalHasPharmacistInformationInputDto,
  CreateHealthProfessionalHasPharmacistInformationInputDto,
  UpdateHealthProfessionalHasPharmacistInformationInputDto,
  HealthProfessionalHasPharmacistInformationWhereInputDto,
  HealthProfessionalHasPharmacistInformationSortInputDto,
  HealthProfessionalHasPharmacistInformationPaginationDto
> {
  constructor(private readonly prismaService: PrismaService) {
    super(
      HealthProfessionalHasPharmacistInformationEntity,
      HealthProfessionalHasPharmacistInformationArrayEntity,
      prismaService,
    );
  }

  getOrCreate = async (
    data: CreateHealthProfessionalHasPharmacistInformationInputDto,
  ) => {
    const hp = await HealthProfessionalEntity.new(this.prismaService, {
      where: data.healthProfessional,
    });
    const pharmacistInformation = await PharmacistInformationEntity.new(
      this.prismaService,
      {
        where: data.pharmacistInformation,
      },
    );
    return new HealthProfessionalHasPharmacistInformationEntity(
      this.prismaService,
    ).getOrCreate({
      healthProfessionalId: hp.id,
      pharmacistInformationId: pharmacistInformation.id,
    });
  };
}
