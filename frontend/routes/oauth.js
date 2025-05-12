import express from 'express';
var router = express.Router();
import dotenv from "dotenv"
const dotenv = dotenv.config();
const { OAuth2Client } = require('google-auth-library');

async function getUserData(access_token){
	const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token${access_toke}`);
	const data = await response.json();
	console.log('data',data);
}
	
/* GET home page. */
app.get ('/', async function(req, res, next) {
	const code = req.query.code;
	try {
		const redirectUrl = 'http://127.0.0.1:3000/oauth'
		const oAuth2Client = new OAuth2Client(
		  process.env.CLIENT_GOOGLE_ID,
		  process.env.CLIENT_GOOGLE_SECRET,
		  redirectUrl
		);
		const res = await oAuth2Client.getToken(code);
		await oAuth2Client.setCredentials(res.tokens);
		console.log('Tokens acquired');
		const user = oAuth2Client.credentials;
		await getUserData(user.access_token);
	} catch (err) {
		console.log('Error with signing in Google')
	}

});

module.exports = router;