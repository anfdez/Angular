import { AppRoutingModule } from "./app-routing.module";

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ProjectsComponent } from "./components/projects/projects.component";

const APP_ROUTES: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'projects', component: ProjectsComponent},

  { path: '**', pathMatch: 'full', redirectTo:'home'}

]

export const app_routing = RouterModule.forRoot (APP_ROUTES)
