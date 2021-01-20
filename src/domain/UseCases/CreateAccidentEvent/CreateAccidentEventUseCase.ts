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

  async execute(data: ICreateAccidentEventRequestDTO) {
    const client = await this.clientRepository.findByCpf(data.client.cpf);

    if (!client) {
      throw new Error('client not found in the database');
    }

    const vehicle = await this.vehicleRepository.save(data.vehicle);
    const thirdParties = Array<ThirdParty>();

    await Promise.all(
      data.thirdParties.map(async (thirdParty: ThirdParty) => {
        const thirdPartyData = await this.thirdPartyRepository.findByCpf(thirdParty.cpf);

        if (thirdPartyData) {
          thirdParties.push(thirdPartyData);
        } else {
          const newThirdPartyData = await this.thirdPartyRepository.save(thirdParty);
          thirdParties.push(newThirdPartyData);
        }
      }),
    );

    const accident = await this.accidentRepository.save(client, vehicle, thirdParties);
    await this.clientRepository.insertAccident(client, accident);
  }
}
