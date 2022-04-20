import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-voiture-form',
  templateUrl: './voiture-form.component.html',
  styleUrls: ['./voiture-form.component.scss']
})
export class VoitureFormComponent implements OnInit {

  voitureForm = this.fb.group({
    marque: "",
    couleur: "",
    typeMoteur: "",
    prix: 0
  })

  constructor(
    private fb: FormBuilder,
    private voitureService: VoitureService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  addVoiture() {
    this.voitureService.create(this.voitureForm.value).subscribe({
      next: () => {
        this.router.navigate(["/home"]);
      }
    })
  }

}
