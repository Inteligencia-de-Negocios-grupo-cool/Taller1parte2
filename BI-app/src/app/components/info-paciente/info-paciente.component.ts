import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/models/info';

@Component({
  selector: 'app-info-paciente',
  templateUrl: './info-paciente.component.html',
  styleUrls: ['./info-paciente.component.css']
})
export class InfoPacienteComponent implements OnInit {

  infomarcion:Info[]=[];

  constructor() { }

  ngOnInit(): void {
    this.infomarcion =[
      {
        id:0,
        study: 'study interventions are Saracatinib',
        condition: 'recurrent verrucous carcinoma'
      },
      {
        id:2,
        study: 'study interventions are Lenograstim',
        condition: 'non secretory multiple myeloma'
      }
    ]
  }

}
