import { config as getConfig } from 'firebase-functions'

export interface Config {
	storage: {
		bucket: string
	}
}

const config = getConfig() as Config

export default config
