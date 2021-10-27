import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Personality } from '../personalities/personalities.entity';
import { User } from '../users/users.entity';

@Entity()
export class Animal extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  species: string;

  @Column()
  breed: string;

  @Column()
  description: string;

  @Column()
  sex: string;

  @Column()
  age: number;

  personality: number;

  @Column()
  user_id: number;

  @ManyToOne((type) => User)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;

  @ManyToMany(() => Personality, (personality) => personality.animals)
  personalities: Personality[];

  constructor(
    id: number,
    name: string,
    species: string,
    breed: string,
    description: string,
    sex: string,
    age: number,
    user: User,
  ) {
    super();
    this.id = id;
    this.name = name;
    this.species = species;
    this.breed = breed;
    this.description = description;
    this.sex = sex;
    this.age = age;
    this.user = user;
  }
}
