import { Module } from '@nestjs/common';

import { LoggerModule } from './shared/containers/providers/logger/logger.module';
import { ExceptionsModule } from './shared/containers/providers/exceptions/exceptions.module';
import { UsecasesProxyModule } from './modules/todos/infra/usecases-proxy/usecases-proxy.module';
import { ControllersModule } from './shared/http/controllers/controllers.module';

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
