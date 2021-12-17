import { Router } from "express";
import { BeneficiariesRepository } from "../repositories/beneficiaries.repository";
import { CreateBeneficiaryService } from "../services/CreateBeneficiaryService";

const BeneficiariesRoutes = Router();
const beneficiariesRepository = new BeneficiariesRepository();

BeneficiariesRoutes.post("/", (request, response) => {
    const { name, email, gender } = request.body;    

    const beneficiariesService = new CreateBeneficiaryService(beneficiariesRepository); 

    beneficiariesService.execute({ name, email, gender })

    return response.status(201).send();
})

BeneficiariesRoutes.get("/", (request, response) => {
    const all = beneficiariesRepository.list();

    return response.json(all);
})

export { BeneficiariesRoutes };