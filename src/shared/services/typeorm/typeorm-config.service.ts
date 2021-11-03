import { ConfigType } from '@nestjs/config';
import { Injectable, Inject } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { TypeOrmModuleConfig } from '@config';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(
        @Inject(TypeOrmModuleConfig.KEY)
        private _config: ConfigType<typeof TypeOrmModuleConfig>
    ) {}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return { ...this._config, autoLoadEntities: true };
    }
}
