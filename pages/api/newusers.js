import React from 'react';
import Mongo from '../../middleware/connectMongo'; 



export default async (req, res) => {
        var client = new Mongo();
        var users = await client.readAll('user', {});
        res.status(200).json(users);
    }