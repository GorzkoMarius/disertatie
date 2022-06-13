import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-algorithms',
  templateUrl: './show-algorithms.component.html',
  styleUrls: ['./show-algorithms.component.scss'],
})
export class ShowAlgorithmsComponent implements OnInit {
  aStarJava: string;
  aStarJavaScript: string;
  aStarCPlusPlus: string;
  bfsJava: string;
  bfsJavaScript: string;
  bfsCPlusPlus: string;
  dijkstraJava: string;
  dijkstraJavascript: string;
  dijkstraCPlusPlus: string;
  constructor(httpClient: HttpClient) {
    httpClient
      .get('/assets/data/aStarJava.txt', { responseType: 'text' })
      .subscribe((data) => (this.aStarJava = data));
    httpClient
      .get('/assets/data/aStarJavascript.txt', { responseType: 'text' })
      .subscribe((data) => (this.aStarJavaScript = data));
    httpClient
      .get('/assets/data/aStarC.txt', {
        responseType: 'text',
      })
      .subscribe((data) => (this.aStarCPlusPlus = data));
    httpClient
      .get('/assets/data/BFSJava.txt', {
        responseType: 'text',
      })
      .subscribe((data) => (this.bfsJava = data));
    httpClient
      .get('/assets/data/BFSC.txt', {
        responseType: 'text',
      })
      .subscribe((data) => (this.bfsCPlusPlus = data));
    httpClient
      .get('/assets/data/BFSJavascript.txt', {
        responseType: 'text',
      })
      .subscribe((data) => (this.bfsJavaScript = data));
    httpClient
      .get('/assets/data/dijJava.txt', {
        responseType: 'text',
      })
      .subscribe((data) => (this.dijkstraJava = data));
    httpClient
      .get('/assets/data/dijC.txt', {
        responseType: 'text',
      })
      .subscribe((data) => (this.dijkstraCPlusPlus = data));
    httpClient
      .get('/assets/data/dijJavascript.txt', {
        responseType: 'text',
      })
      .subscribe((data) => (this.dijkstraJavascript = data));
  }

  ngOnInit(): void {}
}
