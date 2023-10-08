import { Component, Host, Prop, Watch, h, Element } from '@stencil/core';
import { GalleryItem } from '../../models/gallery-item';

import SimpleLightbox from "simplelightbox";

@Component({
    tag: 'oag-gallery',
    styleUrl: 'oag-gallery.scss',
    shadow: true,
})
export class OagGallery {

    private _images: Array<GalleryItem> = [];
    public gallery?: SimpleLightbox;

    @Prop({ reflect: true }) public images: Array<GalleryItem> | string;
    @Prop() public preview: boolean = false;
    @Element() private element: HTMLElement;
    @Watch('images') imagesWatcher(newValue: Array<GalleryItem> | string) {
        if (typeof newValue === 'string') {
            this._images = JSON.parse(newValue);
        }
        else {
            this._images = newValue;
        }
    }

    public componentWillLoad() {
        this.imagesWatcher(this.images);
    }

    public componentDidRender() {
        const items: any = this.element.shadowRoot.querySelectorAll("#gallery > .item");
        this.gallery = new SimpleLightbox(items, {
            captionPosition: 'outside',
            heightRatio: 0.8
        });
    }

    public render() {

        return (
            <Host>
                <div class={{ 'container': true, 'container--in-preview': this.preview }}>
                    <div id="gallery">
                        {
                            this._images.map((item) => <a class="item" href={item.src}>
                                <img src={item.src} alt={item.caption} title={item.caption + (item.reference ? ' (' + item.reference + ')' : '')} />
                            </a>)
                        }
                    </div>
                    <div class="preview" onClick={() => this.preview = false}>
                        <button type="button" class="button">Gesamte Galerie mit {this._images.length} Bildern anzeigen</button>
                    </div>
                </div>

            </Host>
        );
    }

}
