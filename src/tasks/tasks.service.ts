import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import {v4 as uuid} from 'uuid'
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFiltersDto } from './dto/get-task-filters.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }
    
  getTasksWithFilter(filterDto: GetTasksFiltersDto): Task[] {
        const { search, status } = filterDto;
        
        let tasks = this.getAllTasks();
        if (search) {
            tasks = tasks.filter((task) => {
                 if (
                   task.title.includes(search) ||
                   task.description.includes(search)
                 ) {
                     return true;
                 }
                return false;
            });
            return tasks;
    }
        
        if (status) {
            tasks=tasks.filter((task)=> task.status===status)
        }
        return tasks;
    }
    
  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.DONE,
    };

    this.tasks.push(task);
    return task;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  updateTaskStatus(id: string, status: TaskStatus) {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}
