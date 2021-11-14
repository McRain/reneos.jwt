/**
 * Rename this file to ./config.js
 * Edit app.js : 
 *  	change import { web, jwt } from "./default.config.js"  to
 * 		import { web, jwt } from "./config.js"		
 */
const web={
	port:22001,
	encodepath:"/encode",
	decodepath:"/decode"
}

const jwt = {
	default_secret:"kOInVHTKo8JoFkCyVbYWb4Ze6S1PG4dw",
	expire:"1D"
}

export {
	web,jwt
}