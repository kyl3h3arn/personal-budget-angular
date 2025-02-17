import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import {Routes, RouterModule} from '@angular/router'
import { Component } from '@angular/core';
import { P404Component } from './p404/p404.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
      path: '',
      component: HomepageComponent,
      pathMatch: 'full'
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: '**',
      component: P404Component
    },
    { path: 'contact', 
      component: ContactComponent 
    },
  ];