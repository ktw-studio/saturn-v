import * as Awilix from 'awilix';
import { CommandHandler, QueryHandler } from '@lunar-flight/command-module';

export interface ApplicationModule {
    controllers: { [key in string]: Awilix.Resolver<any> },
    resolvers: any[],
    commandHandlers: { [key in string]: Awilix.Resolver<CommandHandler<any>> },
    queryHandlers: { [key in string]: Awilix.Resolver<QueryHandler<any>> },
    repositories: { [key in string]: Awilix.Resolver<any> },
    readModels: { [key in string]: Awilix.Resolver<any> },
    servicesImplementations: { [key in string]: Awilix.Resolver<any> },
}
