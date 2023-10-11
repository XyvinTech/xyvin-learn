import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';

// Components 
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainBannerComponent } from './pages/landing/sections/main-banner/main-banner.component';
import { ServiceSectionComponent } from './pages/landing/sections/service-section/service-section.component';
import { AboutUsComponent } from './pages/landing/sections/about-us/about-us.component';
import { CoursesComponent } from './pages/landing/sections/courses/courses.component';
import { FactsSectionComponent } from './pages/landing/sections/facts-section/facts-section.component';
import { TeamSectionComponent } from './pages/landing/sections/team-section/team-section.component';
import { TestimonialsComponent } from './pages/landing/sections/testimonials/testimonials.component';
import { EventsComponent } from './pages/landing/sections/events/events.component';
import { ContactUsComponent } from './pages/landing/sections/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    MainBannerComponent,
    ServiceSectionComponent,
    AboutUsComponent,
    CoursesComponent,
    FactsSectionComponent,
    TeamSectionComponent,
    TestimonialsComponent,
    EventsComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
