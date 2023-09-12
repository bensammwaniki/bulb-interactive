import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from './app/environment';

if (environment.production) {
  enableProdMode();
}
const firebaseConfig = {
  apiKey: "AIzaSyD-IxLpX8KeGAAF0mXNSluX8bC-4Ri1U8w",
  authDomain: "bulb-interactive.firebaseapp.com",
  projectId: "bulb-interactive",
  storageBucket: "bulb-interactive.appspot.com",
  messagingSenderId: "559234943398",
  appId: "1:559234943398:web:6899b3110a9a71be97a767",
  measurementId: "G-WGDPL4W5CX"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
