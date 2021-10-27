import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AnimalsService } from './animals.service';
import { AnimalsPostDTO } from './dto/animals.post.dto';
import { EventPattern, Payload } from '@nestjs/microservices';
import { Animal } from './animals.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@Controller('animals')
@ApiTags('animals')
export class AnimalsController {
  constructor(private animalsService: AnimalsService) {}

  @HttpCode(HttpStatus.OK)
  @Post('/')
  async create(
    @Payload() animalsPostDTO: AnimalsPostDTO,
  ): Promise<AnimalsPostDTO> {
    console.log('aaaa');
    const animal = AnimalsPostDTO.toEntity(animalsPostDTO);
    return await this.animalsService.create(animal);
  }

  @Get('/')
  async findAll(): Promise<Animal[]> {
    return await this.animalsService.findAll();
  }
}
