import { getRepository } from 'typeorm';
import { Accident } from '../../../domain/Entities/Accident';
import { Client } from '../../../domain/Entities/Client';
import { ThirdParty } from '../../../domain/Entities/ThirdParty';
import { Vehicle } from '../../../domain/Entities/Vehicle';
import { IAccidentRepository } from './IAccidentRepository';

export class AccidentRepository implements IAccidentRepository {

  async save(client: Client, vehicle: Vehicle, thirdParty: ThirdParty[]): Promise<Accident> {
    try {
      const vehicleRepository = getRepository(Accident);
      const accidentEvent = new Accident();

      accidentEvent.client = client;
      accidentEvent.vehicle = vehicle;
      accidentEvent.thirdParties = thirdParty;

      await vehicleRepository.save(accidentEvent);

      return accidentEvent;

    } catch (error) {
      throw new Error(error);
    }
  }
}
