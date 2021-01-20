import { Accident } from "../../Entities/Accident";

export interface ICreateClientRequestDTO {
  id?: string;
  name: string;
  email: string;
  address: string;
  cpf: string;
  cnh: string;
  accidents?: Accident[]
}
