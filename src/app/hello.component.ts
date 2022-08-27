import { Component, Input } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'hello',
  template: `
  <div *ngIf="createTask" class="create-tasks">
    <input type="text" placeholder="Project Name" [(ngModel)]="project" />
    <input type="text" placeholder="Client Name" [(ngModel)]="client" />
    <button (click)="createNewTask()" class="submit">Submit</button>
  </div>
  
  <h2>Project Details</h2>
  
  <table>
    <tr>
      <td>Project</td>
      <td>Client</td>
  <td>Time in ms</td>
    </tr>
    <tr *ngFor="let task of taskList; index as index">
      <td>{{ task.project }}</td>
      <td>{{ task.client }}</td>
    
    <td>{{ task.totalTime }}</td>
    </tr>
  </table>
  `,
  styles: [`table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
  }
  
  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  td {
    width: 100px;
  }
  
  tr:nth-child(even) {
    background-color: #dddddd;
  }
  `]
})
export class HelloComponent  {
  @Input() name: string;
  createTask = false;
  project = '';
  client = '';
  taskList = [];

  constructor(private taskService: TaskServiceService) {}

  ngOnInit() {
    this.taskList = this.taskService.getData();
  }

}
