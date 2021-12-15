import type { DocumentSnapshot } from 'firebase-admin/firestore'

import get from '../snapshot/get'

const currentEvaluation = (company: DocumentSnapshot) => {
	const rate: number | null = get(company, 'rate', 'number', null)
	const cash: number | null = get(company, 'cash', 'number', null)

	if (rate === null || cash === null)
		throw new Error('"rate" and "cash" must be of type "number"')

	return { rate, cash }
}

export default currentEvaluation
