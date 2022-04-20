import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { VoitureDetailsComponent } from './pages/voiture-details/voiture-details.component';
import { VoitureFormComponent } from './pages/voiture-form/voiture-form.component';

const routes: Routes = [
  { path:'home', component: AccueilComponent },
  { path:'form', component: VoitureFormComponent },
  { path:'voiture/:id', component: VoitureDetailsComponent },
  { path:'**', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
