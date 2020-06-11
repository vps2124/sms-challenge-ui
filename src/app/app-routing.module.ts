import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowDataComponent } from './components/show-data/show-data.component';
import { CreateDataComponent } from './components/create-data/create-data.component';
import { UpdateDataComponent } from './components/update-data/update-data.component';
import { DeleteDataComponent } from './components/delete-data/delete-data.component';


const routes: Routes = [{ path: '', component: ShowDataComponent },
{ path: 'create', component: CreateDataComponent },
{ path: 'update', component: UpdateDataComponent },
{ path: 'delete', component: DeleteDataComponent },
{ path: 'show', component: ShowDataComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
