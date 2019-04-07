import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent} from './welcome/welcome.component';
import { DevelopementComponent } from './developement/developement.component';
import { CloudComponent} from './cloud/cloud.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { CompanyComponent } from './company/company.component';
import { EmployeesComponent } from './employees/employees.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'developement', component:  DevelopementComponent },
  { path: 'cloud', component:  CloudComponent },
  { path: 'consultation', component:  ConsultationComponent },
  { path: 'company', component:  CompanyComponent },
  { path: 'employees', component:  EmployeesComponent },
  { path: 'references', component:  ReferencesComponent },
  { path: 'contact', component:  ContactComponent },
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
