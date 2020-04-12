import nextConnect from 'next-connect';
import middleware from '../../middleware/database';


const handler = nextConnect();

handler.use(middleware);


handler.delete(async (req, res) => {
    var deleteQuery = { _id: '' };
    let doc = await req.db.collection('user').deleteOne(deleteQuery);
    console.log(doc);
    res.json(doc);
});

export default handler; 