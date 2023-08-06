import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
    tag: 'oag-lightbox',
    styleUrl: 'oag-lightbox.scss',
    shadow: true,
})
export class OagLightbox {

    @State() public opened: boolean = false;
    @Prop() public caption: string = '';

    public close() {
        this.opened = false;
    }

    public clicked(event: Event) {

        if (this.opened) {
            const element = event.target as HTMLElement;

            if (element.tagName == 'OAG-LIGHTBOX') {
                this.opened = false;
            }
        } else {
            this.opened = true;
        }
    }

    render() {
        return (
            <Host class={{ 'opened': this.opened }} onClick={(e) => this.clicked(e)}>
                <div class="content" onClick={(e) => this.clicked(e)}>
                    <slot></slot>
                </div>
                <div class="caption">
                    {this.caption}
                </div>
                <button class="close" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368" /></svg>
                </button>
            </Host>
        );
    }
}
