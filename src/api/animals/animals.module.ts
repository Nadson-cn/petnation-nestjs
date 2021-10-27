import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { AnimalsController } from './animals.controller';
import { Animal } from './animals.entity';
import { AnimalsService } from './animals.service';

@Module({
  imports: [TypeOrmModule.forFeature([Animal])],
  controllers: [AnimalsController],
  providers: [AnimalsService],
})
export class AnimalsModule {}
