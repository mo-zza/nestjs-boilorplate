import { Injectable } from '@nestjs/common';

import { INftNameService } from '@nftName/domain/interfaces/nftName.interface';

@Injectable()
export class NftNameService implements INftNameService {
    healthCheck(): string {
        return 'Server is Running 🚀';
    }
}
