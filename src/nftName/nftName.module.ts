import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { NftNameController } from '@nftName/app/nftName.controller';
import { NftNameService } from '@nftName/app/nftName.service';
import { NftNameRepository } from '@nftName/infra/nftName.repository';

@Module({
    imports: [
        NftNameRepository,
        CqrsModule,
        TypeOrmModule.forFeature([NftNameRepository]),
    ],
    controllers: [NftNameController],
    providers: [
        {
            provide: 'NftNameService',
            useClass: NftNameService,
        },
    ],
})
export class NftNameMoudle {}
