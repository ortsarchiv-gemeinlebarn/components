import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'oag-screen-background-layer-item',
    styleUrl: 'oag-screen-background-layer-item.scss',
    shadow: true,
})
export class OagScreenBackgroundLayerItem {

    @Prop() slug: string;
    @Prop() active: boolean = false;

    render() {
        return (
            <Host>
                {
                    this.active &&
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /><circle cx="256" cy="256" r="144" /></svg>
                }
                {
                    !this.active &&
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /></svg>
                }
                <span>
                    <slot></slot>
                </span>
            </Host>
        );
    }

}
