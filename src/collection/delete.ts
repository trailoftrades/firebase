import { getFirestore, CollectionReference } from 'firebase-admin/firestore'

const firestore = getFirestore()

const deleteCollection = async (collection: CollectionReference) => {
	const { docs } = await collection.get()
	const batch = firestore.batch()

	for (const { ref } of docs) batch.delete(ref)

	await batch.commit()
}

export default deleteCollection
