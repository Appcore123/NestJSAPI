import { Module } from '@nestjs/common';
import { TuongService } from './tuong.service';
import { TuongController } from './tuong.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tuongRepository } from './tuong.repository';

@Module({
  imports: [TypeOrmModule.forFeature([tuongRepository])],
  providers: [TuongService],
  controllers: [TuongController],
})
export class TuongModule {}
