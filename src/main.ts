// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { HeroComponent } from './app/hero/hero.component';
import { ContentComponent } from './app/content/content.component';
import { ApplicationComponent } from './app/application/application.component';
import { FigureComponent } from './app/figure/figure.component';
import { ReferenceComponent } from './app/reference/reference.component';
import { HorizontalGalleryComponent } from './app/horizontal-gallery/horizontal-gallery.component';

(async () => {

  const app = await createApplication({
    providers: [
      /* your global providers here */
    ],
  });

  const hero = createCustomElement(HeroComponent, { injector: app.injector });
  const content = createCustomElement(ContentComponent, { injector: app.injector });
  const figure = createCustomElement(FigureComponent, { injector: app.injector });

  customElements.define('oag-application', createCustomElement(ApplicationComponent, { injector: app.injector }));
  customElements.define('oag-hero', hero);
  customElements.define('oag-content', content);
  customElements.define('oag-figure', figure);
  customElements.define('oag-reference', createCustomElement(ReferenceComponent, { injector: app.injector }));
  customElements.define('oag-horizontal-gallery', createCustomElement(HorizontalGalleryComponent, { injector: app.injector }));

})();
