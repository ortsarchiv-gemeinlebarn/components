import { Component, Host, Prop, h, Element, State } from '@stencil/core';

@Component({
    tag: 'oag-image-comparison',
    styleUrl: 'oag-image-comparison.scss',
    shadow: true,
})
export class OagImageComparison {

    @Element() public el: HTMLElement;
    @Prop() public srcLeft: string = '';
    @Prop() public srcRight: string = '';
    @Prop() public labelLeft: string = '';
    @Prop() public labelRight: string = '';
    @Prop() public sliderWidth = 4;
    @Prop() public sliderIconPosition?= undefined;
    @Prop() public sliderPosition = 50;

    @State() public width: number = 370;

    public onDraggerDown() {

        const mouseMove = (e: any) => {

            if ((e.layerX > (this.sliderWidth / 2)) && (e.layerX < this.el.clientWidth - (this.sliderWidth / 2))) {
                this.setOverlayWidth((e.layerX / this.el.clientWidth) * 100.00);
            }
        }

        this.el.addEventListener('mousemove', mouseMove);

        this.el.addEventListener('mouseup', () => {
            this.el.removeEventListener('mousemove', mouseMove);
        });

    }

    private setOverlayWidth(percent: number) {
        this.width = this.el.clientWidth - this.el.clientWidth * (percent / 100) - (this.sliderWidth / 2);
    }

    public componentDidLoad() {
        this.setOverlayWidth(this.sliderPosition);

        this.el.addEventListener("mouseup", () => this.el.removeEventListener("mousemove", this.onDraggerDown, false), false);
        this.el.addEventListener("mousedown", () => this.onDraggerDown(), false);
    }

    public render() {
        return (
            <Host>
                <div class="container">
                    <span class="label label--left">{this.labelLeft}</span>
                    <img src={this.srcLeft} alt="" class="left" />
                    <div class="slider" style={{ 'right': this.width + 'px', 'width': this.sliderWidth + 'px' }}>
                        {this.sliderIconPosition &&
                            <div class="icon" style={{ 'top': this.sliderIconPosition }}>
                                <svg width="100%" height="100%" viewBox="0 0 512 512" version="1.1">
                                    <g transform="matrix(0.707107,0.707107,-0.707107,0.707107,256,-106.039)">
                                        <path d="M304,96L416,96L416,208M405.77,106.2L111.98,400.02M208,416L96,416L96,304" />
                                    </g>
                                </svg>
                            </div>
                        }
                    </div>
                    <div class="overlay" style={{ 'width': this.width + 'px' }}>
                        <span class="label label--right">{this.labelRight}</span>
                        <img src={this.srcRight} alt="" class="right" />
                    </div>
                </div>
            </Host>
        );
    }

}
