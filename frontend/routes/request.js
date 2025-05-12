import express from "express";
var router = express.Router();
import dotenv from "dotenv"
const dotenv = dotenv.config();
const { OAuth2Client } = require('google-auth-library') 

/* Get users listing */
router.post('/', async function(req, res, next) {
	res.header('Access_Control_Allow_Origin', 'http://localhost:5173');
	res.header("Access-Control-Credentials", 'true');
	res.header('Referrer-Policy', 'no-referrer-when-downgrade');

	const redirectUrl = 'http://127.0.0.1:3000/oauth';

	const oAuth2Client = new OAuth2Client(
		process.env.CLIENT_GOOGLE_ID,
		process.env.CLIENT_GOOGLE_SECRET,
		redirectUrl
	)
	const authorizeUrl = oAuth2Client.generateAuthUrl({
		access_type:'offline',
		scope:'http:www.googleapis.com/auth/userinfo.profile openid',
		prompt: 'consent'
	})
	res.json({url:authorizeUrl})
})

module.export = router;