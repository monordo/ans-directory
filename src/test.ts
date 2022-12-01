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

(async () => {
  // const data = await csvtojsonV2({ delimiter: '|' }).fromFile(
  //   '/home/cariz/Pictures/PS_LibreAcces_202211291200/PS_LibreAcces_Personne_activite_202211290911.csv',
  // );

  // const t = data[0];

  // console.log(Object.keys(t));

  // const past = [];
  // const sames = [];
  // data.map((e, index) => {
  //   bar1.update(index);
  //   if (e["Libellé civilité d'exercice"]) {
  //     console.log('found', e);
  //     sames.push(e['Identifiant PP']);
  //   }
  // });
  // bar1.stop();

  // console.log(sames);

  const verif = (data: string) => (data && data !== '' ? data : undefined);

  // const fileStream = fs.createReadStream(
  //   '/home/cariz/Pictures/PS_LibreAcces_202211291200/PS_LibreAcces_Personne_activite_202211290911.csv',
  // );

  const fileStream = fs.createReadStream(
    '/home/cariz/Pictures/PS_LibreAcces_202211291200/PS_LibreAcces_SavoirFaire_202211290911.csv',
  );

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const past = [];
  const datoum = [];
  const search = 1;
  const count = {};
  let i = 0;
  const bar1 = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic,
  );

  bar1.start(388091, 0);

  const sames = [];
  for await (const line of rl) {
    const t = line.split('|');
    bar1.update(i);
    if (past.includes(t[1])) {
      console.log('found', t, datoum[i]);
      sames.push(t[1]);
    } else {
      past.push(t[1]);
      datoum.push(t);
    }
    i++;
  }

  // for await (const line of rl) {
  //   // Each line in input.txt will be successively available here as `line`.
  //   if (i !== 0) {
  //     const t = line.split('|');
  //     try {
  //       await request('http://localhost:3000/graphql', query, {
  //         healthProfessional: {
  //           PPIdentifierType: verif(t[0]),
  //           PPIdentifier: verif(t[1]),
  //           nationalPPIdentifier: verif(t[2]),
  //           practiceCivilityCode: verif(t[3]),
  //           practiceCivilityLabel: verif(t[4]),
  //           civilityCode: verif(t[5]),
  //           civilityLabel: verif(t[6]),
  //           lastname: verif(t[7]),
  //           firstname: verif(t[8]),
  //         },
  //       });
  //       if (i % 1000 === 0) console.log(i);
  //       await new Promise((resolve) => setTimeout(resolve, 100));
  //     } catch (error) {
  //       console.log(error, i);
  //     }
  //   }

  //   i++;
  //   bar1.update(i);
  // }
  bar1.stop();
})();
