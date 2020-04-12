import { MongoClient } from 'mongodb';


class ConnectMongo{
    constructor() {        
        this.client = new MongoClient('mongodb+srv://sa:Password2000@hello-next-vot56.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
            });
    }

    isConnected(){
        return (!this.client.isConnected());
    }
    
    getAll(collection, query) {
        if (!this.client.isConnected()) {
            var newClient = new MongoClient('mongodb+srv://sa:Password2000@hello-next-vot56.mongodb.net/test?retryWrites=true&w=majority', {
                useNewUrlParser: true,
                useUnifiedTopology: true, 
                });
            console.log('getAll is fired');
            newClient.connect();
            console.log(this.client.isConnected());
            newClient.db('hello-next-db');
        }
        
        return this.client.db.collection(collection).find(query).toArray();            
    }

}

export default ConnectMongo;