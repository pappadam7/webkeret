import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuth, AngularFireAuthModule} from "@angular/fire/compat/auth";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {getStorage, provideStorage} from "@angular/fire/storage";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAwjVhREqViJYRQJIwLWPtFjW4nmuWd2X8",
      authDomain: "tetovalo-web.firebaseapp.com",
      projectId: "tetovalo-web",
      storageBucket: "tetovalo-web.appspot.com",
      messagingSenderId: "489421244369",
      appId: "1:489421244369:web:6f6fb88d36dbaa2ee402f0"
    }),
    AngularFireAuthModule,
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
