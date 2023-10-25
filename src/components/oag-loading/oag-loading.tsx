import { Component, Host, Prop, h } from '@stencil/core';

@Component({
    tag: 'oag-loading',
    styleUrl: 'oag-loading.scss',
    shadow: true,
})
export class OagLoading {

    @Prop() public label = "Ortsarchiv Gemeinlebarn";
    @Prop() public text = "Lade Projekt";

    render() {
        return (
            <Host>
                <div class="spinner"></div>
                <h1>{this.label}</h1>
                <h3>{this.text}</h3>
            </Host>
        );
    }

}
