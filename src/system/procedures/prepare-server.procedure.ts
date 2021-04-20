import cors from 'cors';
import express, { Application } from 'express';
import { AwilixContainer } from 'awilix';
import { GraphQLSchema } from 'graphql';
import { ApolloServer } from 'apollo-server-express';
import { Procedure } from '@lunar-flight/system';

export class PrepareServerProcedure extends Procedure<AwilixContainer, AwilixContainer> {
    async run(container: AwilixContainer): Promise<AwilixContainer> {
        const schema = container.resolve<GraphQLSchema>('graphqlSchema');

        const apolloServer = await new ApolloServer({
            schema,
            playground: true,
            introspection: true,
        });

        const expressServer = container.resolve<Application>('server');

        await apolloServer.start();

        const corsOptions = {
            origin: [],
            credentials: true,
        };

        expressServer.use(cors(corsOptions));
        expressServer.use(express.json());
        expressServer.use(express.text({ type: 'application/json' }));

        apolloServer.applyMiddleware({
            app: expressServer,
            path: '/query',
            cors: corsOptions,
        });

        return container;
    }
}
