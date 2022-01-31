import { ApiProperty } from '@nestjs/swagger';
import { TodoM } from '../../../dtos/todo.dto';

export class TodoPresenter {
  @ApiProperty()
  id: number;
  @ApiProperty()
  content: string;
  @ApiProperty()
  isDone: boolean;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;

  constructor(todo: TodoM) {
    this.id = todo.id;
    this.content = todo.content;
    this.isDone = todo.isDone;
    this.created_at = todo.created_at;
    this.updated_at = todo.updated_at;
  }
}
