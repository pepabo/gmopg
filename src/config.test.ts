import test from 'ava'
import Config from './config'

test('.buildByEnv returns config', (t) => {
  t.deepEqual(Config.buildByEnv(), { axios: {} })
})
