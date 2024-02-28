import { Body, Controller, Post } from '@nestjs/common';
import { TuongService } from './tuong.service';
import { Tuong } from './tuong.entity';
import { createTuongDto } from './dto/creat-tuong.dto';

@Controller('tuong')
export class TuongController {
  constructor(private tuongservice: TuongService) {}

  @Post()
  createTuong(@Body() createTuongDto: createTuongDto): Promise<Tuong> {
    return this.tuongservice.createTuong(createTuongDto);
  }
}
