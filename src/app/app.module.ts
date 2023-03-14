import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './features/features.component';
import { Portfolio1Component } from './portfolios/portfolio1/portfolio1.component';
import { PortfolioPortComponent } from './portfolios/portfolio-port/portfolio-port.component';
import { PortfolioServicesComponent } from './portfolios/portfolio-services/portfolio-services.component';
import { PortfolioSkollsComponent } from './portfolios/portfolio-skolls/portfolio-skolls.component';
import { PortfolioContactComponent } from './portfolios/portfolio-contact/portfolio-contact.component';
import { PortfolioSkollComponent } from './portfolios/portfolio-skoll/portfolio-skoll.component';
import { PortfolioServiceComponent } from './portfolios/portfolio-service/portfolio-service.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {getStorage, provideStorage} from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { CreateStep1Component } from './createPortfolio/create-step1/create-step1.component';
import { CreateNameStepComponent } from './createPortfolio/create-name-step/create-name-step.component';
import { CreateTypeStepComponent } from './createPortfolio/create-type-step/create-type-step.component';
import { CreateColorsStepComponent } from './createPortfolio/create-colors-step/create-colors-step.component';
import { CreateDescriptionStepComponent } from './createPortfolio/create-description-step/create-description-step.component';
import { CreateServicesStepComponent } from './createPortfolio/create-services-step/create-services-step.component';
import { ServicComponenetComponent } from './createPortfolio/servic-componenet/servic-componenet.component';
import { ProjectComponenetComponent } from './createPortfolio/project-componenet/project-componenet.component';
import { CreateProjectsStepComponent } from './createPortfolio/create-projects-step/create-projects-step.component';
import { CreateContactsStepComponent } from './createPortfolio/create-contacts-step/create-contacts-step.component';
import { ContactComponentComponent } from './createPortfolio/contact-component/contact-component.component';
import { SkillComponentComponent } from './createPortfolio/skill-component/skill-component.component';
import { CreateSkillsStepComponent } from './createPortfolio/create-skills-step/create-skills-step.component';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';
import { CreatePortfoliosStepComponent } from './createPortfolio/create-portfolios-step/create-portfolios-step.component';
import { EditPortfolioComponent } from './editPortfolio/edit-portfolio/edit-portfolio.component';
import { TestReactiveFormsComponent } from './test-reactive-forms/test-reactive-forms.component';
import { Portfolio2Component } from './portfolios/portfolio2/portfolio2.component';
import { Portfolio2PortComponent } from './portfolios/portfolio2-port/portfolio2-port.component';
import { Portfolio2SkillsServicesComponent } from './portfolios/portfolio2-skills-services/portfolio2-skills-services.component';
import { Portfolio2ServicesComponent } from './portfolios/portfolio2-services/portfolio2-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    FeaturesComponent,
    Portfolio1Component,
    PortfolioPortComponent,
    PortfolioServicesComponent,
    PortfolioSkollsComponent,
    PortfolioContactComponent,
    PortfolioSkollComponent,
    PortfolioServiceComponent,
    LoginComponent,
    SignupComponent,
    UserHomeComponent,
    UserProfileComponent,
    CreateStep1Component,
    CreateNameStepComponent,
    CreateTypeStepComponent,
    CreateColorsStepComponent,
    CreateDescriptionStepComponent,
    CreateServicesStepComponent,
    ServicComponenetComponent,
    ProjectComponenetComponent,
    CreateProjectsStepComponent,
    CreateContactsStepComponent,
    ContactComponentComponent,
    SkillComponentComponent,
    CreateSkillsStepComponent,
    PortfolioComponentComponent,
    CreatePortfoliosStepComponent,
    EditPortfolioComponent,
    TestReactiveFormsComponent,
    Portfolio2Component,
    Portfolio2PortComponent,
    Portfolio2SkillsServicesComponent,
    Portfolio2ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(()=> getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
