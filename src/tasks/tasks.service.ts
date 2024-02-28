import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { TaskRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import { CreatTaskDto } from './dto/CreateTask.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  async getTaskById(id: string): Promise<TaskEntity> {
    const found = await this.taskRepository.findOne({ where: { id } });
    if (!found) {
      throw new NotFoundException(`This ID "${id}" is not found`);
    }
    return found;
  }

  CreateTask(createTaskDto: CreatTaskDto): Promise<TaskEntity> {
    return this.taskRepository.createTask(createTaskDto);
  }

  //   getAllTask(): TaskModel[] {
  //     return this.tasks;
  //   }

  async deleteTask(id: string): Promise<void> {
    const result = await this.taskRepository.delete(id);
  }

  async updateTask(id: string, status: TaskStatus): Promise<TaskEntity> {
    const task = await this.getTaskById(id);

    task.status = status;

    await this.taskRepository.save(task);

    return task;
  }
  getTask(filterDto: GetTasksFilterDto): Promise<TaskEntity[]> {
    return this.taskRepository.getTask(filterDto);
  }
}
