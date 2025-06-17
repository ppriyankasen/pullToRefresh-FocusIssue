import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inputbox',
  templateUrl: './inputbox.page.html',
  styleUrls: ['./inputbox.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonItem]
})
export class InputboxPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
