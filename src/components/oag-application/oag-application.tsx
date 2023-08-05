import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'oag-application',
    styleUrl: 'oag-application.scss',
    shadow: true,
})
export class OagApplication {

    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }

}
