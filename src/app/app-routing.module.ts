import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from './header/header.module';


const routes: Routes = [
  {
    path: 'header',
    loadChildren: './header/header.module#HeaderModule'
  },
  { path: '**', redirectTo: 'header' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HeaderModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
