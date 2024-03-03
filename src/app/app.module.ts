import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfDirectiveComponent } from './directives/if-directive/if-directive.component';
import { NgSwitchDirectiveComponent } from './directives/ng-switch-directive/ng-switch-directive.component';
import { NgForDirectiveComponent } from './directives/ng-for-directive/ng-for-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    IfDirectiveComponent,
    NgSwitchDirectiveComponent,
    NgForDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
