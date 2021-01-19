import { ThirdParty } from "../../../domain/Entities/ThirdParty";

export interface IThirdPartyRepository {
    save(thirdParty: ThirdParty): Promise<void>
}