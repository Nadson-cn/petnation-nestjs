import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personality } from './personalities.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Personality])],
  controllers: [],
  providers: [],
})
export class PersonalityModule {}
