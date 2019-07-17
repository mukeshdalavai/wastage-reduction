import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
@Component({
  selector: 'app-restaurantprofile',
  templateUrl: './restaurantprofile.component.html',
  styleUrls: ['./restaurantprofile.component.css']
})
export class RestaurantprofileComponent implements OnInit {

  public username;
  constructor(private service:RestaurantService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');

    this.service.getRestaurantProfile(this.username).subscribe(data =>{
      console.log(data);
      });
  }
}
