import { Component, Host, Prop, h } from '@stencil/core';

@Component({
    tag: 'oag-font-size',
    styleUrl: 'oag-font-size.scss',
    shadow: true,
})
export class OagFontSize {
    public readonly baseFontSize = 16;
    public readonly minFontSize = 14;
    public readonly maxFontSize = 24;

    public applicationElement = window.document.getElementsByTagName('oag-application').item(0);

    @Prop({ mutable: true }) public fontSize = this.baseFontSize;
    public scale = () => this.fontSize - this.baseFontSize;
    public scaleLabel = () => (this.scale() > 0 ? `+ ${this.scale()}` : `‐ ${this.scale() * -1}`);

    public bigger() {
        if (this.fontSize < this.maxFontSize) {
            this.fontSize++;
            this.applicationElement.style.fontSize = `${this.fontSize}px`;
        }
    }

    public smaller() {
        if (this.fontSize > this.minFontSize) {
            this.fontSize--;
            this.applicationElement.style.fontSize = `${this.fontSize}px`;
        }
    }

    render() {
        return (
            <Host>
                {this.scale() != 0 && <div class="scale">{this.scaleLabel()}</div>}
                <button type="button" onClick={() => this.bigger()} title="Größer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288M400 256H112" />
                    </svg>
                </button>
                <button type="button" onClick={() => this.smaller()} title="Kleiner">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 256H112" />
                    </svg>
                </button>
            </Host>
        );
    }
}
