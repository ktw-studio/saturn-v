import { SetupDIContainerProcedure } from '@system/procedures/setup-di-container.procedure';
import { BindSystemCoreDependenciesProcedure } from '@system/procedures/bind-system-core-dependencies.procedure';
import { RegisterModulesProcedure } from '@system/procedures/register-modules.procedure';
import { PrepareServerProcedure } from '@system/procedures/prepare-server.procedure';
import { StartServerProcedure } from '@system/procedures/start-server.procedure';
import { SetupQueryBuilder } from '@system/procedures/setup-query-builder';

const serverRuntime = [
    new SetupDIContainerProcedure(),
    new SetupQueryBuilder(),
    new BindSystemCoreDependenciesProcedure(),
    new RegisterModulesProcedure(),
    new PrepareServerProcedure(),
    new StartServerProcedure(),
];

export { serverRuntime };
