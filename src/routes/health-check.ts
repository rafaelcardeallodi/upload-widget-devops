import type { FastifyInstance } from "fastify";
import { UploadImageToStorage } from "../functions/upload-image-to-storage";
import { R2StorageProvider } from "../storage/providers/r2-storage";


export async function healthCheckRoute(app: FastifyInstance) {
  app.get('/health', async (request, reply) => {
    await reply.status(200).send({ messe: 'Ok' })
  })
}