import { FastifyPluginCallback } from 'fastify'
import { createNewBlock } from '../../utils/blockchain/block.service'

const blockRoute: FastifyPluginCallback = (fastify, opts, done) => {
    fastify.get('/', (request, reply) => {})

    fastify.get('/:hash', (request, reply) => {})

    fastify.post('/', (request, reply) => {
      const newBlock = createNewBlock()
      reply.send(newBlock)
    })
    done()
}

export default blockRoute