import { Client } from '../../Entities/Client';
import { ThirdParty } from '../../Entities/ThirdParty';
import { Vehicle } from '../../Entities/Vehicle';

export interface ICreateAccidentEventRequestDTO {
  client: {
    cpf: string;
  };
  vehicle: Vehicle;
  thirdParties: ThirdParty[];
}
