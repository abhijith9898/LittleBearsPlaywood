import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { TermsAndPoliciesComponent } from './terms-and-policies/terms-and-policies.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'policy', component: TermsAndPoliciesComponent},
  { path: 'how-it-works', component: HowItWorksComponent},
  { path: 'about-us', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
