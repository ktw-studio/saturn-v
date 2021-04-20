import { Application } from 'express';
import { AwilixContainer } from 'awilix';
import { Procedure } from '@lunar-flight/system';

import { env } from '@root/application/tools/env.function';
import { Logger } from '@root/application/logger/logger';

export class StartServerProcedure extends Procedure<AwilixContainer, AwilixContainer> {
    async run(container: AwilixContainer): Promise<AwilixContainer> {
        const expressServer = container.resolve<Application>('server');
        const logger = container.resolve<Logger>('logger');

        const APP_PORT = env('APP_PORT', 4000);
        const APP_HOST = env('APP_HOST', 'http://localhost');

        expressServer.listen(APP_PORT, () => logger.info(`Server is listening on ${APP_HOST}:${APP_PORT}`));

        return container;
    }
}
