import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy, OnChanges {
  isOpen: boolean = false;
  stringa: string = '';
  numbers: number[] = [1, 2, 3, 4, 5, 6];

  constructor() {
    console.log('io sono il costruttore');

    this.stringa = 'sono la stringa del costruttore';

    if (this.isOpen) {
      //fai questo
    } else {
      //fai quest altro
    }
  }

  ngOnInit() {
    console.log("io sono l 'onInit");
    setTimeout(() => {
      this.stringa;
    }, 10_000);
  }

  ngOnDestroy(): void {
    // viene chiamato ogni volta che un componente viene distrutto,
    //   //utile soprattutto per risorse che occupano memeoria all interno della nostra applicazione
    //   //utilizzo quando il componente viene distrutto
    console.log('vengo chiamato quando il componente viene distrutto');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('quando il componente');
  }
}
