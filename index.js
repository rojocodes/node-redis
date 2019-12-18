var redis = require('./modules/connect')
redis.setKey("testKey", "test Value")

redis.getKey("testKey").then(data => {
    console.log("Value from redis:", data);
})