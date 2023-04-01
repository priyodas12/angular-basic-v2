//Just In Time Compilation
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//Ahead of Time Compilation
//import { platformBrowser } from '@angular/platform-browser';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
