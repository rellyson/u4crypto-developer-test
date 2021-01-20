import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Accident } from './Accident';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id?: number;

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

  @OneToMany((type) => Accident, (accident) => accident.id)
  accidents: Accident[];
}
