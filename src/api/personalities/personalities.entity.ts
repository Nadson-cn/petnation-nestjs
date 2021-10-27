import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Animal } from '../animals/animals.entity';

@Entity()
export class Personality extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToMany(() => Animal, (animal) => animal.personalities)
  @JoinTable({
    name: 'animal_personality',
    joinColumn: {
      name: 'personality_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'animal_id',
      referencedColumnName: 'id',
    },
  })
  animals: Animal[];
}
