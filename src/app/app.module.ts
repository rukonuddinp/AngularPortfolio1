import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { PersonaDetailsComponent } from './persona-details/persona-details.component';
import { ReferanceComponent } from './referance/referance.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent,
    ProfileComponent,
    PersonalInformationComponent,
    PersonaDetailsComponent,
    ReferanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
