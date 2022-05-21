import { TaskStatus } from '../task.model';
import { IsNotEmpty, IsEnum } from 'class-validator';
export class Task {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
}

export class UpdateTask {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
