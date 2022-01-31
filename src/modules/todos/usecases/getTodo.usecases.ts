import { TodoM } from '../dtos/todo.dto';
import { TodoRepository } from '../repositories/todoRepository.interface';

export class GetTodoUseCases {
  constructor(private readonly todoRepository: TodoRepository) {}

  async execute(id: number): Promise<TodoM> {
    return await this.todoRepository.findById(id);
  }
}
