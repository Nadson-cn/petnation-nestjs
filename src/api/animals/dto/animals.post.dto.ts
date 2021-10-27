import { ApiProperty } from '@nestjs/swagger';
import { Animal } from '../animals.entity';

export class AnimalsPostDTO {
  id?: number;

  @ApiProperty({ example: 'Thor' })
  name: string;

  @ApiProperty({ example: 'Cachorro' })
  species: string;

  @ApiProperty({ example: 'PitBull' })
  breed: string;

  @ApiProperty({ example: 'Muito brincalhão' })
  description: string;

  @ApiProperty({ example: 'Macho' })
  sex: string;

  @ApiProperty({ example: 3 })
  age: number;

  @ApiProperty({ example: 3 })
  personality: number;

  @ApiProperty({ example: 1 })
  user_id: number;

  public static toEntity(animalsPostDTO: AnimalsPostDTO): Animal {
    return {
      name: animalsPostDTO.name,
      species: animalsPostDTO.species,
      breed: animalsPostDTO.breed,
      description: animalsPostDTO.description,
      sex: animalsPostDTO.sex,
      age: animalsPostDTO.age,
      personality: animalsPostDTO.personality,
      user_id: animalsPostDTO.user_id,
    } as Animal;
  }
}
