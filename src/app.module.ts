import { ExecutionContext, Injectable, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AccountModule } from './account/account.module';
import { GqlExecutionContext, GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'path';
import { KnowHowModule } from './know-how/know-how.module';
import { HealthProfessionalModule } from './health-professional/health-professional.module';
import { BitfieldManagerModule } from '@open-monordo/bitfield-permission-manager';
import { ProfessionModule } from './profession/profession.module';
import { StuctureModule } from './stucture/stucture.module';
import { PharmacistInformationModule } from './pharmacist-information/pharmacist-information.module';
import { UpdateModule } from './update/update.module';

@Module({
  imports: [
    PrismaModule,
    AccountModule,
    BitfieldManagerModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      context: ({ req }) => ({ ...req }),
      // plugins: [ApolloServerPluginLandingPageLocalDefault()],
      formatError: (error) => {
        const code = error.extensions?.code || 'SERVER_ERROR';
        const graphQLFormattedError = {
          message: error.message,
          code: error.extensions?.exception?.['code'] ?? code,
          details: error.extensions?.exception?.['details'],
        };
        return graphQLFormattedError;
      },
    }),
    KnowHowModule,
    HealthProfessionalModule,
    ProfessionModule,
    StuctureModule,
    PharmacistInformationModule,
    UpdateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
