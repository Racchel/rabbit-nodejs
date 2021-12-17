import { v4 as uuidv4 } from "uuid";

class Beneficiary {

    id?: string;
    name: string;
    email: string;
    gender: string;
    beneficiaryType: string;
    cpf: string;

    address: string;
    district: string;
    city: string;
    uf: string;
    country: string;

    ddd: number;
    phone: number;
    ramal: string;

    bankcode: string;
    agency: string;
    digitAgency: string;
    checkingAccount: string;
    digitcheckingAccount: string;
    accountType: string;

    registrationcode: string;
    inssCode?: string;                       // - opcional
    inssType?: string;                       // - opcional

    birthDate: Date;
    countryBirth?: string;                   // - opcional
    birthState?: string;                     // - opcional
    birthCity?: string;                      // - opcional
    retirementDate: string;
    
    cnpj?: string;                           // - AVP apenas
    FoundersName?: string;                   // - AVP apenas
    covenantCode?: string;                   // - AVP apenas
    branchCode?: string;                     // - AVP apenas

    taxRegime: string;
    proposalNumber: string;
    salesStructureCode: string;
    reserveValue: number
    productCode: string

    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Beneficiary };
