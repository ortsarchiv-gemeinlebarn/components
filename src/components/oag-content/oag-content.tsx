import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'oag-content',
    styleUrl: 'oag-content.scss',
    shadow: true,
})
export class OagContent {
    render() {
        return (
            <Host>
                <div class="container">
                    <slot></slot>
                </div>
            </Host>
        );
    }
}
