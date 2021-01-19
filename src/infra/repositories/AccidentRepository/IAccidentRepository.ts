import { Accident } from '../../../domain/Entities/Accident';

export interface IAccidentRepository {
  save(accident: Accident): Promise<void>;
}
