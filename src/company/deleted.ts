import { firestore as firestoreTrigger } from 'firebase-functions'

import deleteCollection from '../collection/delete'

const companyDeleted = firestoreTrigger
	.document('companies/{company}')
	.onDelete(async ({ ref }) => {
		await deleteCollection(ref.collection('evaluations'))
	})

export default companyDeleted
