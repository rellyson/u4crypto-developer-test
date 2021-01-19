import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { ThirdParty } from './ThirdParty';
import { Vehicle } from './Vehicle';

@Entity()
export class Accident {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  clientCpf: string;

  @Column()
  vehicle: Vehicle;

  @ManyToMany((type) => ThirdParty, (thirdParty) => thirdParty.cnh)
  @JoinTable()
  thirdParties: ThirdParty[];
}
