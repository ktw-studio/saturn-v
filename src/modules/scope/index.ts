import { UserResolver } from '@modules/scope/api/graphql/user.resolver';
import { ApplicationModule } from '@root/application/application-module.type';

const appModule:ApplicationModule = {
    controllers: {},
    resolvers: [UserResolver],
    commandHandlers: {},
    queryHandlers: {},
    repositories: {},
    readModels: {},
    servicesImplementations: {},
};

export default appModule;
