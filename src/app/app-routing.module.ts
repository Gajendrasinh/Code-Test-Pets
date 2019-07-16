import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnersComponent } from './owners/owners.component';

const routes: Routes = [{ path: '', component: OwnersComponent },
{ path: 'owners', component: OwnersComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
