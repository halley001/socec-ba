import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { AboutComponent } from './components/about/about.component';
import { MembershipComponent } from './components/membership/membership.component';


export const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path:'contact', component:ContactComponent},
    {path:'services', component:ServicesComponent},
    {path:'testimonials', component:TestimonialsComponent},
    {path:'about', component:AboutComponent},
    {path:'membership',component:MembershipComponent},
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path: '**', component:PagenotfoundComponent},
];
