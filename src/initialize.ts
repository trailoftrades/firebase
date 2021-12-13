import { initializeApp, applicationDefault } from 'firebase-admin/app'

import config from './config'

initializeApp({
	credential: applicationDefault(),
	storageBucket: config.storage.bucket
})
