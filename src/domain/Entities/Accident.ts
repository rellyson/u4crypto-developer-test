import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { ThirdParty } from './ThirdParty';
import { Vehicle } from './Vehicle';

@Entity()
export class Accident {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  clientCpf: string;

  @ManyToOne(type => Vehicle, vehicle => vehicle.renavam)
  vehicle: Vehicle;

  @ManyToMany((type) => ThirdParty, (thirdParty) => thirdParty.cnh)
  @JoinTable()
  thirdParties: ThirdParty[];
}
