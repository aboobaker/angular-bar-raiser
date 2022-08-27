import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class TaskServiceService {
 myTasks = [{ project: 'Amazon', client: 'big billion day', totalTime: 0 }];


  constructor() { }


  setTaskData(data){
    this.myTasks = data;
  }

  getData(){
    return this.myTasks
  }

}