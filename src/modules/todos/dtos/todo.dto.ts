import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TodoM {
  id: number;
  content: string;
  isDone: boolean;
  created_at: Date;
  updated_at: Date;
}

export class UpdateTodoDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  readonly isDone: boolean;
}

export class AddTodoDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly content: string;
}
