import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Accident } from './Accident';

@Entity()
@Unique(['rg', 'cpf', 'cnh', 'email'])
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @Column()
  rg: string;

  @Column()
  cpf: string;

  @Column()
  cnh: string;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  federalUnit: string;

  @OneToMany((type) => Accident, (accident) => accident.client)
  accidents?: Accident[];

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
