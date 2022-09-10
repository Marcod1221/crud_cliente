import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiClientService } from '../../services/api-client.service';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;
  
  constructor(
    private apiClientService: ApiClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      dpi: new FormControl('', [Validators.required]),
      correo: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  onSubmit(){
    if (!this.form.valid) {
      return;
    }
    let client: Client = this.form.value;
    this.apiClientService.create(client).subscribe((res:any) => {
      Swal.fire(
        'Exito',
        res.message,
        'success'
      )
         this.router.navigateByUrl('clients/index');
    })
  }

}
