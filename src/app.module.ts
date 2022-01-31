import { Module } from '@nestjs/common';

import { LoggerModule } from './shared/infra/logger/logger.module';
import { ExceptionsModule } from './shared/infra/exceptions/exceptions.module';
import { UsecasesProxyModule } from './modules/todos/infra/usecases-proxy/usecases-proxy.module';
import { ControllersModule } from './shared/infra/controllers/controllers.module';

@Module({
  imports: [
    LoggerModule,
    ExceptionsModule,
    UsecasesProxyModule,
    ControllersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
