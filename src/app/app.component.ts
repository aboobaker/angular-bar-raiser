import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(private router:Router){

  }
  navigateToHello(){
    this.router.navigate(['hello']);
  }

  navigateToTask(){
    this.router.navigate(['task-list']);
  }
}
