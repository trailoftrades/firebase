import * as functions from 'firebase-functions'
import { getFirestore } from 'firebase-admin/firestore'

const firestore = getFirestore()

const userDeleted = functions.auth.user().onDelete(async user => {
	await firestore.doc(`users/${user.uid}`).delete()
})

export default userDeleted
