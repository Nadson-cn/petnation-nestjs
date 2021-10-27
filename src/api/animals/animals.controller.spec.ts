import { Repository } from 'typeorm';
import { AnimalsController } from './animals.controller';
import { Animal } from './animals.entity';
import { AnimalsService } from './animals.service';
import { AnimalsPostDTOMocks } from './dto/mocks/animals.post.dto.mock';

describe('Testing Animals Controller', () => {
  let animalsController: AnimalsController;
  let animalsService: AnimalsService;
  let animalsRepository: Repository<Animal>;

  beforeEach(async () => {
    animalsRepository = new Repository<Animal>();
    animalsService = new AnimalsService(animalsRepository);
    animalsController = new AnimalsController(animalsService);
  });

  const animalPost = AnimalsPostDTOMocks.CreateNewAnimalPostDTO();

  const animalResponse = {
    id: 1,
    name: animalPost.name,
    species: animalPost.species,
    breed: animalPost.breed,
    description: animalPost.description,
    sex: animalPost.sex,
    age: animalPost.age,
    personality: animalPost.personality,
    user_id: animalPost.user_id,
  };

  it('Testing method save()', async () => {
    animalsService.create = jest.fn().mockImplementation(() => animalResponse);

    expect(await animalsController.create(animalPost)).toEqual(animalResponse);
  });
});
