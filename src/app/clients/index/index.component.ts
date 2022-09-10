import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ApiClientService } from 'src/app/services/api-client.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  clientes: Client[] = [];
  constructor(
    public apiClientService: ApiClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apiClientService.getAll().subscribe((data: any[])=>{
      this.clientes = data;
      console.log(data);
    })
  }

  viewClient(id_cliente:number){
    this.router.navigateByUrl('clients/' + id_cliente + '/view');
  }

  editClient(id:number){

  }

  deleteClient(id:number){

  }
}
