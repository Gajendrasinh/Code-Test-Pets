import { Component, OnInit } from '@angular/core';
import { HttpService } from './../services/http.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  ownersList:any = [];

  constructor(public httpService : HttpService) { 

  }

  ngOnInit() {
    this.getOwnersList();
  }

  getOwnersList(){
    this.httpService.httpRequest('owners', '', 'get').then(resp=>{
     console.log(resp)
    })
  
  }

  
}
