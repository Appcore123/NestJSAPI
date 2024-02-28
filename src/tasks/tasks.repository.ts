import { EntityRepository, Repository } from 'typeorm';
import { TaskEntity } from './task.entity';
import { CreatTaskDto } from './dto/CreateTask.dto';
import { TaskStatus } from './task-status.enum';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';

@EntityRepository(TaskEntity)
export class TaskRepository extends Repository<TaskEntity> {
  async createTask(createTaskDto: CreatTaskDto): Promise<TaskEntity> {
    const { title, description } = createTaskDto;

    const task = this.create({
      title,
      description,
      
      status: TaskStatus.OPEN,
    });
    await this.save(task);
    return task;
  }

  async getTask(filterDto: GetTasksFilterDto): Promise<TaskEntity[]> {
    const query = this.createQueryBuilder('task');
    const tasks = await query.getMany();

    return tasks;
  }
}
