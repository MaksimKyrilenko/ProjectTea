var MongoClient = require('mongodb').MongoClient
const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
        try {
            await client.connect();
            var database = client.db("threeteas");
            database.dropDatabase()
            database = client.db("threeteas");
            const teas = database.collection("teas");
            const result = await teas.insertOne({name:"Пуэр"});
            console.log(`${result} documents were inserted`);
    } finally {
        await client.close();
    }
}
run()   