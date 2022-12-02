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

@Injectable()
export class KnowHowLoader extends FileLoader {
  getHpFromLine = (line: string[]): CreateHealthProfessionalInputDto => {
    return {
      PPIdentifierType: this.clean(line[0]),
      PPIdentifier: this.clean(line[1]),
      nationalPPIdentifier: this.clean(line[2]),
      lastname: this.clean(line[3]),
      firstname: this.clean(line[4]),
    };
  };

  getProfessionFromLine = (line: string[]): CreateProfessionInputDto => {
    return {
      professionCode: this.clean(line[5]),
      professionLabel: this.clean(line[6]),
      professionCategoryCode: this.clean(line[7]),
      professionCategoryLabel: this.clean(line[8]),
    };
  };

  getKnowHowFromLine = (line: string[]): CreateKnowHowInputDto => {
    return {
      knowHowTypeCode: this.clean(line[9]),
      knowHowTypeLabel: this.clean(line[10]),
      knowHowCode: this.clean(line[11]),
      knowHowLabel: this.clean(line[12]),
    };
  };

  makeTransaction = async (line: string[], index: number) => {
    try {
      await this.prismaService.$transaction(async (tx) => {
        const hp = this.getHpFromLine(line);
        const profession = this.getProfessionFromLine(line);
        const knowHow = this.getKnowHowFromLine(line);

        const hpEntity = await new HealthProfessionalRepository(
          tx as PrismaService,
        ).updateOrCreate(hp);

        await new ProfessionRepository(tx as PrismaService).getOrCreate({
          ...profession,
          healthProfessionalId: hpEntity.id,
        });

        await new KnowHowRepository(tx as PrismaService).getOrCreate({
          ...knowHow,
          healthProfessionalId: hpEntity.id,
        });
      });
    } catch (error) {
      console.log(error, this.getKnowHowFromLine(line));
    }
  };

  parse = async () => {
    const bar = new cliProgress.SingleBar();
    bar.start(
      await this.fileParser.getFileLineNumber('PS_LibreAcces_SavoirFaire.csv'),
      0,
    );
    await this.fileParser.parseFileLines(
      'PS_LibreAcces_SavoirFaire.csv',
      async (line, index) => {
        await this.makeTransaction(line.split('|'), index);
        // await new Promise((resolve) => setTimeout(resolve, 1));
        bar.update(index);
      },
    );
    bar.stop();
    console.log('done');
  };
}
