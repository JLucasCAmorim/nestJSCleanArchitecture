import { Module } from '@nestjs/common';
import { UsecasesProxyModule } from '../../../modules/todos/infra/usecases-proxy/usecases-proxy.module';
import { TodoController } from '../../../modules/todos/infra/http/controllers/todo.controller';

@Module({
  imports: [UsecasesProxyModule.register()],
  controllers: [TodoController],
})
export class ControllersModule {}
