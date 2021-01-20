import { Accident } from '../../../domain/Entities/Accident';
import { ThirdParty } from '../../../domain/Entities/ThirdParty';
import { Vehicle } from '../../../domain/Entities/Vehicle';

export interface IAccidentRepository {
  save(accident: Accident, vehicle: Vehicle, thirdParty: ThirdParty[]): Promise<Accident>;
}
