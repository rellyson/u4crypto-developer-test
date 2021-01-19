import { ClientRepository } from "../../../infra/repositories/ClientRepository/ClientRepository";
import { ICreateClientRequestDTO } from "./CreateClientDTO";

export class CreateClientUseCase {
    constructor(private clientRepository: ClientRepository) {}
    async execute(client: ICreateClientRequestDTO) {
        const clientExists = await this.clientRepository.findByCpf(client.cpf);

        if (clientExists) {
            throw new Error('client provided already exists on database');
        }

        await this.clientRepository.save(client);
    }
}