import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'oag-figure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FigureComponent {
  @Input() public caption = '';
  @Input() public reference = '';
}
