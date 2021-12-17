import produceBeneficiary from "./services/ProduceBeneficiary.js";

  if (produceBeneficiary(req.body)) {
    const { name } = req.body;
    
    res.sendStatus(200)
  }
  else {
    res.sendStatus(500)
  }
    

