import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiClientService } from '../../services/api-client.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id_cliente!: number;
  cliente: Client = new Client();

  constructor(
    private apiClientService: ApiClientService,
    private rotue: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id_cliente = this.rotue.snapshot.params['idcliente'];

    this.apiClientService.find(this.id_cliente).subscribe((data: Client) => {
        this.cliente = data;
    });
  }

}
