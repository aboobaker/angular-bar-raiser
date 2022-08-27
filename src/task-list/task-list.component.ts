import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  createTask = false;
  project = '';
  client = '';
  taskList = [];
  taskInterval = []
  
  constructor(private taskService: TaskServiceService) {}

  ngOnInit() {
    this.taskList = this.taskService.getData();
  }

  showNewTaskItems() {
    this.createTask = true;
  }

  createNewTask() {
    console.log(this.project, this.client);
    this.taskList.push({
      project: this.project,
      client: this.client,
      totalTime: 0,
      start: true,
      stop: false,
      currentTime: 0
    });
    this.taskService.setTaskData(this.taskList);
  }

  deleteTask(index) {
    this.taskList.splice(index, 1);
    this.taskService.setTaskData(this.taskList);
  }

  startTimer(index) {
    this.taskList[index].timer = Date.now();
    console.log(this.taskList[index].timer);
    this.taskService.setTaskData(this.taskList);

  }

  stopTimer(index) {
    const currentTime = Date.now();
    this.taskList[index].totalTime =
      this.taskList[index].totalTime +
      (currentTime - this.taskList[index].timer);

    this.taskService.setTaskData(this.taskList);
  }


  manageAutoComplete(){
    console.log(this.project)
    // compare the project with the task list items and if the string matches show autocomplete
  }
}
