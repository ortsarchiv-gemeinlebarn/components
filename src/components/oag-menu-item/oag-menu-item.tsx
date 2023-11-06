import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'oag-menu-item',
    styleUrl: 'oag-menu-item.scss',
    shadow: true,
})
export class OagMenuItem {

    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }

}
