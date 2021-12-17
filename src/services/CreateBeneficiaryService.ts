import { BeneficiariesRepository } from "../repositories/beneficiaries.repository";

interface IRequest {
    name: string;
    email: string;
    gender: string;
}

class CreateBeneficiaryService {
    constructor( private beneficiariesRepository: BeneficiariesRepository ) {}

    execute({ name, email, gender }:IRequest): void {
        const beneficiaryAlreadyExists = this.beneficiariesRepository.findByName(name);

        if (beneficiaryAlreadyExists) {
          throw new Error("Beneficiary already exists!");
        }

        this.beneficiariesRepository.create({ name, email, gender });
    }
}

export { CreateBeneficiaryService };