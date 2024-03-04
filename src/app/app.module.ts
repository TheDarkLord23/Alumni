import { EventsPageComponent } from './events-page/events-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CareersComponent } from './careers/careers.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { JobsComponent } from './jobs/jobs.component';
import { AlumniDirectoryComponent } from './alumni-directory/alumni-directory.component';
import { StoriesComponent } from './stories/stories.component';
import { LandingComponent } from './landing/landing.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CareersComponent,
    OpportunitiesComponent,
    JobsComponent,
    AlumniDirectoryComponent,
    StoriesComponent,
    LandingComponent,
    ContactComponent,
    FooterComponent,
    EventsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
