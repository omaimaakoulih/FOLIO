import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CreateColorsStepComponent } from './createPortfolio/create-colors-step/create-colors-step.component';
import { CreateContactsStepComponent } from './createPortfolio/create-contacts-step/create-contacts-step.component';
import { CreateDescriptionStepComponent } from './createPortfolio/create-description-step/create-description-step.component';
import { CreateNameStepComponent } from './createPortfolio/create-name-step/create-name-step.component';
import { CreatePortfoliosStepComponent } from './createPortfolio/create-portfolios-step/create-portfolios-step.component';
import { CreateProjectsStepComponent } from './createPortfolio/create-projects-step/create-projects-step.component';
import { CreateServicesStepComponent } from './createPortfolio/create-services-step/create-services-step.component';
import { CreateSkillsStepComponent } from './createPortfolio/create-skills-step/create-skills-step.component';
import { CreateStep1Component } from './createPortfolio/create-step1/create-step1.component';
import { CreateTypeStepComponent } from './createPortfolio/create-type-step/create-type-step.component';
import { EditPortfolioComponent } from './editPortfolio/edit-portfolio/edit-portfolio.component';
import { FeaturesComponent } from './features/features.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { PortfolioContactComponent } from './portfolios/portfolio-contact/portfolio-contact.component';
import { PortfolioPortComponent } from './portfolios/portfolio-port/portfolio-port.component';
import { Portfolio1Component } from './portfolios/portfolio1/portfolio1.component';
import { SignupComponent } from './signup/signup.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TestReactiveFormsComponent } from './test-reactive-forms/test-reactive-forms.component';
import { Portfolio2Component } from './portfolios/portfolio2/portfolio2.component';
import { Portfolio2PortComponent } from './portfolios/portfolio2-port/portfolio2-port.component';
import { Portfolio2SkillsServicesComponent } from './portfolios/portfolio2-skills-services/portfolio2-skills-services.component';
import { Portfolio2ServicesComponent } from './portfolios/portfolio2-services/portfolio2-services.component';

const routes: Routes = [
  {path: '',component:HomePageComponent},
  {path:'portfolio', component:PortfolioPortComponent},
  {path: 'contact',component:PortfolioContactComponent },
  {path: 'home',component: HomePageComponent},
  {path: 'features',component: FeaturesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signUp',component: SignupComponent},
  {path: 'UserHome/:id',component:UserHomeComponent},
  {path: 'profile/:id', component:UserProfileComponent},
  {path: 'create/step1/:id', component:CreateStep1Component},
  {path: 'create/name/:id',component:CreateNameStepComponent},
  {path: 'create/types/:id/:id2',component:CreateTypeStepComponent},
  {path: 'create/style/:id/:id2', component: CreateColorsStepComponent},
  {path: 'create/descrip/:id/:id2', component:CreateDescriptionStepComponent},
  {path: 'create/services/:id/:id2',component: CreateServicesStepComponent},
  {path: 'create/projects/:id/:id2',component:CreateProjectsStepComponent},
  {path: 'create/contacts/:id/:id2',component: CreateContactsStepComponent},
  {path: 'create/skills/:id/:id2',component: CreateSkillsStepComponent},
  {path: 'create/portfolios/:id/:id2', component: CreatePortfoliosStepComponent},
  {path: 'portfolio/home/:id', component:Portfolio1Component},
  {path :'portfolio2/home/:id', component: Portfolio2Component},
  {path: 'portfolio2/aboutme/:id', component: Portfolio2PortComponent},
  {path: 'portfolio2/skills/:id', component: Portfolio2SkillsServicesComponent},
  {path: 'portfolio2/services/:id', component: Portfolio2ServicesComponent},
  {path: 'portfolio/port/:id', component:PortfolioPortComponent},
  {path: 'portfolio/contact/:id', component: PortfolioContactComponent},
  {path: 'editPortflio/:id/:id2', component: EditPortfolioComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
