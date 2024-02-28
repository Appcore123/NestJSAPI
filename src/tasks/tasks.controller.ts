import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskEntity } from './task.entity';
import { CreatTaskDto } from './dto/CreateTask.dto';
import { identity } from 'rxjs';
import { UpdateTaskStatusDto } from './dto/updateTaskStatus.dto';
import { get } from 'http';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}
  @Get()
  getTask(@Query() filterDto: GetTasksFilterDto): Promise<TaskEntity[]> {
    return this.taskService.getTask(filterDto);
  }

  //   @Get()
  //   getAllTask(): TaskModel[] {
  //     return this.taskService.getAllTask();

  @Get('/:id')
  getTaskByID(@Param('id') id: string): Promise<TaskEntity> {
    return this.taskService.getTaskById(id);
  }
  //   }

  @Post()
  createTask(@Body() createTaskDto: CreatTaskDto): Promise<TaskEntity> {
    return this.taskService.CreateTask(createTaskDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): Promise<void> {
    return this.taskService.deleteTask(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body() updataskStatusDto: UpdateTaskStatusDto,
  ): Promise<TaskEntity> {
    const { status } = updataskStatusDto;
    return this.taskService.updateTask(id, status);
  }
}
