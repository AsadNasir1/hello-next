import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
//import React from 'react';
//import Mongo from '../../middleware/connectMongo';

const handler = nextConnect();

handler.use(middleware);

 handler.get(async (req, res) => {

    let doc = await req.db.collection('user').find({}).toArray();
    console.log(doc);
    res.json(doc);
}); 





export default handler; 





/* 
    export default (req, res) => {
        var client = new Mongo();
        var users = client.getAll('user', {});
        res.status(200).json(users);
    } */