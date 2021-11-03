import { Column, Entity, Index } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { v4 as uuidv4 } from 'uuid';
import { randomBytes } from 'crypto';

import { AbstractEntity } from '@common/entity/abstract.entity';
import { NftNameDto } from '@nftName/domain/dtos/nftName.dto';

@Index('nft_name_pkey', ['id'], { unique: true })
@Entity('nft_name')
export class NftName extends AbstractEntity<NftNameDto> {
    @Column('text', { name: 'nft_name', unique: true, nullable: true })
    name: string;

    @Column('text', { name: 'nft_url', unique: true, nullable: false })
    url: string;

    toDto() {
        return plainToClass(NftNameDto, this);
    }

    public static generateUserId(): string {
        return uuidv4({ random: randomBytes(16) });
    }
}
