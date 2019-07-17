import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignupOuterComponent } from './signup-outer/signup-outer.component';
import { HomeGraphComponent } from './home-graph/home-graph.component';
import { RestaurantDashboardComponent } from './restaurant-dashboard/restaurant-dashboard.component';
import { LoginComponent } from './login/login.component';
import { FoodStatusComponent } from './food-status/food-status.component';
import { CharityDashBoardComponent } from './charity-dash-board/charity-dash-board.component';
import { DeliveryBoyDashBoardComponent } from './delivery-boy-dash-board/delivery-boy-dash-board.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { ResturantProfileComponent } from './resturant-profile/resturant-profile.component';
import { CharityProfileComponent } from './charity-profile/charity-profile.component';
import { AvailabilityformComponent } from './availabilityform/availabilityform.component';
import { RestaurantprofileComponent } from './restaurantprofile/restaurantprofile.component';

import { LoginService } from './login.service';
import { SignupService } from './signup.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileEditableComponent } from './profile-editable/profile-editable.component';
import { CharitySliderComponent } from './charity-slider/charity-slider.component';
import { RestaurantSliderComponent } from './restaurant-slider/restaurant-slider.component';
import { RestaurantLogsComponent } from './restaurant-logs/restaurant-logs.component';
import { RouteMapComponent } from './route-map/route-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignUpComponent,
    HomeGraphComponent,
    RestaurantDashboardComponent,
    LoginComponent,
    FoodStatusComponent,
    CharityDashBoardComponent,
    DeliveryBoyDashBoardComponent,
    ResturantProfileComponent,
    CharityProfileComponent,
    SignupOuterComponent,
    DashboardComponent,
    AvailabilityformComponent,
    RestaurantprofileComponent,
    ProfileEditableComponent,
    CharitySliderComponent,
    RestaurantSliderComponent,
    RestaurantLogsComponent,
    RouteMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LoginService,
    SignupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
