import * as functions from 'firebase-functions'

export const hello = functions.https.onRequest((_req, res) => {
	res.send('hello')
})
