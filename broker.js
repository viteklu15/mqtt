function brocer1() {

    const mosca = require('mosca')
    const broker = new mosca.Server({ port: 9000 })

    broker.on('ready', () => {
        console.log('broker_redi')
    })

    broker.on('clientConnected', (client) => {
        console.log("client" + client.id)
    })

    broker.on('published', (packet, client) => {
        console.log(packet.topic + " " + packet.payload.toString());
        // console.log(client);
    })
}

module.exports = brocer1;