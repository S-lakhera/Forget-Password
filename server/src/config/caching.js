const Redis = require("ioredis")

let cacheInstance = new Redis({
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD
})

module.exports = cacheInstance;