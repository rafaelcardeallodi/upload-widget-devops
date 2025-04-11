import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { uploadImageRoute } from './routes/upload-image'
import { fastifyMultipart } from '@fastify/multipart'
import { env } from './env'
import { healthCheckRoute } from './routes/health-check'
import { log } from './infra/logger'

const server = fastify()

server.register(fastifyCors, {
  origin: '*',
})

server.register(fastifyMultipart)
server.register(uploadImageRoute)
server.register(healthCheckRoute)

server.listen({ port: env.PORT, host: '0.0.0.0' }).then(() => {
  log.info('HTTP server running!')
})