import { Accident } from '../../../domain/Entities/Accident';
import { Client } from '../../../domain/Entities/Client';
import { ThirdParty } from '../../../domain/Entities/ThirdParty';
import { Vehicle } from '../../../domain/Entities/Vehicle';

export interface IAccidentRepository {
  save(client: Client, vehicle: Vehicle, thirdParty: ThirdParty[]): Promise<Accident>;
}
