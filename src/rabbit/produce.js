const amqplib = require('amqplib');

import { connectRabbitMQ as conn } from "connectRabbitMQ.js";

async function produce(){
    console.log("Publishing");

    var ch = await conn.createChannel()
    var exch = "test_exchange";
    var q = "test_queue";
    var rkey = "test_route";
    var msg = "Hello World!";

    await ch.assertExchange(exch, 'direct', {durable: true}).catch(console.error);
    await ch.assertQueue(q, {durable: true});
    await ch.bindQueue(q, exch, rkey);
    await ch.publish(exch, rkey, Buffer.from(msg));

    setTimeout( function()  {
        ch.close();
        conn.close();
    },  500 );
}

produce();