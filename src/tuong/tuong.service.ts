import { Injectable } from '@nestjs/common';
import { tuongRepository } from './tuong.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { createTuongDto } from './dto/creat-tuong.dto';
import { Tuong } from './tuong.entity';
import { tuongStatus } from './tuong-status.enum';

@Injectable()
export class TuongService {
  constructor(
    @InjectRepository(tuongRepository)
    private tuongRepository: tuongRepository,
  ) {}

  async createTuong(creatuongDto: createTuongDto): Promise<Tuong> {
    const { giayto, variable } = creatuongDto;
    const task = this.tuongRepository.create({
      giayto,
      variable,
      status: tuongStatus.HAPPY,
    });

    await this.tuongRepository.save(task);
    return task;
  }
}
