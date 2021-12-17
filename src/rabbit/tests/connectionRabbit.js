var amqp = require('amqplib');

const RABBIT_URL = 'amqp://localhost'

const connect = async () => {
  try {
    const connection = await amqp.connect(RABBIT_URL);
    console.log("🚀 Connected!");
    return await connection.createChannel();
    
  } catch (err) {
    console.error('🔥 Erro ao conectar', err);
  }
}

const createQueue = (channel, queue) => {
  return new Promise((resolve, reject) =>{
    channel.assertQueue(queue, { durable: true })
    resolve(channel)
  }) 
}

const sendToQueue = async (queue, msg) => {
  try {
    const channel = await connect();
    const channel_2 = await createQueue(channel, queue);

    console.log("-> sending messages...");
    return channel_2.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));
    
  } catch (err) {
    console.error('🔥 Erro ao enviar', err);
  }
}

module.exports.sendToQueue = sendToQueue
