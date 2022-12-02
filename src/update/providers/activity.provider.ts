import { PrismaService } from 'src/prisma/prisma.service';
import * as fs from 'fs';
import * as readline from 'readline';
import * as process from 'process';
import * as path from 'path';
import { Injectable } from '@nestjs/common';
import * as cliProgress from 'cli-progress';
import { FileParser } from './file-parser.provider';
import { FileLoader } from './file-loader.provider';
import { HealthProfessional } from 'src/health-professional/dtos/health-professional.dto';
import { CreateHealthProfessionalInputDto } from 'src/health-professional/inputs/health-professional.input';
import { CreateProfessionInputDto } from 'src/profession/inputs/profession.input';
import { CreateKnowHowInputDto } from 'src/know-how/inputs/know-how.input';
import { HealthProfessionalRepository } from 'src/health-professional/repositories/health-professional.repository';
import { KnowHowRepository } from 'src/know-how/repositories/know-how.repository';
import { ProfessionRepository } from 'src/profession/repositories/profession.repository';
import { CreatePracticeInputDto } from 'src/stucture/inputs/practice.input';
import { CreateStructureInputDto } from 'src/stucture/inputs/structure.input';
import { CreateRegistrationAuthorityInputDto } from 'src/stucture/inputs/registration-authority.input';
import { CreateActivitySectorInputDto } from 'src/stucture/inputs/activity-sector.input';
import { CreatePharmacistInformationInputDto } from 'src/pharmacist-information/inputs/pharmacist-information.input';
import { CreateRoleInputDto } from 'src/stucture/inputs/role.input';
import { CreateActivityInputDto } from 'src/stucture/inputs/activity.input';
import { StructureRepository } from 'src/stucture/repositories/structure.repository';
import { HealthProfessionalHasStructure } from 'src/stucture/dtos/health-professional-has-structure.dto';
import { HealthProfessionalHasStructureRepository } from 'src/stucture/repositories/health-professional-has-structure.repository';
import { PharmacistInformationRepository } from 'src/pharmacist-information/repositories/pharmacist-information.repository';
import { HealthProfessionalEntity } from 'src/health-professional/entities/health-professional.entity';
import { StructureEntity } from 'src/stucture/entities/structure.entity';

@Injectable()
export class ActivityLoader extends FileLoader {
  getHpFromLine = (line: string[]): CreateHealthProfessionalInputDto => {
    return {
      PPIdentifierType: this.clean(line[0]),
      PPIdentifier: this.clean(line[1]),
      nationalPPIdentifier: this.clean(line[2]),
      practiceCivilityCode: this.clean(line[3]),
      practiceCivilityLabel: this.clean(line[4]),
      civilityCode: this.clean(line[5]),
      civilityLabel: this.clean(line[6]),
      lastname: this.clean(line[7]),
      firstname: this.clean(line[8]),
    };
  };

  getProfessionFromLine = (line: string[]): CreateProfessionInputDto => {
    if (!this.checkIlAllIndexesAreAvailable(line, [9, 10, 11, 12]))
      return undefined;
    return {
      professionCode: this.clean(line[9]),
      professionLabel: this.clean(line[10]),
      professionCategoryCode: this.clean(line[11]),
      professionCategoryLabel: this.clean(line[12]),
    };
  };

  getKnowHowFromLine = (line: string[]): CreateKnowHowInputDto => {
    if (!this.checkIlAllIndexesAreAvailable(line, [13, 14, 15, 16]))
      return undefined;
    return {
      knowHowTypeCode: this.clean(line[13]),
      knowHowTypeLabel: this.clean(line[14]),
      knowHowCode: this.clean(line[15]),
      knowHowLabel: this.clean(line[16]),
    };
  };

  getPracticeFromLine = (line: string[]): CreatePracticeInputDto => {
    if (!this.checkIlAllIndexesAreAvailable(line, [17, 18])) return undefined;
    return {
      practiceCode: this.clean(line[17]),
      practiceLabel: this.clean(line[18]),
    };
  };

  getRegistrationAuthorityFromLine = (
    line: string[],
  ): CreateRegistrationAuthorityInputDto => {
    if (!this.checkIlAllIndexesAreAvailable(line, [19, 20])) return undefined;
    return this.clean(line[47])
      ? {
          name: this.clean(line[47]),
        }
      : undefined;
  };

