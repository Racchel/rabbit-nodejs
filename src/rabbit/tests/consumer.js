import amqplib from "amqplib";

const amqp_url = "amqp://localhost"

async function consume() {
    var conn = await amqplib.connect(amqp_url, "heartbeat=60");
    var ch = await conn.createChannel()
    var q = 'test_queue';
    
    await conn.createChannel();
    await ch.assertQueue(q, {durable: true});
    
    await ch.consume(q, function (msg) {
        console.log(msg.content.toString());
        ch.ack(msg);
        ch.cancel('myconsumer');
    }, 
    {
        consumerTag: 'beneficiaryConsumer'
    });

    setTimeout( function()  {
        ch.close();
        conn.close();
    },  500 );
}

consume();
