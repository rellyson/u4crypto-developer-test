import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
  modelYear: string;

  @Column()
  manufactureYear: string;
}
