import { Beneficiary } from "../model/Beneficiary";
import { ICreateBeneficiaryDTO } from "../dto/beneficiary.dto";

class BeneficiariesRepository {
    private beneficiary: Beneficiary[];

    constructor() {
        this.beneficiary = [];
    }

    create({ name, email, gender }: ICreateBeneficiaryDTO): void {
        const beneficiary= new Beneficiary();

        Object.assign(beneficiary, {
            name,
            email,
            gender,
            created_at: new Date()
        })

        this.beneficiary.push(beneficiary);
    }

    list(): Beneficiary[] {
        return this.beneficiary;
    }

    findByName(name: string): Beneficiary {
        const beneficiary = this.beneficiary.find(
            (beneficiary) => beneficiary.name === name 
        );

        return beneficiary;
    }
}

export { BeneficiariesRepository };    