import { Component, Host, Prop, Element, h } from '@stencil/core';
import { scrollToElement } from '../../utils/utils';

@Component({
    tag: 'oag-cockpit-navigation-item',
    styleUrl: 'oag-cockpit-navigation-item.scss',
    shadow: true,
})
export class OagCockpitNavigationItem {

    @Prop() public number?: string;
    @Prop() public link?: string;

    @Element() private element: HTMLElement;

    openLinkAndCloseCockpit = () => {
        console.log(new Date());
        if (this.link) {
            this.element.closest('oag-cockpit').setAttribute('visible', 'false');
            scrollToElement(this.link);
        }
    }

    render() {
        return (
            <Host class={{ clickable: this.link?.length > 0 }} onClick={() => this.openLinkAndCloseCockpit()}>
                {
                    this.number &&
                    <div class="number">{this.number}</div>
                }
                <div class="label">
                    <slot></slot>
                </div>
            </Host>
        );
    }
}
