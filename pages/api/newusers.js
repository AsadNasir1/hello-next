import React from 'react';
import Mongo from '../../middleware/connectMongo'; 



export default (req, res) => {
        var client = new Mongo();
        var users = client.getAll('user', {});
        res.status(200).json(users);
    } 