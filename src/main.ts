// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { HeroComponent } from './app/hero/hero.component';
import { ContentComponent } from './app/content/content.component';
import { ApplicationComponent } from './app/application/application.component';

(async () => {

  const app = await createApplication({
    providers: [
      /* your global providers here */
    ],
  });

  const application = createCustomElement(ApplicationComponent, { injector: app.injector });
  const heroElement = createCustomElement(HeroComponent, { injector: app.injector });
  const contentComponent = createCustomElement(ContentComponent, { injector: app.injector });

  customElements.define('oag-application', application);
  customElements.define('oag-hero', heroElement);
  customElements.define('oag-content', contentComponent);

})();
