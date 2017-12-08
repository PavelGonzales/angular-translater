import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { 
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatTabsModule,
  MatInputModule,
  MatCardModule,
  MatListModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
