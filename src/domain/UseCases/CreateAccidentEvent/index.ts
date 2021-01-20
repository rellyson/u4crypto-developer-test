import { AccidentRepository } from '../../../infra/repositories/AccidentRepository/AccidentRepository';
import { ClientRepository } from '../../../infra/repositories/ClientRepository/ClientRepository';
import { ThirdPartyRepository } from '../../../infra/repositories/ThirdPartyRepository/ThirdPartyRepository';
import { VehicleRepository } from '../../../infra/repositories/VehicleRepository/VehicleRepository';
import { CreateAccidentEventController } from './CreateAccidentEventController';
import { CreateAccidentEventUseCase } from './CreateAccidentEventUseCase';

const clientRepository = new ClientRepository();
const accidentRepository = new AccidentRepository();
const thirdPartyRepository = new ThirdPartyRepository();
const vehicleRepository = new VehicleRepository();

export const createAccidentEventUseCase = new CreateAccidentEventUseCase(
  clientRepository,
  accidentRepository,
  thirdPartyRepository,
  vehicleRepository,
);
export const createAccidentEventController = new CreateAccidentEventController();
