import * as fs from 'fs';
import * as path from 'path';
import * as Swagger from 'swagger-client';
import * as yaml from 'js-yaml';
import * as swaggerTools from 'swagger-tools';

import {Resolver} from 'expresskit';


// swagger client
const client = new Swagger({
  url: 'http://petstore.swagger.io/v2/swagger.json',
  usePromise: true
});

const spath = path.resolve(__dirname, '../../src/modules/pet-store/swagger.yml');
const file = fs.readFileSync(spath, 'utf8');
const spec = yaml.safeLoad(file);

export class SwaggerService {
  @Resolver('SwaggerClient')
  public static resolveSwaggerClient() {
    return client;
  }

  public static getMiddleware(): Promise<any[]> {
    return new Promise((resolve) => {
      swaggerTools.initializeMiddleware(spec, (middleware) => {
        resolve([
          middleware.swaggerMetadata(),
          middleware.swaggerValidator(),
          middleware.swaggerUi()
        ]);
      });  
    });
  }
  
}