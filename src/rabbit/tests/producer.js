import amqplib from "amqplib";

const amqp_url = "amqp://localhost"

async function produce(exch, queue, rkey, msg){
    console.log("Publishing...");

    const conn = await amqplib.connect(amqp_url);
    const ch = await conn.createChannel();

    await ch.assertExchange(exch, 'direct', {durable: true})
        .catch(console.error);
        
    await ch.assertQueue(queue, {durable: true});
    await ch.bindQueue(queue, exch, rkey);
    ch.publish(exch, rkey, Buffer.from(msg));

    setTimeout( function()  {
        ch.close();
        conn.close();
    },  500 );
}

produce();

export { produce };