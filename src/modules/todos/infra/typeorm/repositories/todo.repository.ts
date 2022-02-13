import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoM } from '../../../dtos/todo.dto';
import { TodoRepository } from '../../../repositories/todoRepository.interface';
import { Todo } from '../entities/todo.entity';

@Injectable()
export class DatabaseTodoRepository implements TodoRepository {
  constructor(
    @InjectRepository(Todo)
    private readonly todoEntityRepository: Repository<Todo>,
  ) {}

  async updateContent(id: number, isDone: boolean): Promise<void> {
    await this.todoEntityRepository.update(
      {
        id: id,
      },
      { isDone },
    );
  }

  async insert(todo: TodoM): Promise<TodoM> {
    const todoEntity = DatabaseTodoRepository.toTodoEntity(todo);
    const result = await this.todoEntityRepository.insert(todoEntity);
    return DatabaseTodoRepository.toTodo(result.generatedMaps[0] as Todo);
  }

  async findAll(): Promise<TodoM[]> {
    const todosEntity = await this.todoEntityRepository.find();
    return todosEntity.map((todoEntity) =>
      DatabaseTodoRepository.toTodo(todoEntity),
    );
  }

  async findById(id: number): Promise<TodoM> {
    const todoEntity = await this.todoEntityRepository.findOneOrFail(id);
    return DatabaseTodoRepository.toTodo(todoEntity);
  }

  async deleteById(id: number): Promise<void> {
    await this.todoEntityRepository.delete({ id: id });
  }

  private static toTodo(todoEntity: Todo): TodoM {
    const todo: TodoM = new TodoM();

    todo.id = todoEntity.id;
    todo.content = todoEntity.content;
    todo.isDone = todoEntity.isDone;
    todo.created_at = todoEntity.created_at;
    todo.updated_at = todoEntity.updated_at;

    return todo;
  }

  private static toTodoEntity(todo: TodoM): Todo {
    const todoEntity: Todo = new Todo();

    todoEntity.id = todo.id;
    todoEntity.content = todo.content;
    todoEntity.isDone = todo.isDone;

    return todoEntity;
  }
}
