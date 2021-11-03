export const appConfig = {
    isProduction: process.env.NODE_ENV || 'development',
    apiVersion: process.env.API_VERSION || '1.0',
    port: process.env.PORT || 3000,
    rateLimitMax: Number(process.env.RATE_LIMIT_MAX) || 10000,
};
