import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'oag-reference',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ReferenceComponent {
  @Input('reference-code') public referenceCode = '';
  @Input('title') public title = '';
}
