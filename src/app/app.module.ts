import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { VoitureFormComponent } from './pages/voiture-form/voiture-form.component';
import { VoitureDetailsComponent } from './pages/voiture-details/voiture-details.component';
import { VoitureComponent } from './components/accueil/voiture/voiture.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    VoitureFormComponent,
    VoitureDetailsComponent,
    VoitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
