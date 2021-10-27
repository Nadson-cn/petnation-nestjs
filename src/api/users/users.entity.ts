import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Animal } from '../animals/animals.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  cpf: string;

  @Column()
  cnpj: string;

  @Column()
  cep: string;

  @Column()
  numberHouse: number;

  @Column()
  phoneNumber: number;

  @Column()
  type: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @OneToMany((type_) => Animal, (animals) => animals.user)
  animals: Animal[];

  constructor(
    id: number,
    name: string,
    cpf: string,
    cnpj: string,
    cep: string,
    numberHouse: number,
    phoneNumber: number,
    type: string,
    username: string,
    password: string,
    email: string,
  ) {
    super();
    this.id = id;
    this.name = name;
    this.cpf = cpf;
    this.cnpj = cnpj;
    this.cep = cep;
    this.numberHouse = numberHouse;
    this.phoneNumber = phoneNumber;
    this.type = type;
    this.username = username;
    this.password = password;
    this.email = email;
  }
}
