import type { DocumentSnapshot } from 'firebase-admin/firestore'

import currentEvaluation from './current'

const createEvaluation = async (company: DocumentSnapshot) => {
	await company.ref
		.collection('evaluations')
		.doc(Date.now().toString())
		.create(currentEvaluation(company))
}

export default createEvaluation
