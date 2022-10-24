import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from './app.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';

// import sections
import { BannerComponent } from "./components/sections/banner/banner.component";
import { FooterComponent } from "./components/sections/footer/footer.component";
import { HeaderComponent } from "./components/sections/header/header.component";

// imports pages
import { BookanappointmentComponent } from "./components/pages/bookanappointment/bookanappointment.component";
import { ConsultationComponent } from "./components/pages/consultation/consultation.component";
import { HealthpackageComponent } from "./components/pages/healthpackage/healthpackage.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { PagenotfoundComponent } from "./components/pages/pagenotfound/pagenotfound.component";
import { SpecialitiesComponent } from "./components/pages/specialities/specialities.component";
import { SignupComponent } from './components/pages/signup/signup.component';
import { LoginComponent } from './components/pages/login/login.component';
import { QuicksearchComponent } from './components/sections/quicksearch/quicksearch.component';
import { QuicklinksComponent } from './components/sections/quicklinks/quicklinks.component';
import { SpecialityComponent } from './components/sections/speciality/speciality.component';
import { FeaturelinksComponent } from './components/sections/featurelinks/featurelinks.component';
import { HealthpakagesComponent } from './components/sections/healthpakages/healthpakages.component';
import { RegistrationComponent } from './components/sections/registration/registration.component';
import { GototopComponent } from './components/sections/gototop/gototop.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        BannerComponent,
        HomeComponent,
        ConsultationComponent,
        SpecialitiesComponent,
        HealthpackageComponent,
        BookanappointmentComponent,
        PagenotfoundComponent,
        SignupComponent,
        LoginComponent,
        QuicksearchComponent,
        QuicklinksComponent,
        SpecialityComponent,
        FeaturelinksComponent,
        HealthpakagesComponent,
        RegistrationComponent,
        AppNavigationComponent,
        GototopComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        CarouselModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
