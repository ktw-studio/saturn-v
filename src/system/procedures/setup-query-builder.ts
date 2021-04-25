import * as Awilix from 'awilix';
import { AwilixContainer } from 'awilix';
import { Procedure } from '@lunar-flight/system';
import { env } from '@root/application/tools/env.function';

export class SetupQueryBuilder extends Procedure<AwilixContainer, AwilixContainer> {
   async run(container: AwilixContainer): Promise<AwilixContainer> {
       // eslint-disable-next-line global-require
       const queryBuilder = require('knex')({
           client: 'pg',
           version: '13.2',
           connection: {
               host: env('POSTGRES_ENDPOINT', '127.0.0.1'),
               user: env('POSTGRES_USER'),
               password: env('POSTGRES_PASSWORD'),
               database: env('POSTGRES_DATABASE_NAME'),
           },
       });

       container.register({
           queryBuilder: Awilix.asValue(queryBuilder),
       });

       return container;
   }
}
