import { AnimalsPostDTO } from '../animals.post.dto';
import * as faker from 'faker';

export class AnimalsPostDTOMocks {
  public static CreateNewAnimalPostDTO(): AnimalsPostDTO {
    return {
      name: faker.random.number(10),
      age: faker.animal.dog(),
      breed: 'Pitbull',
      description: 'Brincalhão',
      id: faker.random.number(10),
      user_id: 1,
      personality: 1,
      sex: 'Macho',
      species: 'Cachorro',
    };
  }
}
