/* eslint-disable global-require */
/* eslint-disable import/first */

require('dotenv').config();
require('reflect-metadata');

import { System } from '@lunar-flight/system';
import { serverRuntime } from '@system/runtimes/server.runtime';

const system = new System();

(async () => {
    await system.execute(serverRuntime);
})();
