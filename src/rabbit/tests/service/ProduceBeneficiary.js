import { sendToQueue } from "../connectionRabbit";

export default function produceBeneficiary(data) {
  return sendToQueue('beneficiary', data);
}
