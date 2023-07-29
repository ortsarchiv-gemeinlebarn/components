import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'oag-application',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ApplicationComponent {

}
