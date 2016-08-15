// This is a server for my Steam calls
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const APICALL = require('request');
const axios = require('axios')
const app = express();
const port = process.env.PORT || 8080;
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', function(req, res) {
	res.json({ message: 'This is a random message you get' })
})

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/match/:id/')
    .get(function(req, res) {
    	const url = 'https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id=' + req.params.id + '&key=18FD28D1271106499AB022B2217EBA62';

		axios.get(url).then(function(response) {
			res.json(response.data.result);
		});

    });

app.use(cors());
app.use('/api', router);
app.listen(port);
console.log('Listening to port: ' + port)