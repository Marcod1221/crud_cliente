import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'clients', redirectTo: 'clients/index', pathMatch: 'full'},
  { path: 'clients/index', component: IndexComponent },
  { path: 'clients/:idcliente/view', component: ViewComponent },
  { path: 'clients/create', component: CreateComponent }
  //{ path: 'clients/:productId/edit', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class clientsRoutingModule { }