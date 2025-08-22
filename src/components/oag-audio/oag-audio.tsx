import { Component, Element, h, Host, Prop, State } from '@stencil/core';

@Component({
    tag: 'oag-audio',
    styleUrl: 'oag-audio.scss',
    shadow: true,
})
export class OagAudio {
    private timer;
    @Element() private element: HTMLElement;
    @Prop() public headline: string = '';
    @Prop() public source: string = '';
    @State() public isPlaying: boolean = false;
    @State() public progress: number = 0;

    public progressStyle = () => ({ width: `${this.progress}%` });

    private audioElement: HTMLAudioElement;

    public play() {
        this.audioElement.play();
        this.isPlaying = true;
        this.timer = setInterval(() => this.updateProgress(), 20);
    }

    public pause() {
        this.audioElement.pause();
        this.isPlaying = false;
        clearInterval(this.timer);
    }

    public async componentDidLoad() {
        this.audioElement = this.element.shadowRoot.getElementById('audio') as HTMLAudioElement;
    }

    public playPauseButton() {
        if (this.isPlaying) {
            return (
                <button type="button" onClick={() => this.pause()} title="Pause">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 96h16v320h-16zM320 96h16v320h-16z" />
                    </svg>
                </button>
            );
        } else {
            return (
                <button type="button" onClick={() => this.play()} title="Play">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                        <path
                            d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z"
                            fill="none"
                            stroke="currentColor"
                            stroke-miterlimit="10"
                            stroke-width="32"
                        />
                    </svg>
                </button>
            );
        }
    }

    private updateProgress() {
        this.progress = (this.audioElement.currentTime / this.audioElement.duration) * 100;
    }

    render() {
        return (
            <Host>
                <div class="top">
                    <div class="content">
                        <div class="avatar"></div>
                        <h3 class="title">{this.headline}</h3>
                        <p class="description">
                            <slot></slot>
                        </p>
                    </div>

                    <div class="player">
                        {this.playPauseButton()}

                        <audio id="audio">
                            <source src={this.source} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>
                <div class="bottom">
                    <div class="times">
                        <span>00:00</span> / <span>00:34</span>
                    </div>
                    <div class="duration">
                        <div class="progress" style={this.progressStyle()}></div>
                    </div>
                </div>
            </Host>
        );
    }
}
