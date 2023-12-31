import { Component, Host, Prop, h } from '@stencil/core';

@Component({
    tag: 'oag-reference',
    styleUrl: 'oag-reference.scss',
    shadow: true,
})
export class OagReference {

    @Prop()
    public label: string = '';

    @Prop()
    public referenceCode: string = '';

    @Prop()
    public content: 'quelle' | 'literatur' = 'quelle';

    render() {
        return (
            <Host>
                <div class="slot-content">
                    <slot></slot>
                </div>
                <div class="label">{this.label}</div>
                <div class="reference-code">{this.referenceCode}</div>
            </Host>
        );
    }
}
