import { Component,OnInit } from '@angular/core';
import { ApiClientService } from './services/api-client.service';
import { Client } from './models/client';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crud_cliente';
  dataClient: any;

  constructor(
    private apiClientService: ApiClientService
  ) { }

  ngOnInit(): void {
    this.apiClientService.getClients().subscribe((data: any) =>{
        this.dataClient = data.clientes;
    });
  }
}
