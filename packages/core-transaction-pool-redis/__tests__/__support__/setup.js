'use strict';

const path = require('path')
const container = require('@arkecosystem/core-container')

exports.setUp = async () => {
  const config = path.resolve(__dirname, '../../../core-config/lib/networks/testnet')

  container.init({ data: '~/.ark', config }, {
    exclude: [
      '@arkecosystem/core-transaction-pool-redis',
      '@arkecosystem/core-p2p'
    ]
  })

  await container.plugins.registerGroup('init', {config})
  await container.plugins.registerGroup('beforeCreate')
  await container.plugins.registerGroup('beforeMount')
}

exports.tearDown = async () => container.tearDown()