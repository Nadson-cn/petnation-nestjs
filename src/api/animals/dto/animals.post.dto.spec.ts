import { AnimalsPostDTO } from './animals.post.dto';
import { AnimalsPostDTOMocks } from './mocks/animals.post.dto.mock';
describe('Testing OrdersPostDTO', () => {
  const animalPost = AnimalsPostDTOMocks.CreateNewAnimalPostDTO();

  const animalResponse = {
    name: animalPost.name,
    species: animalPost.species,
    breed: animalPost.breed,
    description: animalPost.description,
    sex: animalPost.sex,
    age: animalPost.age,
    personality: animalPost.personality,
    user_id: animalPost.user_id,
  };

  it('Testing OrdersPostDTO', async () => {
    const animal = AnimalsPostDTO.toEntity(animalPost);
    expect(animal).toEqual(animalResponse);
  });
});
