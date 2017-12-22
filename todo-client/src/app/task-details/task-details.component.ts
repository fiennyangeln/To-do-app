import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  @Input() task : Task;
  statuses = [
      { value: true, display: 'Done' },
      { value: false, display: 'Not Done' }
  ];
  constructor(
    private tasksService : TasksService,
    private route : ActivatedRoute,
    private location : Location) { }

  ngOnInit() {
    this.getTask();
  }

  getTask() : void {
    const _id = this.route.snapshot.paramMap.get('_id');
    console.log(_id);
    this.tasksService.getTask(_id)
    .subscribe(task => { this.task = task;});
  }

  save() : void{
    console.log("saving. . . ");
    this.tasksService.updateTask(this.task).subscribe(()=>this.goBack());
  }
  goBack():void{
    this.location.back();
  }
}