  getActivitySectorFromLine = (
    line: string[],
  ): CreateActivitySectorInputDto => {
    if (!this.checkIlAllIndexesAreAvailable(line, [48, 49])) return undefined;
    return this.clean(line[48]) && this.clean(line[49])
      ? {
          sectorCode: this.clean(line[48]),
          sectorLabel: this.clean(line[49]),
        }
      : undefined;
  };

  getStructureFromLine = (line: string[]): CreateStructureInputDto => {
    if (!this.checkIlAllIndexesAreAvailable(line, [19])) return undefined;
    return {
      SIRET: this.clean(line[19]),
      SIREN: this.clean(line[20]),
      FINESS: this.clean(line[21]),
      legalFINESS: this.clean(line[22]),
      technicalId: this.clean(line[23]),
      companyName: this.clean(line[24]),
      comercialSign: this.clean(line[25]),
      oldIdentifiers: this.clean(line[46]) ? [this.clean(line[46])] : undefined,
      registrationAuthority: this.getRegistrationAuthorityFromLine(line),
      sector: this.getActivitySectorFromLine(line),
      activity: this.getActivityFromLine(line),
    };
  };

  getPharmacistInformationFromLine = (
    line: string[],
  ): CreatePharmacistInformationInputDto => {
    if (!this.checkIlAllIndexesAreAvailable(line, [50, 51])) return undefined;
    return this.clean(line[50]) && this.clean(line[51])
      ? {
          sectionCode: this.clean(line[50]),
          sectionLabel: this.clean(line[51]),
        }
      : undefined;
  };

  getRoleFromLine = (line: string[]): CreateRoleInputDto => {
    if (!this.checkIlAllIndexesAreAvailable(line, [52, 53])) return undefined;
    return this.clean(line[52]) && this.clean(line[53])
      ? {
          roleCode: this.clean(line[52]),
          roleLabel: this.clean(line[53]),
        }
      : undefined;
  };

  getActivityFromLine = (line: string[]): CreateActivityInputDto => {
    if (!this.checkIlAllIndexesAreAvailable(line, [54, 55])) return undefined;
    return this.clean(line[54]) && this.clean(line[55])
      ? {
          activityCode: this.clean(line[54]),
          activityLabel: this.clean(line[55]),
        }
      : undefined;
  };

  makeTransaction = async (line: string[], index: number) => {
    try {
      await this.prismaService.$transaction(async (tx) => {
        const hp = this.getHpFromLine(line);
        const structure = this.getStructureFromLine(line);
        const profession = this.getProfessionFromLine(line);
        const knowHow = this.getKnowHowFromLine(line);
        const pharmaInf = this.getPharmacistInformationFromLine(line);

        let hpEntity: HealthProfessionalEntity;
        let structureEntity: StructureEntity;

        if (hp) {
          hpEntity = await new HealthProfessionalRepository(
            tx as PrismaService,
          ).updateOrCreate(hp);
        }

        if (structure) {
          structureEntity = await new StructureRepository(
            tx as PrismaService,
          ).updateOrCreate({
            ...this.getStructureFromLine(line),
          });
        }

        if (structureEntity && hpEntity) {
          await new HealthProfessionalHasStructureRepository(
            tx as PrismaService,
          ).updateOrCreate({
            healthProfessional: { id: hpEntity.id },
            structure: { id: structureEntity.id },
            role: this.getRoleFromLine(line),
            practice: this.getPracticeFromLine(line),
          });
        }

        if (profession) {
          await new ProfessionRepository(tx as PrismaService).getOrCreate({
            ...profession,
            healthProfessionalId: hpEntity?.id,
          });
        }

        if (knowHow) {
          await new KnowHowRepository(tx as PrismaService).getOrCreate({
            ...knowHow,
            healthProfessionalId: hpEntity?.id,
          });
        }

        if (pharmaInf) {
          await new PharmacistInformationRepository(
            tx as PrismaService,
          ).getOrCreate({
            ...pharmaInf,
            healthProfessionalId: hpEntity?.id,
          });
        }
      });
    } catch (error) {
      console.log(error, `INDEX: ${index}`);
    }
  };

  parse = async () => {
    const bar = new cliProgress.SingleBar();
    bar.start(
      await this.fileParser.getFileLineNumber(
        'PS_LibreAcces_Personne_activite.csv',
      ),
      0,
    );
    await this.fileParser.parseFileLines(
      'PS_LibreAcces_Personne_activite.csv',
      async (line, index) => {
        await this.makeTransaction(line.split('|'), index);
        bar.update(index);
      },
    );
    bar.stop();
    console.log('done');
  };
}
