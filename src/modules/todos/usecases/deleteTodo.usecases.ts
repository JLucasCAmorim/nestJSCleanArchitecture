import { ILogger } from '../../../shared/containers/providers/logger/model/logger.interface';
import { TodoRepository } from '../repositories/todoRepository.interface';

export class DeleteTodoUseCases {
  constructor(
    private readonly logger: ILogger,
    private readonly todoRepository: TodoRepository,
  ) {}

  async execute(id: number): Promise<void> {
    await this.todoRepository.deleteById(id);
    this.logger.log(
      'deleteTodoUseCases execute',
      `Todo ${id} have been deleted`,
    );
  }
}
