import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Add your best pictures';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://i.pinimg.com/originals/fd/9b/c5/fd9bc578dee5c34cae1999a9e77e02ee.jpg';
  image3 = 'https://inventionland.com/wp-content/uploads/2018/09/snowmobile.jpg';

  constructor() { }

  ngOnInit() {
  }

}