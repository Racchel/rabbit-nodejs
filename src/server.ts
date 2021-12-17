import express from 'express';
import { BeneficiariesRoutes } from "./routes/beneficiaries.routes";

const app = express();

app.use(express.json());

app.use("/beneficiaries", BeneficiariesRoutes);

app.listen(3333, () => {
    console.log("🚀 Server is running");
});