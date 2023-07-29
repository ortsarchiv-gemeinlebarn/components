import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'oag-horizontal-gallery',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  templateUrl: './horizontal-gallery.component.html',
  styleUrls: ['./horizontal-gallery.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HorizontalGalleryComponent {

  public images: Array<{ src: string, caption: string, reference?: string }> = [];
  @Input('images') public imagesInput: string = '[]';

  private index: number = 0;
  public current: any = {};

  public ngOnInit() {
    this.images = JSON.parse(this.imagesInput);
    this.current = this.images[this.index];
  }

  // public ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes);

  //   this.images = JSON.parse(this.imagesInput);
  //   this.current = this.images[this.index];
  // }

  public onClickBack() {
    this.index--;
    this.current = this.images[this.index];
  }

  public onClickForward() {
    this.index++;
    this.current = this.images[this.index];
  }
}
