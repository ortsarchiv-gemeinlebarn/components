import { Component, Host, Prop, h } from '@stencil/core';

@Component({
    tag: 'oag-misc',
    styleUrl: 'oag-misc.scss',
    shadow: true,
})
export class OagMisc {

    @Prop() public image = '';
    @Prop() public label = '';
    @Prop() public tagline = '';

    render() {
        return (
            <Host>
                {
                    this.image &&
                    <div class="image" style={{ 'background-image': `url(${this.image})` }}></div>
                }
                <div class="content">
                    <h3 class="label">{this.label}</h3>
                    <h4 class="tagline">{this.tagline}</h4>
                    <div class="text">
                        <slot></slot>
                    </div>
                    <slot name="links"></slot>
                </div>
            </Host>
        );
    }

}
