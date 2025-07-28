import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'oag-audio',
  styleUrl: 'oag-audio.scss',
  shadow: true,
})
export class OagAudio {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
