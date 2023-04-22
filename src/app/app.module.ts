import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StepFormComponent } from './step-form/step-form.component';
import { SubscriptionConfirmationComponent } from './subscription-confirmation/subscription-confirmation.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SidebarComponent, StepFormComponent, SubscriptionConfirmationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
