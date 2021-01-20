import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Accident } from './Accident';

@Entity()
@Unique(['cpf', 'cnh'])
export class ThirdParty {
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

  @ManyToMany((type) => Accident)
  accidents: Accident[];

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @Column({ type: 'boolean', default: false })
  migratedToClient: boolean;

  @DeleteDateColumn()
  deletedAt?: Date;
}
