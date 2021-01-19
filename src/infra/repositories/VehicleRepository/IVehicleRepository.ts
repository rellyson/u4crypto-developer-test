import { Vehicle } from "../../../domain/Entities/Vehicle";

export interface IVehicleRepository {
    save(vehicle: Vehicle): Promise<void>
}