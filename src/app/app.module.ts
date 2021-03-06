import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MaterialModule} from './common/material.module';
import {MainGridComponent} from './components/main-grid/main-grid.component';
import {MainToolbarComponent} from './components/main-toolbar/main-toolbar.component';
import {MainSidebarComponent} from './components/main-sidebar/main-sidebar.component';
import {ContentGridComponent} from './components/content-grid/content-grid.component';
import {LoggerModule, NgxLoggerLevel} from "ngx-logger";
import {HttpClientModule} from "@angular/common/http";
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {HomeComponent} from './components/home/home.component';
import {InvoicesComponent} from './components/invoices/invoices.component';

@NgModule({
  declarations: [
    AppComponent,
    MainGridComponent,
    MainToolbarComponent,
    MainSidebarComponent,
    ContentGridComponent,
    MainMenuComponent,
    HomeComponent,
    InvoicesComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoggerModule.forRoot({
      // serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.ERROR,
      disableConsoleLogging: false
    }),
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [RouterModule],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},
  ]
  , bootstrap: [AppComponent]
})
export class AppModule {
}
