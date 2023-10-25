import { Component, Host, Prop, h } from '@stencil/core';

@Component({
    tag: 'oag-changelog-version',
    styleUrl: 'oag-changelog-version.scss',
    shadow: true,
})
export class OagChangelogVersion {

    @Prop() public date = '';
    @Prop() public version = '';

    render() {
        return (
            <Host>
                <div class="meta">
                    <div class="meta__date">{this.date}</div>
                    <div class="meta__version">Version Nr. {this.version}</div>
                </div>
                <div class="content">
                    <slot></slot>
                </div>
            </Host>
        );
    }

}
