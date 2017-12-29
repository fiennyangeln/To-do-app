import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks : Task[];
  constructor(private tasksService : TasksService) { }

  ngOnInit() {
    this.getTasks();
    //this.http.get('/tasks').subscribe(tasks => {this.tasks=tasks;});
  }

  getTasks(): void{
    this.tasksService.getTasks()
    .subscribe((tasks)=> this.tasks=tasks);
  }

  delete(task: Task) : void{
    this.tasks = this.tasks.filter(h=> h!==task);
    this.tasksService.deleteTask(task).subscribe();
  }

  add(name: string) : void{
    name = name.trim();
    if (!name) {return;}
    this.tasksService.addTask({name} as Task)
    .subscribe(task=>{
      this.tasks.push(task);
    });
  }
  filter(status : string):void{
    this.tasksService.getTasksByStatus(status)
    .subscribe(tasks => this.tasks = tasks);
  }

}
