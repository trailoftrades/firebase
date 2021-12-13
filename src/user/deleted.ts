import { auth } from 'firebase-functions'
import { getFirestore } from 'firebase-admin/firestore'

const firestore = getFirestore()

const userDeleted = auth.user().onDelete(async user => {
	await firestore.doc(`users/${user.uid}`).delete()
})

export default userDeleted
