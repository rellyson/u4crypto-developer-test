import { ThirdParty } from '../../Entities/ThirdParty';
import { Vehicle } from '../../Entities/Vehicle';

export interface ICreateAccidentEventRequestDTO {
  clientCpf: string;
  vehicle: Vehicle;
  thirdParties: ThirdParty[];
}
