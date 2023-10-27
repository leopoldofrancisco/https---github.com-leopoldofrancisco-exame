import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { BuscarFotoComponent } from './components/buscar-foto/buscar-foto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pesquisar/foto', component: BuscarFotoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
