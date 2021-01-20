import { getRepository } from 'typeorm';
import { ThirdParty } from '../../../domain/Entities/ThirdParty';
import { IThirdPartyRepository } from './IThirdPartyRepository';

export class ThirdPartyRepository implements IThirdPartyRepository {
  async save(data: ThirdParty): Promise<ThirdParty> {
    try {
      const tirdPartyRepository = getRepository(ThirdParty);
      const thirdParty = new ThirdParty();
      Object.assign(thirdParty, data);
      await tirdPartyRepository.save(thirdParty);

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
}
