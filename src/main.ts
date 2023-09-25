// import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { inject } from '@vercel/analytics';
 
inject();

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { environment } from './app/environment';

// if (environment.production) {
//   enableProdMode();
// }
// const firebaseConfig = {
//   apiKey: "AIzaSyD-H7pqXs718-Fo6rZ43h8_jdRkBCX0pvE",
//   authDomain: "bulb-interactive2023.firebaseapp.com",
//   projectId: "bulb-interactive2023",
//   storageBucket: "bulb-interactive2023.appspot.com",
//   messagingSenderId: "809700115819",
//   appId: "1:809700115819:web:5e1a2e9e96fe97f1d8782e",
//   measurementId: "G-SV229XPCK3"
// };
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
