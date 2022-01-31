import { ILogger } from '../../../shared/infra/logger/model/logger.interface';
import { TodoM } from '../dtos/todo.dto';
import { TodoRepository } from '../repositories/todoRepository.interface';

export class AddTodoUseCases {
  constructor(
    private readonly logger: ILogger,
    private readonly todoRepository: TodoRepository,
  ) {}

  async execute(content: string): Promise<TodoM> {
    const todo = new TodoM();
    todo.content = content;
    todo.isDone = false;
    const result = await this.todoRepository.insert(todo);
    this.logger.log('addTodoUseCases execute', 'New todo have been inserted');
    return result;
  }
}
