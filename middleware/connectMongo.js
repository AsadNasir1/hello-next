import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb+srv://sa:Password2000@hello-next-vot56.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    });

var dbName = 'hello-next-db';

async function readAll(collection, query)
{
    if (!client.isConnected()) await client.connect();    
    const db = client.db(dbName);    
    const col = db.collection(collection);    
    var data = await col.find(query).toArray();    
    client.close();
    return data;
}

async function one(collection, query)
{
    if (!client.isConnected()) await client.connect();    
    const db = client.db(dbName);    
    const col = db.collection(collection);    
    var data = await col.findOne(query);    
    client.close();
    return data;
}

async function deleteDoc(collection, query)
{    
    if (!client.isConnected()) await client.connect();
    const db = client.db(dbName);    
    const col = db.collection(collection);    
    var res = await col.findOneAndDelete(query);
    console.log(res);    
    client.close();
    //return data;
}


class ConnectMongo{
    
    constructor(props){
        
        console.log(props);

        if (props != null && props != undefined && props != '')
        {
            dbName = props;
            console.log('New db name = ' + dbName);
        }        
    }

    readAll(collection, query) {
        return readAll(collection, query);
    }

    one(collection, query) {
        return one(collection, query);
    }

    deleteDoc() {
        return deleteDoc(collection, query);
    }

}

export default ConnectMongo;