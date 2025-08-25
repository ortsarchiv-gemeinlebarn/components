import { Component, Element, h, Host, Method, Prop } from '@stencil/core';

@Component({
    tag: 'oag-cockpit',
    styleUrl: 'oag-cockpit.scss',
    shadow: true,
})
export class OagCockpit {
    @Prop({ reflect: true, mutable: true }) visible: boolean | 'init' = 'init';
    @Prop() closeButton: string = 'Menü schließen';
    @Element() private element: HTMLElement;

    @Method()
    public async close() {
        this.element.setAttribute('visible', 'false');
    }

    render() {
        return (
            <Host>
                <div class="backdrop" onClick={() => this.close()}></div>

                <div class="modal">
                    <div class="horizontal-container">
                        <div class="left">
                            <slot name="left"></slot>
                        </div>
                        <div class="vertical-container">
                            <div class="top">
                                <slot name="top"></slot>
                            </div>
                            <header class="header">
                                <slot name="head"></slot>
                            </header>
                            <div class="container">
                                <slot></slot>
                                <slot name="navigation"></slot>
                            </div>

                            <div class="footer">
                                {this.closeButton && this.closeButton != 'false' && (
                                    <button type="button" class="close" onClick={() => this.close()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                                            <path
                                                d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-miterlimit="10"
                                                stroke-width="32"
                                            />
                                            <path
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="32"
                                                d="M320 320L192 192M192 320l128-128"
                                            />
                                        </svg>
                                        <span>{this.closeButton}</span>
                                    </button>
                                )}
                                <slot name="footer"></slot>
                            </div>
                        </div>
                        <div class="right">
                            <slot name="right"></slot>
                        </div>
                    </div>
                </div>
            </Host>
        );
    }
}
