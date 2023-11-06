import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
    tag: 'oag-menu',
    styleUrl: 'oag-menu.scss',
    shadow: true,
})
export class OagMenu {

    @Prop() fillAfterScrolledPosition: number = 5;
    @State() scrolled: boolean = false;

    componentWillLoad() {
        this.scrolled = this.checkScroll();
        document.body.addEventListener("scroll", () => this.scrolled = this.checkScroll());
    }

    private checkScroll = () => document.body.scrollTop > this.fillAfterScrolledPosition;

    render() {
        return (
            <Host class={{ 'scrolled': this.scrolled }}>
                <slot></slot>
            </Host>
        );
    }

}
