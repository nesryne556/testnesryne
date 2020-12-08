import { Component, Input, OnInit } from '@angular/core';
import { Livre } from 'src/app/model/livre';

@Component({
  selector: 'nesr-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  @Input("l") t:Livre ;
  l: any;
  reduction: number;
  constructor() { }
  
  finalPrice()
  {return this.l.price*(100-this.reduction)/100}
  ngOnInit(): void {
  }

}
