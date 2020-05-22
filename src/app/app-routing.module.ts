import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: 'landing', component: LandingComponent, data: {animation: 'landing'}},
  { path: 'skills', component: SkillsComponent, data: {animation: 'skills'}},
  { path: 'portfolio', component: PortfolioComponent, data: {animation: 'portfolio'}},
  { path: 'contact', component: ContactComponent, data: {animation: 'contact'}},
  { path: '', component: LandingComponent, data: {animation: 'landing'}},
  { path: '**', redirectTo: '', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
