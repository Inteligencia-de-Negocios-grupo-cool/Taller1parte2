import { Component, Input, OnInit } from '@angular/core';
import { Info } from 'src/app/models/info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() infoRecibida: Info=new Info();
  constructor() { }

  ngOnInit(): void {
  }

}
