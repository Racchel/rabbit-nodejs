import amqp from "amqplib";

var connection;

async function connectRabbitMQ(){
    try {
        connection = await amqp.connect("amqp://localhost");
        console.log("🚀 Connect to RabbitMQ success!");

        connection.on("error", function(err){
            console.error("🔥 Error connecting!", err);
            setTimeout(connectRabbitMQ, 10000);
        });

        connection.on("close", function() {
            console.log("🔥 Connection to RabbitQM closed!");
            setTimeout(connectRabbitMQ, 10000);
        });

        return await connection.createChannel();
    }   
    
    catch (err) {
        console.error(err);
        setTimeout(connectRabbitMQ, 10000);
    }
}

connectRabbitMQ();

export { connectRabbitMQ };