import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './animals.entity';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalsRepository: Repository<Animal>,
  ) {}

  async create(animal: Animal): Promise<Animal> {
    try {
      return await this.animalsRepository.save(animal);
    } catch (err) {
      throw err;
    }
  }

  async findAll(): Promise<Animal[]> {
    try {
      return await this.animalsRepository.find();
    } catch (err) {
      throw err;
    }
  }
}
