import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  dogImage;
  catImage: string;
  catImageId: string;
  form;

  constructor( public imageService: ImageService ) { }

  ngOnInit(): void {
    this.getCatImage();
    this.getDogImage();
  }

  getDogImage() {
    this.imageService.getDogImage().subscribe(
      (res) => {
      this.dogImage = res.message;
    });
  }

  getCatImage() {
    this.imageService.getCatImage().subscribe(
      (res) => {
      this.catImage = res[0].url;
      this.catImageId = res[0].id;
    });
  }

  like() {
    this.form = {
                  image_id : this.catImageId,
                  value : 1
                }

    this.imageService.createVote(this.form).subscribe(
      (res) => {
        console.log(res);
    });
  }

  unlike() {
    this.form = {
                  image_id : this.catImageId,
                  value : 0
                }

    this.imageService.createVote(this.form).subscribe(
      (res) => {
        console.log(res);
    });
  }

  reloadDog() {
    this.getDogImage();
    console.log('doguinho');
  }

  reloadCat() {
    this.getCatImage();
    console.log('gatinho');
  }
}
