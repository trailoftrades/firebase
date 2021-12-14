import { auth as authTrigger } from 'firebase-functions'
import { getFirestore, Timestamp } from 'firebase-admin/firestore'

import INITIAL_CASH from '../cash/initial'

const firestore = getFirestore()

const userCreated = authTrigger.user().onCreate(async user => {
	await firestore.doc(`users/${user.uid}`).create({
		name: user.displayName ?? null,
		email: user.email ?? null,
		cash: INITIAL_CASH,
		created: Timestamp.fromDate(new Date(user.metadata.creationTime))
	})
})

export default userCreated
