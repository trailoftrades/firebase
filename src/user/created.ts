import * as functions from 'firebase-functions'
import { getFirestore } from 'firebase-admin/firestore'

import INITIAL_CASH from '../cash/initial'

const firestore = getFirestore()

const userCreated = functions.auth.user().onCreate(async user => {
	await firestore.doc(`users/${user.uid}`).create({
		name: user.displayName ?? null,
		email: user.email ?? null,
		cash: INITIAL_CASH
	})
})

export default userCreated
