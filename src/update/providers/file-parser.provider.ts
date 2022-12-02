import { PrismaService } from 'src/prisma/prisma.service';
import * as fs from 'fs';
import * as readline from 'readline';
import * as process from 'process';
import * as path from 'path';
import { Injectable } from '@nestjs/common';
import * as cliProgress from 'cli-progress';

@Injectable()
export class FileParser {
  getFileStream = (file: string): readline.Interface =>
    readline.createInterface({
      input: fs.createReadStream(
        path.join(process.cwd(), 'file-storage', file),
      ),
      crlfDelay: Infinity,
    });

  getStreamLineNumber = async (stream: readline.Interface): Promise<number> => {
    let i = 0;
    for await (const _ of stream) i++;
    return i;
  };

  getFileLineNumber = async (path: string): Promise<number> =>
    this.getStreamLineNumber(this.getFileStream(path));

  parseFileLines = async (
    path: string,
    callback: (line: string, index: number) => Promise<void>,
    opt?: { includeFirst: true },
  ) => {
    const stream = this.getFileStream(path);
    let i = 0;
    for await (const line of stream) {
      if (i === 0 && !opt?.includeFirst) {
        i++;
        continue;
      }
      await callback(line, i);
      i++;
    }
  };
}
