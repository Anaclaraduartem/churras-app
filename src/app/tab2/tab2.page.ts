import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  time1 = 0;
  time2 = 0;
  valendo = 1;
  final1 = 0;
  final2 = 0;
  constructor() { }

  mudarValor(numero: number) {
    this.valendo = numero;
  }

  addponto1() {
    this.time1 += this.valendo
    this.valendo = 1
    if (this.time1 >= 12) {
      this.final1 += 1
      this.time1 = 0
      this.time2 = 0
    }
  }
  subponto1() {
    this.time1 -= this.valendo
    this.valendo = 1
  }

  addponto2() {
    this.time2 += this.valendo
    this.valendo = 1
    if (this.time2 >= 12) {
      this.final2 += 1
      this.time1 = 0
      this.time2 = 0
    }
  }

  subponto2() {
    this.time2 -= this.valendo
    this.valendo = 1
  }

  limpar(){
    this.time1 = 0;
    this.time2 = 0;
    this.valendo = 1;
    this.final1 = 0;
    this.final2 = 0;
  }
}

