import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {PricesComponent} from './components/prices/prices.component';
import {ProtectedComponent} from './components/protected/protected.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {AuthModule} from '@auth0/auth0-angular';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PricesComponent,
    ProtectedComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'sergio8016.auth0.com',
      clientId: 'Wd7QnyIxxw1FFnbCt3QvAhmHyYy29o1p',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
