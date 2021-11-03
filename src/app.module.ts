import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeOrmModuleConfig } from '@config';
import { HttpExceptionFilter } from '@common/filters/http-exception.filter';
import { TypeOrmConfigService } from '@shared/services/typeorm/typeorm-config.service';
import { NftNameMoudle } from '@nftName/nftName.module';

@Module({
    imports: [
        NftNameMoudle,
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule.forFeature(TypeOrmModuleConfig)],
            useClass: TypeOrmConfigService
        })
    ],
    providers: [
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter,
        },
    ],
})
export class AppModule {}
