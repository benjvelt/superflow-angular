import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { initSuperflow } from '@usesuperflow/client'

initSuperflow('OJvXjDRJP4fK6lirKN8J', {
  projectId: '4166098994427317'
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
