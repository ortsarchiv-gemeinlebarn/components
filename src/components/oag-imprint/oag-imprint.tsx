import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'oag-imprint',
    styleUrl: 'oag-imprint.scss',
    shadow: true,
})
export class OagImprint {

    render() {
        return (
            <Host>
                <oag-content>
                    <slot></slot>
                </oag-content>
            </Host>
        );
    }

}
