import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { tuongStatus } from './tuong-status.enum';

@Entity()
export class Tuong {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  giayto: string;

  @Column()
  variable: string;

  @Column()
  status: tuongStatus;
}
