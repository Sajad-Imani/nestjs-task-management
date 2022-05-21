import { TaskStatus } from "../task.model";
import { IsString, IsEnum, IsOptional } from 'class-validator';
export class GetTasksFiltersDto {
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
