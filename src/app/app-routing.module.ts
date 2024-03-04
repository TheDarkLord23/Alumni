import { CareersComponent } from './careers/careers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniDirectoryComponent } from './alumni-directory/alumni-directory.component';
import { LandingComponent } from './landing/landing.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { StoriesComponent } from './stories/stories.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: "careers", component: CareersComponent },
  { path: "alumni-dircetory", component: AlumniDirectoryComponent },
  { path: "", component: LandingComponent },
  { path: "events", component: EventsPageComponent },
  { path: "stories", component: StoriesComponent },
  {path: "contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
