import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { uploadImageRoute } from './routes/upload-image'
import { fastifyMultipart } from '@fastify/multipart'
import { env } from './env'

const server = fastify()

server.register(fastifyCors, {
  origin: '*',
})

server.register(fastifyMultipart)
server.register(uploadImageRoute)

server.listen({ port: env.PORT, host: '0.0.0.0' }).then(() => {
  console.log('HTTP server running')
})