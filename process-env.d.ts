export interface ProcessEnvironments {
    APP_ENV: 'development' | 'test' | 'staging'| 'production'
    APP_HOST: string;
    APP_PORT: number;
    LOG_LEVEL: 'error'|'debug' | 'log' | 'warn' | 'verbose' | 'info';
}

declare namespace NodeJS {
    type ProcessEnv = ProcessEnvironments;
}
