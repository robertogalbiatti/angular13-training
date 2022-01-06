import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//se olharmos nosso index.html ,isso aqui se torna uma "tag nossa", pois na linha 11 do index ele referencia a isso aq
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  h3 {
     color: dodgerblue
    }
    `]
})
export class AppComponent {
}
