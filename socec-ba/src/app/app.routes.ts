import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { BlogComponent } from './components/blog/blog.component';

export const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path:'contact', component:ContactComponent},
    {path:'services', component:ServicesComponent},
    {path:'testimonials', component:TestimonialsComponent},
    {path:'about', component:AboutComponent},
    {path:'team', component:TeamComponent},
    {path:'blog', component:BlogComponent} ,
    {path:'', component:PagenotfoundComponent},
    {path: '**', redirectTo: 'home', pathMatch:'full'},
];
