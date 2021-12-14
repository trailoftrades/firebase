import { firestore as firestoreTrigger } from 'firebase-functions'

import createEvaluation from '../evaluation/create'

const companyUpdated = firestoreTrigger
	.document('companies/{company}')
	.onUpdate(async ({ before, after }) => {
		const equalEvaluation =
			before.get('rate') === after.get('rate') &&
			before.get('cash') === after.get('cash')

		if (!equalEvaluation) await createEvaluation(after)
	})

export default companyUpdated
