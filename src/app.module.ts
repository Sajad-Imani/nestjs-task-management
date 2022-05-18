import { Module } from '@nestjs/common';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [TasksController, UsersController],
  providers: [TasksService, UsersService],
})
export class AppModule {}
