import { getRepository } from 'typeorm';
import { ThirdParty } from '../../../domain/Entities/ThirdParty';
import { IThirdPartyRepository } from './IThirdPartyRepository';

export class ThirdPartyRepository implements IThirdPartyRepository {
  async save(data: ThirdParty): Promise<ThirdParty> {
    try {
      const thirdPartyRepository = getRepository(ThirdParty);
      const thirdParty = new ThirdParty();
      Object.assign(thirdParty, data);
      await thirdPartyRepository.save(thirdParty);

      return thirdParty;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findByCpf(cpf: string): Promise<ThirdParty> {
    try {
      const thirdPartyRepository = getRepository(ThirdParty);
      const thirdParty = await thirdPartyRepository.findOne({ cpf });

      return thirdParty;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const thirdPartyRepository = getRepository(ThirdParty);

      await thirdPartyRepository.softDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async migrate(id: string): Promise<void> {
    try {
      const thirdPartyRepository = getRepository(ThirdParty);
      const thirdPartyToMigrate = await thirdPartyRepository.findOne({ id });
      thirdPartyToMigrate.migratedToClient = true;

      await thirdPartyRepository.save(thirdPartyToMigrate);
      await thirdPartyRepository.softDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
