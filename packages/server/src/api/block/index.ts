import { FastifyPluginCallback } from 'fastify'

const blockRoute: FastifyPluginCallback = (fastify, opts, done) => {
    done()
}

export default blockRoute