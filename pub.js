function pubF() {
    const express = require('express')
    const app = express()
    const portserver = 80
    const { connect } = require('mqtt')
    const mqtt = require('mqtt')

    const pub = mqtt.connect('mqtt://localhost:9000')

    pub.on('connect', () => {
        //console.log("подключились ")
    })


    app.get('/', (req, res) => { // прослушиваем какая страница пришла 
        pub.publish('topic_test', 'glavn') // отправка сообщений для mqtt
        let result = "glavn"
        res.send(result)
    })

    app.get('/test', (req, res) => { // прослушиваем какая страница пришла 

        pub.publish('topic', 'tttttt') // отправка сообщений для mqtt
        let result = "test"
        res.send(result)
    })


    app.listen(portserver, () => { // запускаем сервер 
        console.log(`server  ${portserver}`)
    })
}

module.exports = pubF;