import { TodoM } from '../dtos/todo.dto';
import { TodoRepository } from '../repositories/todoRepository.interface';

export class GetTodosUseCases {
  constructor(private readonly todoRepository: TodoRepository) {}

  async execute(): Promise<TodoM[]> {
    return await this.todoRepository.findAll();
  }
}
