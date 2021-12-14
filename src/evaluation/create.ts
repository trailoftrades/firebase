import type { DocumentSnapshot } from 'firebase-admin/firestore'

const createEvaluation = async (company: DocumentSnapshot) => {
	await company.ref
		.collection('evaluations')
		.doc(Date.now().toString())
		.create({
			rate: company.get('rate') as unknown,
			cash: company.get('cash') as unknown
		})
}

export default createEvaluation
