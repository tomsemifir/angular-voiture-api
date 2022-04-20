import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/models/voiture';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  voitures : Voiture[] = [];

  errorMessage : any = null;

  constructor(private voitureService : VoitureService) { }

  ngOnInit(): void {
    this.initVoitures();
  }

  initVoitures() {
    this.voitureService.findAll().subscribe({
      next: (data) => {
        this.voitures = data;
      },
      error: (err) => {
        this.errorMessage = err;
      }
    })
  }

  deleteVoiture(id : number) {
    this.voitureService.delete(id).subscribe({
      next: () => {
        //this.voitures = this.voitures.filter(v => v.id !== id)
        this.initVoitures()
      }
    })
  }

}
