import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
  JoinColumn,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Client } from './Client';
import { ThirdParty } from './ThirdParty';
import { Vehicle } from './Vehicle';

@Entity()
export class Accident {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @ManyToOne((type) => Client)
  @JoinColumn()
  client: Client;

  @ManyToOne((type) => Vehicle)
  @JoinColumn()
  vehicle: Vehicle;

  @ManyToMany((type) => ThirdParty)
  @JoinTable()
  thirdParties: ThirdParty[];

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
