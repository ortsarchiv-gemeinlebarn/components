import { Component, Host, h, Prop, State, Element} from '@stencil/core';


interface Chapter {
  startTime: number;
  endTime?: number;
  title: string;
}

@Component({
  tag: 'oag-chapter-audio',
  styleUrl: 'oag-chapter-audio.scss',
  shadow: true,
})
export class OagChapterAudio {
      @Prop() src: string;
      @Prop() chapters: Chapter[] = [];
      @State() currentChapterIndex = 0;
      @Element() host: HTMLElement;


      private audioEl: HTMLAudioElement;

      goToChapter(index: number) {
        if (!this.audioEl) return;
        if (index < 0 || index >= this.chapters.length) return;
        this.currentChapterIndex = index;
        this.audioEl.currentTime = this.chapters[index].startTime;
        this.audioEl.play();
      }


   get items(): NodeListOf<HTMLOagAudioElement> {
      return this.host.querySelectorAll('oag-audio');
    }


      render() {
        const currentChapter = this.items[this.currentChapterIndex] as any;
        return (

             <Host>



                  {currentChapter && (
                    <div class="chapter-info">
                      <strong>{currentChapter.title}</strong>
                    </div>
                  )}
                    <audio ref={(el) => (this.audioEl = el as HTMLAudioElement)} src={this.src} controls />
                    {/* switch mechanism for chapters */}
                  <div class="chapter-controls">
                    <button
                      onClick={() => this.goToChapter(this.currentChapterIndex - 1)}
                      disabled={this.currentChapterIndex === 0}
                    >
                      Vorheriges Kapitel
                    </button>
                    <button
                      onClick={() => this.goToChapter(this.currentChapterIndex + 1)}
                      disabled={this.currentChapterIndex === this.chapters.length - 1}
                    >
                      Nächstes Kapitel
                    </button>
                  </div>
            </Host>
        );
      }
  }
