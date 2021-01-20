import { Accident } from '../../Entities/Accident';

export interface ICreateClientRequestDTO {
  id?: string;
  name: string;
  rg: string;
  cpf: string;
  cnh: string;
  email: string;
  address: string;
  city: string;
  federalUnit: string;
  accidents?: Accident[];
}
