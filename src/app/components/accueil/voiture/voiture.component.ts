import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Voiture } from 'src/app/models/voiture';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.scss']
})
export class VoitureComponent implements OnInit {

  @Input() voiture !: Voiture;

  @Output() deleteVoitureEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteVoiture() {
    this.deleteVoitureEvent.emit(this.voiture.id);
  }

}
