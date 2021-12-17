import { connectRabbitMQ as conn } from "connectRabbitMQ.js";

async function do_consume() {
    var ch = await conn.createChannel()
    var q = 'test_queue';
    await conn.createChannel();
    await ch.assertQueue(q, {durable: true});
    await ch.consume(q, function (msg) {
        console.log(msg.content.toString());
        ch.ack(msg);
        ch.cancel('myconsumer');
        }, {consumerTag: 'myconsumer'});
    setTimeout( function()  {
        ch.close();
        conn.close();},  500 );
}

do_consume();