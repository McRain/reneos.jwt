import { WebServer } from "@reneos/server"

import jsonwebtoken from "jsonwebtoken"

import { web, jwt } from "./default.config.js"

/**
 * Encode data to token
 */
WebServer.AddRoute(web.encodepath, req => {
	const { secret, expire, ...data } = req.body || req.query
	return jsonwebtoken.sign(data, secret || jwt.default_secret, { expiresIn: expire || jwt.expire })
})

/**
 * Decode token to data
 */
WebServer.AddRoute(web.decodepath, req => {
	/**
	 * @param {string} secret (optionsl) - secret key 
	 * @param {string} data - JWT
	 */
	const { secret, data } = req.body || req.query
	return new Promise(resolve => {
		jsonwebtoken.verify(data.trim(), secret || jwt.default_secret, (err, decoded) => resolve(err?{}:decoded));
	})
})

WebServer.Run(web.port)

console.log(`Start JWT services on port ${web.port}`)