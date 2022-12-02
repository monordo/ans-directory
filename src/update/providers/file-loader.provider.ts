import { PrismaService } from 'src/prisma/prisma.service';
import * as fs from 'fs';
import * as readline from 'readline';
import * as process from 'process';
import * as path from 'path';
import { Injectable } from '@nestjs/common';
import * as cliProgress from 'cli-progress';
import { FileParser } from './file-parser.provider';
import { KnowHowRepository } from 'src/know-how/repositories/know-how.repository';
import { HealthProfessionalRepository } from 'src/health-professional/repositories/health-professional.repository';
import { ProfessionRepository } from 'src/profession/repositories/profession.repository';

@Injectable()
export class FileLoader {
  constructor(
    protected readonly prismaService: PrismaService,
    protected readonly fileParser: FileParser,
    protected readonly knowHowRepository: KnowHowRepository,
    protected readonly healthProfessionalRepository: HealthProfessionalRepository,
    protected readonly professionRepository: ProfessionRepository,
  ) {}

  clean = (value: string | undefined | null): string => {
    const tmp = value.replaceAll(' ', '');
    if (tmp === '') return undefined;
    return value ?? undefined;
  };

  checkIlAllIndexesAreAvailable = (line: string[], indexes: number[]) => {
    return indexes.every((index) => this.clean(line[index]));
  };
}
