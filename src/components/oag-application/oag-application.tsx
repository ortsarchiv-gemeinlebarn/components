import { Component, Host, Prop, State, h, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'oag-application',
    styleUrl: 'oag-application.scss',
    shadow: true,
})
export class OagApplication {

    @Prop() public desktopOptimized: boolean = false;
    @Prop() public desktopOnly: boolean = false;
    @State() public confirmed: boolean = false;

    @Prop() loadedDelay: number = 1000;
    @Event() loaded: EventEmitter<void>;

    public confirm() {
        this.confirmed = true;
    }

    public componentDidLoad() {
        setTimeout(() => this.loaded.emit(), this.loadedDelay);
    }

    render() {
        return (
            <Host class={{ 'confirmed': this.confirmed }}>

                {!this.desktopOnly && this.desktopOptimized && !this.confirmed &&
                    <div class="information">
                        <h2>Für größere Bildschirme optimiert</h2>
                        <p>
                            Diese Website ist nicht für mobile Endgeräte geeignet.
                            <br />Sie können die Website aber trotzdem nutzen!
                        </p>
                        <button onClick={() => this.confirm()}>Fortfahren</button>
                    </div>
                }

                {this.desktopOnly &&
                    <div class="information">
                        <h2>Für größere Bildschirme optimiert</h2>
                        <p>Diese Website ist nicht für mobile Endgeräte geeignet und kann mobil nicht genutzt werden.</p>
                        <p>Bitte öffnen Sie die Website daher auf einem anderen Gerät!</p>
                    </div>
                }

                <slot></slot>
            </Host>
        );
    }

}
