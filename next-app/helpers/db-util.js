

export async function connectDatabase() {

    const client = await MongoClient.connect(
        'mongodb+srv://mmaphokengsenne:0739374400@Phokie@cluster0.xjtiyvh.mongodb.net/events?retryWrites=true&w=majority&appName=AtlasApp'
    );

    return client;
}
export async function insertDocument (client, collection, document) {
    const db = client.db('events')
    await db.collection('newsletter').insertOne(document);

}