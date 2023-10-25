import { Component, Host, Prop, h } from '@stencil/core';

@Component({
    tag: 'oag-changelog-entry',
    styleUrl: 'oag-changelog-entry.scss',
    shadow: true,
})
export class OagChangelogEntry {
    @Prop() public label: string = '';
    @Prop() public tags: string = '';

    render() {
        return (
            <Host>
                <h4>{this.label}</h4>
                <div class="content">
                    <slot></slot>
                </div>
                {
                    this.tags &&
                    <div class="tags">
                        {
                            this.tags.split(',').map((tag, _) => <div class="tag">{tag.trim()}</div>)
                        }
                    </div>
                }
            </Host>
        );
    }
}
