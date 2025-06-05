import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonModal, IonButtons, IonAvatar, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-label',
  templateUrl: './label.page.html',
  styleUrls: ['./label.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel, IonButton, IonModal, IonButtons, IonAvatar, IonImg]
})
export class LabelPage implements OnInit {

  public dynamicLabel: string;
  public dynamicBtnLabel: string;

  constructor() { 
    this.dynamicLabel = "First Label";
    this.dynamicBtnLabel = "Button first Label";
  }

  ngOnInit() {
  }

  changeAriaLabel() {
    this.dynamicLabel = "Second Label"
    this.dynamicBtnLabel = "Button second Label"
  }

}
