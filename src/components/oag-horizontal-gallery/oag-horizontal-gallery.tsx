import { Component, Host, Prop, State, Watch, h } from '@stencil/core';
import { GalleryItem } from '../../models/gallery-item';

@Component({
    tag: 'oag-horizontal-gallery',
    styleUrl: 'oag-horizontal-gallery.scss',
    shadow: true,
})
export class OagHorizontalGallery {

    private index: number = 0;

    @State()
    public current: GalleryItem = {
        src: "",
        caption: "",
        reference: "",
    };

    private _images: Array<GalleryItem> = [];

    @Prop({ reflect: true })
    public images: Array<GalleryItem> | string;

    @Watch('images')
    imagesWatcher(newValue: Array<GalleryItem> | string) {
        if (typeof newValue === 'string') {
            this._images = JSON.parse(newValue);
        }
        else {
            this._images = newValue;
        }

        this.current = this._images[this.index];
    }

    private enabledBack: boolean = true;
    private enabledForward: boolean = true;

    @Watch('current')
    public currentWatcher() {
        this.enabledBack = this.index > 0;
        this.enabledForward = this.index < (this._images.length - 1);
    }

    private handleBackClick = () => {
        if (this.enabledBack) {
            this.index--;
            this.current = this._images[this.index];
        }
    }
    private handleForewardClick = () => {

        if (this.enabledForward) {
            this.index++;
            this.current = this._images[this.index];
        }
    }

    public componentWillLoad() {
        this.imagesWatcher(this.images);
    }

    render() {
        return (
            <Host>
                <div class="container">
                    <div class="control control--back">
                        <button onClick={this.handleBackClick} disabled={!this.enabledBack}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144" /></svg>
                        </button>
                    </div>
                    <div class="content">
                        <oag-figure caption={this.current.caption} reference={this.current.reference}>
                            <img src={this.current.src} />
                        </oag-figure>
                    </div>
                    <div class="control control--forward">
                        <button onClick={this.handleForewardClick} disabled={!this.enabledForward}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144-144 144" /></svg>
                        </button>
                    </div>
                </div>
            </Host>
        );
    }

}
