import { AccidentRepository } from '../../../infra/repositories/AccidentRepository/AccidentRepository';
import { ClientRepository } from '../../../infra/repositories/ClientRepository/ClientRepository';
import { ThirdPartyRepository } from '../../../infra/repositories/ThirdPartyRepository/ThirdPartyRepository';
import { VehicleRepository } from '../../../infra/repositories/VehicleRepository/VehicleRepository';
import { ThirdParty } from '../../Entities/ThirdParty';
import { ICreateAccidentEventRequestDTO } from './CreateAccidentEventDTO';

export class CreateAccidentEventUseCase {
  constructor(
    private clientRepository: ClientRepository,
    private accidentRepository: AccidentRepository,
    private thirdPartyRepository: ThirdPartyRepository,
    private vehicleRepository: VehicleRepository,
  ) {}

  async execute(accident: ICreateAccidentEventRequestDTO) {
    const client = await this.clientRepository.findByCpf(accident.clientCpf);

    if (!client) {
      throw new Error('client not found in the database');
    }

    const vehicle = await this.vehicleRepository.save(accident.vehicle);
    const thirdParties = [];

    accident.thirdParties.map(async (thirdParty: ThirdParty) => {
      let thirdPartyData = await this.thirdPartyRepository.findByCpf(thirdParty.cpf);

      if (!thirdPartyData) {
        thirdPartyData =  await this.thirdPartyRepository.save(thirdParty);
      }

      thirdParties.push(thirdPartyData);
    });

    await this.accidentRepository.save(accident, vehicle, thirdParties);
  }
}
