
import { PickType } from '@nestjs/swagger';
import { UpdateTask } from '../entities/task.entity';

export class UpdateTaskDto extends PickType(UpdateTask, ['status']) {}
