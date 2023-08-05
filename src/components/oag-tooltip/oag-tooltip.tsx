import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
    tag: 'oag-tooltip',
    styleUrl: 'oag-tooltip.scss',
    shadow: true,
})
export class OagTooltip {

    @State() private collapsed: boolean = true;
    @Prop() public x: string;
    @Prop() public y: string;
    @Prop() public icon: 'none' | 'information' | 'help' | 'person' | 'alert' | 'pin' | 'time' = 'none';

    public handleClick() {
        this.collapsed = !this.collapsed;
    }

    public render() {
        return (
            <Host style={{ top: this.y, left: this.x }} class={{ collapsed: this.collapsed }}>
                <div class="trigger" onClick={() => this.handleClick()}>
                    <div class="icon">
                        {!this.collapsed &&
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368" /></svg>
                        }
                        {this.collapsed && this.icon == 'information' &&
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="40" d="M196 220h64v172" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="40" d="M187 396h138" /><path d="M256 160a32 32 0 1132-32 32 32 0 01-32 32z" /></svg>
                        }
                        {this.collapsed && this.icon == 'help' &&
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M160 164s1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 298.36 248 324" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="40" /><circle cx="248" cy="399.99" r="32" /></svg>
                        }
                        {this.collapsed && this.icon == 'person' &&
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /></svg>
                        }
                        {this.collapsed && this.icon == 'alert' &&
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M256 80c-8.66 0-16.58 7.36-16 16l8 216a8 8 0 008 8h0a8 8 0 008-8l8-216c.58-8.64-7.34-16-16-16z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><circle cx="256" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /></svg>
                        }
                        {this.collapsed && this.icon == 'pin' &&
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><circle cx="256" cy="96" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><path d="M272 164a9 9 0 00-9-9h-14a9 9 0 00-9 9v293.56a32.09 32.09 0 002.49 12.38l10.07 24a3.92 3.92 0 006.88 0l10.07-24a32.09 32.09 0 002.49-12.38z" /><circle cx="280" cy="72" r="24" /></svg>
                        }
                        {this.collapsed && this.icon == 'time' &&
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96" /></svg>
                        }
                    </div>
                </div>

                <div class="content">
                    <slot></slot>
                </div>
            </Host>
        );
    }

}
