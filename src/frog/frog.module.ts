import { Module } from '@nestjs/common';
import { FrogResolver } from './frog.resolver';

@Module({
  providers: [FrogResolver],
})
export class FrogModule {}
