import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AlumniDirectoryComponent } from './alumni-directory/alumni-directory.component';
import { StoriesComponent } from './stories/stories.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "alumni-dircetory", component: AlumniDirectoryComponent },
  { path: "stories", component: StoriesComponent },
  { path: "events", component: EventsPageComponent },
  { path: "careers", component: CareersComponent },
  { path: "contact", component: ContactComponent },
  { path: "opportunities", component: OpportunitiesComponent },
  { path: "jobs", component: JobsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
