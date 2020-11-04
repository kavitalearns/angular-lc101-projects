import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher',];
   finishedChores = ["vaccum the carpet","clean bathrooms" ,'Complete LaunchCode prep work', 'Buy groceries'];

   
   constructor() { }

   ngOnInit() {
   }

}
