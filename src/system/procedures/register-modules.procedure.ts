import * as Awilix from 'awilix';
import { AwilixContainer } from 'awilix';
import { Procedure } from '@lunar-flight/system';
import testModule from '@modules/scope';
import { buildSchema } from 'type-graphql';
import { ApplicationModule } from '@root/application/application-module.type';

export class RegisterModulesProcedure extends Procedure<AwilixContainer, AwilixContainer> {
    async run(container: AwilixContainer): Promise<AwilixContainer> {
        const modules: ApplicationModule[] = [testModule];
        const resolvers = [];

        modules.forEach((appModule) => {
            /**
             * =========================================================================================================
             * Setup service implementations
             *
             * =========================================================================================================
             */
            container.register(appModule.servicesImplementations);

            /**
             * =========================================================================================================
             * Setup ReadModels
             *
             * =========================================================================================================
             */
            container.register(appModule.readModels);

            /**
             * =========================================================================================================
             * Setup Repositories
             *
             * =========================================================================================================
             */
            container.register(appModule.repositories);

            /**
             * =========================================================================================================
             * Setup CommandHandlers
             *
             * =========================================================================================================
             */
            container.register(appModule.commandHandlers);

            /**
             * =========================================================================================================
             * Setup QueryHandlers
             *
             * =========================================================================================================
             */
            container.register(appModule.queryHandlers);

            /**
             * =========================================================================================================
             * Gather all resolvers
             *
             * =========================================================================================================
             */
            resolvers.push(...appModule.resolvers);

            // TODO: Setup controllers
        });

        const schema = await buildSchema({
            // @ts-ignore-next-line
            resolvers,
        });

        /**
         * =============================================================================================================
         * Register GraphQL Schema
         *
         * =============================================================================================================
         */
        container.register('graphqlSchema', Awilix.asValue(schema));

        return container;
    }
}
