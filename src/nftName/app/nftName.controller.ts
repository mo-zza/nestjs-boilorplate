import { Controller, Get, Inject } from '@nestjs/common';

import { INftNameService } from '@nftName/domain/interfaces/nftName.interface';

@Controller('nftName')
export class NftNameController {
    constructor(
        @Inject('NftNameService')
        private readonly nftService: INftNameService
    ) {}

    @Get()
    healthCheck(): string {
        return this.nftService.healthCheck();
    }
}
