import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// rest
import { AppService } from './app.service';
import { AppController } from './app.controller';
// graphql
import { HelloModule } from './hello/hello.module';
import { FrogModule } from './frog/frog.module';

@Module({
  imports: [
    HelloModule,
    FrogModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'dist/schema.gql'
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
