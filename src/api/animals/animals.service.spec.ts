import { ConflictException, HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { Animal } from './animals.entity';
import { AnimalsService } from './animals.service';
import { AnimalsMocks } from './mocks/animals.entity.mock';

describe('Testing Animals Service', () => {
  let animalsService: AnimalsService;
  let animalsRepository: Repository<Animal>;

  beforeEach(async () => {
    animalsRepository = new Repository<Animal>();
    animalsService = new AnimalsService(animalsRepository);

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AnimalsService,
        {
          provide: getRepositoryToken(Animal),
          useValue: {
            save: jest.fn(),
          },
        },
      ],
    }).compile();
  });

  const animal = AnimalsMocks.CreateNewAnimal();

  const animalResponse = {
    id: 1,
    name: animal.name,
    species: animal.species,
    breed: animal.breed,
    description: animal.description,
    sex: animal.sex,
    age: animal.age,
    personality: animal.personality,
    user_id: animal.user_id,
  };

  it('Testing method save()', async () => {
    animalsRepository.save = jest.fn().mockImplementation(() => animalResponse);

    expect(await animalsService.create(animal)).toEqual(animalResponse);
  });

  it('Testing method save(), throwing an exception', async () => {
    try {
      jest
        .spyOn(animalsRepository, 'save')
        .mockRejectedValueOnce(new ConflictException());
      await animalsService.create(animal);
    } catch (err) {
      expect(err).toBeInstanceOf(ConflictException);
    }
  });
});
