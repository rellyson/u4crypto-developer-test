import { Vehicle } from "../../../domain/Entities/Vehicle";
export interface IVehicleRepository {
    save(vehicle: Vehicle): Promise<Vehicle>;
    findByRenavam(renavam: string): Promise<Vehicle> ;
}