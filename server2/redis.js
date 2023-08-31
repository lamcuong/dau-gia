
const redis = require('redis');


// const client = redis.createClient();
const test = async()=>{
    // const client = redis.createClient({
        // host: "103.61.122.173",
        // username:'auction',
        // password: 'Auction@123!@#',
    // });
    const client =redis.createClient({
        host: "103.61.122.173",
        password: 'Auction@123!@#',
    })
    // console.log(client.isOpen)
    // console.log(client)
   // const client = redis.createClient({
    // client.on('error', (err) => console.log('Redis Client Error', err));

// client.on('connect', (err) => console.log('Redis 12 Error', err));
    //     // url: 'redis://auction:Auction@123!@#@awesome.redis.server:6380'
    //     url:'redis://alice:foobared@103.61.122.173'
    // })
   
    // client.on('error', err => console.log('Redis Client Error', err));
    await client.connect()
    const a = await client.get('auctionauthencationRooms')
    console.log('123',a)
    
    

}
test()