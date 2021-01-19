import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToMany } from 'typeorm';
import { Accident } from './Accident';

@Entity()
@Unique(['cpf', 'cnh'])
export class ThirdParty {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  cnh: string;

  @ManyToMany((type) => Accident, (accident) => accident.thirdParties)
  accidents: Accident[];
}
