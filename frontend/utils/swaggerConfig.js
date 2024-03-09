import Swagger from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'MyJobsAI API',
      version: '1.0.0',
      description: 'API documentation for MyJobsAI: Job application tracker with many features',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local server',
      },
    ],
  },
  apis: ['./frontend/utils/*.js'],
};

const specs = swaggerJsdoc(options);

const swaggerConfig = (app) => {
  app.use('/api-docs', Swagger.serve, Swagger.setup(specs));
};

export default swaggerConfig;
