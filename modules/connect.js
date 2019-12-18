var redis = require('redis');
var configs = require('../configs/redis.json')
var client = redis.createClient(configs.port, configs.host);


client.on('connect', function () {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

function setKey(key, value) {
    client.set(key, value, redis.print);
}

function getKey(key) {
    var promise = new Promise((resolve, reject) => {
        client.get(key, function (error, result) {
            if (error) {
                console.log(error);
                reject();
            }
            console.log('GET result ->' + result);
            resolve(result);
        });
    })
    return promise;

}
module.exports = {
    setKey,
    getKey
}