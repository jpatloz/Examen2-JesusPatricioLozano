import { Component, Input, OnInit } from '@angular/core';
import { Portero } from '../../interfaz/portero';

@Component({
  selector: 'app-detalles-porteros',
  templateUrl: './detalles-porteros.component.html',
  styleUrls: ['./detalles-porteros.component.css']
})
export class DetallesPorterosComponent implements OnInit {

  @Input() portero?: Portero;

  constructor() { }

  ngOnInit(): void {
  }

}
