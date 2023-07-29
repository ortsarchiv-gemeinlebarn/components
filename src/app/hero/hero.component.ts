import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'oag-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HeroComponent {
  @Input() public title = "";
  @Input() public subtitle = "";
  @Input('background-image') public backgroundImage = "";
  @Input('background-overlay') public backgroundOverlay = "";


}
