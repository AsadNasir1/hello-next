import nextConnect from 'next-connect';
import middleware from '../../middleware/database';



const handler = nextConnect();

handler.use(middleware);

 handler.get(async (req, res) => {

    var email = req.query.email;
    console.log(email);
    let doc = await req.db.collection('user').deleteOne({ email: email });
    console.log(doc);
    res.json(doc);
}); 





export default handler; 