require('dotenv').config();
const monitoringRoutes = require('./src/routes/monitoring.routes');
const { setupSwagger } = require('./src/utils/swagger');
const { subscribeToApiGateway } = require('./src/utils/registrySubscription');
const fastify = require("fastify")();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

setupSwagger(fastify);
subscribeToApiGateway();

fastify.register(monitoringRoutes, { prefix: "/api/monitoring" });

fastify.listen({ port: PORT, host: HOST }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server started : ${PORT}`);
})