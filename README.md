# reneos.jwt
Microservice for encode/decode jwt

- Install node.js
- clone this repo
- npm i
- edit configs
- node .  

To get JWT, call "encodepath" (see config.js) with data in body or query:
data, secret (optional), exp (optional)

To get data from the token, call "decodepath" (see config.js) with the data in the token in body or query:


