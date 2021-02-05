import { FastifyPluginCallback } from 'fastify'
import blockRoute from './block'

const apiRoute: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.register(blockRoute, { prefix: '/block' })
  done()
}

export default apiRoute