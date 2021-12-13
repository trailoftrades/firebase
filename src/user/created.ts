import { auth } from 'firebase-functions'
import { getFirestore, FieldValue } from 'firebase-admin/firestore'

import INITIAL_CASH from '../cash/initial'

const firestore = getFirestore()

const userCreated = auth.user().onCreate(async user => {
	console.log(user.metadata.creationTime)

	await firestore.doc(`users/${user.uid}`).create({
		name: user.displayName ?? null,
		email: user.email ?? null,
		cash: INITIAL_CASH,
		created: FieldValue.serverTimestamp()
	})
})

export default userCreated
