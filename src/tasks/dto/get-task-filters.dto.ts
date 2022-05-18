import { TaskStatus } from "../task.model";

export class GetTasksFiltersDto {
  status?: TaskStatus;
  search?: string;
}
