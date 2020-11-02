import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favlinks = ['https://www.w3schools.com/angular/','https://www.udemy.com/courses/search/?src=ukw&q=angular']
  constructor() { }

  ngOnInit() {
  }

}
