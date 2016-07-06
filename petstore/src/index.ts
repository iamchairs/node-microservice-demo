import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as config from 'config';

import {Expresskit} from 'expresskit';

import {SwaggerService} from './swagger/service';
import {logger} from './common';

import './types';

Expresskit.start({
  port: <number>config.get('express.port'),
  middleware: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    cors(),
    SwaggerService.getMiddleware()
  ]
});/*.then((config: IRestkitConfig) => {
  logger.info(`
            ,,,         ,,,
          ;"   ^;     ;'   ",
          ;    s$$$$$$$s     ;
          ,  ss$$$$$$$$$$s  ,'
          ;s$$$$$$$$$$$$$$$
          $$$$$$$$$$$$$$$$$$
         $$$$P""Y$$$Y""W$$$$$
         $$$$  p"$$$"q  $$$$$
         $$$$  .$$$$$.  $$$$
          $$DcaU$$$$$$$$$$
            "Y$$$"*"$$$Y"   
               "$b.$$"     

        
        ------------
        Server Started!
        Express: http://localhost:${config.port}
        Swagger Docs: http://localhost:${config.port}/docs
        Swagger Spec: http://localhost:${config.port}/api-docs
        ------------
  `);
});*/