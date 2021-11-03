import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';

import { NftName } from '@nftName/domain/models/nftName.entity';
import { INftRepository } from '@nftName/domain/interfaces/repository/nftName-repository.interface';

@EntityRepository(NftName)
export class NftNameRepository
    extends BaseRepository<NftName>
    implements INftRepository {}
