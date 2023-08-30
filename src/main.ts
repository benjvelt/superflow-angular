import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { initSuperflow } from '@usesuperflow/client'

initSuperflow('jweIj5yb3k6WElsyHyp3', {
  projectId: '7562859393923502'
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
