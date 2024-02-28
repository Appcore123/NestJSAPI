import { Tuong } from 'src/tuong/tuong.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Tuong)
export class tuongRepository extends Repository<Tuong> {}
