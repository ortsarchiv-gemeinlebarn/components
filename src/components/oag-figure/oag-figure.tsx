import { Component, Host, Prop, h } from '@stencil/core';

@Component({
    tag: 'oag-figure',
    styleUrl: 'oag-figure.scss',
    shadow: true,
})
export class OagFigure {

    @Prop() public maxWidth: 'inner' | 'outer' = 'inner';
    @Prop() public caption: string;
    @Prop() public reference: string;

    render() {
        return (
            <Host class="figure">
                <figure>
                    <div class="content">
                        <slot></slot>
                    </div>
                    <figcaption>
                        <span class="caption">{this.caption}</span>
                        {this.reference &&
                            <a class="reference" href={'#' + this.reference} aria-describedby="oag-references">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M80 152v256a40.12 40.12 0 0040 40h272a40.12 40.12 0 0040-40V152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                                    <rect x="48" y="64" width="416" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" />
                                </svg>
                                <span>
                                    <span>zur Quellenangabe</span>
                                </span>
                            </a>
                        }
                    </figcaption>
                </figure>
            </Host>
        );
    }

}
