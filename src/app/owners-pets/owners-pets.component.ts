import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-owners-pets',
  templateUrl: './owners-pets.component.html',
  styleUrls: ['./owners-pets.component.css']
})
export class OwnersPetsComponent implements OnInit {

  @Input() ownerDetails:any = [];
  constructor() { }

  ngOnInit() {
  }

}
