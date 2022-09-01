import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ApiClientService } from '../../services/api-client.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  clients: Client[] = [];
  constructor(
    public clientService: ApiClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clientService.getAll().subscribe((data: Client[])=>{
      this.clients = data;
    })
  }

  viewClient(id:number){
    this.router.navigateByUrl('cliente/' + id + 'view');
  }

  editClient(id:number){

  }

  deleteClient(id:number){
    
  }
}
