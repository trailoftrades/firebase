import { firestore as firestoreTrigger } from 'firebase-functions'

import get from '../snapshot/get'
import currentEvaluation from '../evaluation/current'
import createEvaluation from '../evaluation/create'

const companyUpdated = firestoreTrigger
	.document('companies/{company}')
	.onUpdate(async ({ before, after }) => {
		const { rate, cash } = currentEvaluation(after)

		const equalEvaluation =
			get(before, 'rate', 'number', null) === rate &&
			get(before, 'cash', 'number', null) === cash

		if (!equalEvaluation) await createEvaluation(after)
	})

export default companyUpdated
