import { getRepository } from 'typeorm';
import { Accident } from '../../../domain/Entities/Accident';
import { ThirdParty } from '../../../domain/Entities/ThirdParty';
import { Vehicle } from '../../../domain/Entities/Vehicle';
import { IAccidentRepository } from './IAccidentRepository';

export class AccidentRepository implements IAccidentRepository {

  async save(accident: Accident, vehicle: Vehicle, thirdParty: ThirdParty[]): Promise<Accident> {
    try {
      const vehicleRepository = getRepository(Accident);
      const accidentEvent = new Accident();

      accidentEvent.clientCpf = accident.clientCpf;
      accidentEvent.vehicle = vehicle;
      accidentEvent.thirdParties = thirdParty;

      await vehicleRepository.save(accidentEvent);

      return accidentEvent;

    } catch (error) {
      throw new Error(error);
    }
  }
}
