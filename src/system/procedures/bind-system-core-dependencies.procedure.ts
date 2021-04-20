import * as Awilix from 'awilix';
import { AwilixContainer } from 'awilix';
import { Procedure } from '@lunar-flight/system';
import { CQRSBus } from '@lunar-flight/command-module';
import { logger } from '@root/application/logger/logger';
import express from 'express';

export class BindSystemCoreDependenciesProcedure extends Procedure<AwilixContainer, AwilixContainer> {
   async run(container: AwilixContainer): Promise<AwilixContainer> {
       container.register({
           server: Awilix.asValue(express()),
           cqrsBus: Awilix.asClass(CQRSBus).singleton(),
           logger: Awilix.asValue(logger),
       });

       return container;
   }
}
