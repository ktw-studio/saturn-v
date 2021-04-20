import { Procedure } from '@lunar-flight/system';
import * as Awilix from 'awilix';

export class SetupDIContainerProcedure extends Procedure<null, Awilix.AwilixContainer> {
    async run(): Promise<Awilix.AwilixContainer> {
        return Awilix.createContainer();
    }
}
