import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Voiture } from 'src/app/models/voiture';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-voiture-details',
  templateUrl: './voiture-details.component.html',
  styleUrls: ['./voiture-details.component.scss']
})
export class VoitureDetailsComponent implements OnInit {

  id: number;

  voitureForm = this.fb.group({
    marque: "",
    couleur: "",
    typeMoteur: "",
    prix : 0
  })

  displayErrorMessage = false;
  displayLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private voitureService: VoitureService,
    private fb : FormBuilder
    ) { 
      this.id = this.route.snapshot.params['id'];
    }

  ngOnInit(): void {
    this.initVoiture();
  }

  initVoiture() {
    this.voitureService.findById(this.id).subscribe({
      next: (data) => {
        this.voitureForm.patchValue(data);
      }
    })
  }

  updateVoiture() {
    this.displayLoading = true;
    let voiture : Voiture = new Voiture(
      this.id,
      this.voitureForm.value.marque,
      this.voitureForm.value.couleur,
      this.voitureForm.value.typeMoteur,
      this.voitureForm.value.prix
    );
    this.voitureService.update(voiture).subscribe({
      next: () => {
        this.router.navigateByUrl('/home');
      },
      error: () => {
        this.displayErrorMessage = true;
        this.displayLoading = false;
      }
    })
  }

  goToHome() {
    this.router.navigateByUrl('/home')
  }
}
