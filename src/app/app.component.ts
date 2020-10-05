import { CompileTemplateMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { Observable, Subject, Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beerapp';

  beer =  new Subject();
  bezael: Subscription;
  hector: Subscription;
  gifbezael = false;
  gifhector = false;

  constructor() {
    console.log(this.hector);
  }

  create_sale() {
    this.beer.next('2X1');
  }

  bezael_susbcribe() {
    this.bezael = this.beer.subscribe(data => {
      console.log(`Bezael se ha enterado de que hay cervezas al ${data} y se dirige a comprar`);
      this.gifbezael = true;
      setTimeout(() => { this.gifbezael = false; }, 3000);
    },
    error => {
      console.log('Bezael no pudo comprar por que se terminaron las cervezas');
    },
    () => {
      console.log('Bezael se ha tomado su cerveza');
    });
  }

  hector_susbcribe() {
    this.hector = this.beer.subscribe(data => {
      console.log(`Héctor se ha enterado de que hay cervezas al ${data} y pide permiso a su mujer`);
      this.gifhector = true;
      setTimeout(() => { this.gifhector = false; }, 3000);
    },
    error => {
      console.log('Héctor no pudo comprar por que se terminaron las cervezas');
    },
    () => {
      console.log('Héctor se ha tomado su cerveza');
    });

  }

}
