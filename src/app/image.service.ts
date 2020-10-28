import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  httpHeaders: any = {
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  }

  constructor( public http: HttpClient ) { }

getDogImage(): Observable<any> {
  return this.http.get(`https://dog.ceo/api/breeds/image/random`);
}

getCatImage(): Observable<any> {
  this.httpHeaders.headers['x-api-key']= "0536560e-8005-417d-8dc7-db228661ba15";
  return this.http.get('https://api.thecatapi.com/v1/images/search', this.httpHeaders);
}

createVote(form): Observable<any> {
  this.httpHeaders.headers['x-api-key']= "0536560e-8005-417d-8dc7-db228661ba15";
  return this.http.post('https://api.thecatapi.com/v1/votes', form, this.httpHeaders);
}
}
