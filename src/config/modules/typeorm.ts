import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default registerAs(
    'typeorm',
    (): TypeOrmModuleOptions => ({
        type: 'postgres',
        host: process.env.PG_HOST || 'localhost',
        port: parseInt(process.env.PG_PORT || '4000'),
        username: process.env.PG_USER || '',
        password: process.env.PG_PASSWORD || '',
        database: process.env.PG_DB_NAME || '',
        synchronize: process.env.PG_SYNC === 'true',
        entities: [
            __dirname + '/../../nftName/domain/models/**/*.entity{.ts,.js}',
        ],
        migrations: [__dirname + '/../../generated/migrations/**/*{.ts,.js}'],
        cli: {
            migrationsDir: 'src/generated/migrations',
        },

        logging: true,
    })
);
