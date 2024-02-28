import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class createTuongDto {
  @IsNotEmpty()
  giayto: string;

  @IsNotEmpty()
  variable: string;
}
