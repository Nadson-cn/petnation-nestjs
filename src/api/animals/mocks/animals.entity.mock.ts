import * as faker from 'faker';
import { Animal } from '../animals.entity';

export class AnimalsMocks {
  public static CreateNewAnimal(): Animal {
    return {
      id: faker.random.number(10),
      name: faker.random.number(10),
      age: faker.animal.dog(),
      breed: 'Pitbull',
      description: 'Brincalhão',
      user_id: 1,
      personality: 1,
      sex: 'Macho',
      species: 'Cachorro',
    } as Animal;
  }
}
