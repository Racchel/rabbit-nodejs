import amqplib from "amqplib";

const amqp_url = "amqp://localhost";

class CreateConnectionRabbit {

    constructor() {
        this.conn = await amqplib.connect(amqp_url);
    }
    
}

export { CreateConnectionRabbit };