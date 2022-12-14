import Clarifai from 'clarifai';

const app = new Clarifai.App({
    apiKey: '7d39e58d5cad4043b1e8eacb090b43ff'
  });

const handleApiCall = (req, res) => {
	app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
	.then(data=> {
		res.json(data);
	})
	.catch(err=> res.status(400).json('unable to work with API'))
};

const handlerImage = (req, res, db)=>{
const { id }= req.body;
	db('users').where('id', '=', id)
	.increment('entries', 1)
	.returning('entries')
	.then(entries=> {
		res.json(entries[0].entries);
	}).catch(err=> {res.status(400).json("unable to get entries")})
};

export {handlerImage};
export {handleApiCall};