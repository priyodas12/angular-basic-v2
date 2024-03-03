import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfDirectiveComponent } from './directives/if-directive/if-directive.component';
<<<<<<< HEAD
import { NgSwitchDirectiveComponent } from './directives/ng-switch-directive/ng-switch-directive.component';
=======
>>>>>>> 61839875aed72f51806919fe0e50c0e021befc79

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    IfDirectiveComponent,
    NgSwitchDirectiveComponent
=======
    IfDirectiveComponent
>>>>>>> 61839875aed72f51806919fe0e50c0e021befc79
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
