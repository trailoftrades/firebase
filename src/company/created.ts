import { firestore as firestoreTrigger } from 'firebase-functions'

import createEvaluation from '../evaluation/create'

const companyCreated = firestoreTrigger
	.document('companies/{company}')
	.onCreate(async snapshot => {
		await createEvaluation(snapshot)
	})

export default companyCreated
