import fastify from 'fastify'

const port = process.env.PORT || 5000

class Server {
  app = fastify({ logger: true })

  constructor() {
    this.setup()
  }

  setup() {
    this.app.get('/', (request, reply) => {
      reply.send({ hello: 'world' })
    })
  }

  start() {
    try {
      this.app.listen(port)
    } catch (e) {
      this.app.log.error(e)
    }
  }
}

export default Server
