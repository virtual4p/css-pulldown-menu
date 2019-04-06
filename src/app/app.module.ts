import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CssMenuComponent } from './css-menu/css-menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DevelopementComponent } from './developement/developement.component';
import { CloudComponent } from './cloud/cloud.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { EmployeesComponent } from './employees/employees.component';
import { ReferencesComponent } from './references/references.component';

@NgModule({
  declarations: [
    AppComponent,
    CssMenuComponent,
    WelcomeComponent,
    DevelopementComponent,
    CloudComponent,
    ConsultationComponent,
    EmployeesComponent,
    ReferencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
