import { pubsub } from 'firebase-functions'
import { getFirestore, FieldValue } from 'firebase-admin/firestore'

import currentEvaluation from '../evaluation/current'

const firestore = getFirestore()

/** Hourly. */
const companyRate = pubsub.schedule('0 * * * *').onRun(async () => {
	const { docs: companies } = await firestore.collection('companies').get()

	await Promise.all(
		companies.map(async company => {
			const { rate } = currentEvaluation(company)
			await company.ref.update({ cash: FieldValue.increment(rate) })
		})
	)
})

export default companyRate
