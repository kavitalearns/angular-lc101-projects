import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   //inactive: boolean = false;
   buttonState: boolean[]= [true,true,true];

   constructor() { }

   ngOnInit() { }


   // changeAbility(): void {
   //    this.inactive=!this.inactive;
   //    }
    
   reactivate(): void {
      for (let i=0;i<this.buttonState.length;i++){
         this.buttonState[i]=true;
      }
   }

   shiftLocation(oldLocation: string) {
      while (this.location === oldLocation) {
         this.location = ['left', 'right', 'center'][Math.floor(Math.random()*3)];
      }
      return this.location;
   }
   
   }