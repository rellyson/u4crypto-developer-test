import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Unique,
} from 'typeorm';
import { Accident } from './Accident';

@Entity()
@Unique(['renavam'])
export class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  renavam: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  manufactureYear: string;

  @Column()
  modelYear: string;

  @OneToMany((type) => Accident, (accident) => accident.vehicle)
  accidents: Accident[];

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
