// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();

import * as csvtojsonV2 from 'csvtojson/v2';
import * as cliProgress from 'cli-progress';
import * as fs from 'fs';
import * as readline from 'readline';

import { request, gql } from 'graphql-request';

const query = gql`
  mutation updateOrCreateHealthProfessional(
    $healthProfessional: CreateHealthProfessionalInputDto!
  ) {
    updateOrCreateHealthProfessional(healthProfessional: $healthProfessional) {
      id
      createdAt
      updatedAt
      PPIdentifierType
      PPIdentifier
      nationalPPIdentifier
      practiceCivilityCode
      practiceCivilityLabel
      civilityCode
      civilityLabel
      lastname
      firstname
    }
  }
`;

const knowHowQuery = gql`
  mutation getOrCreateKnowHow($knowHow: CreateKnowHowInputDto!) {
    getOrCreateKnowHow(knowHow: $knowHow) {
      id
      createdAt
      updatedAt
      knowHowTypeCode
      knowHowTypeLabel
      knowHowCode
      knowHowLabel
    }
  }
`;

(async () => {
  const verif = (data: string) => (data && data !== '' ? data : undefined);

  const fileStream = fs.createReadStream(
    '/home/cariz/Pictures/PS_LibreAcces_202211291200/PS_LibreAcces_SavoirFaire_202211290911.csv',
  );

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let i = 0;
  const bar1 = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic,
  );

  bar1.start(388091, 0);

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    if (i !== 0) {
      const t = line.split('|');
      try {
        const data = await request('http://localhost:3000/graphql', query, {
          healthProfessional: {
            PPIdentifierType: verif(t[0]),
            PPIdentifier: verif(t[1]),
            nationalPPIdentifier: verif(t[2]),
            lastname: verif(t[3]),
            firstname: verif(t[4]),
          },
        });
        const hp = data?.updateOrCreateHealthProfessional;
        if (!hp) throw new Error('Hp not created');
        await request('http://localhost:3000/graphql', knowHowQuery, {
          knowHow: {
            knowHowTypeCode: verif(t[9]),
            knowHowTypeLabel: verif(t[10]),
            knowHowCode: verif(t[11]),
            knowHowLabel: verif(t[12]),
            healthProfessionalId: hp.id,
          },
        });
      } catch (error) {
        console.log(error, i);
      }
    }
    i++;
    bar1.update(i);
    await new Promise((resolve) => setTimeout(resolve, 5));
  }
  bar1.stop();
})();
