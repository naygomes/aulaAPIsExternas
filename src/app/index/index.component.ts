import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  dogImage;
  catImage;

  constructor( public imageService: ImageService ) { }

  ngOnInit(): void {
    this.getCatImage();
    this.getImage();
  
  }

  getImage() {
    this.imageService.getImage().subscribe(
      (res) => {
      this.dogImage = res.message;
    });
  }

  getCatImage() {
    this.imageService.getCatImage().subscribe(
      (res) => {
        console.log(res);
      this.catImage = res[0].url;
    });
  }
}
