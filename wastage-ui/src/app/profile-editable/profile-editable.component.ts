import { Component, OnInit } from '@angular/core';
import { DonationService } from '../donation.service';
import { Restaurant } from '../restaurant';
import { Charity } from '../charity';
import { DeliveryBoy } from '../delivery-boy';

@Component({
  selector: 'app-profile-editable',
  templateUrl: './profile-editable.component.html',
  styleUrls: ['./profile-editable.component.css']
})
export class ProfileEditableComponent implements OnInit {
selectedFile: File
  public editable="false";
  role : string;
  username : string;
  restaurant : any;
  charity : any;
  deliveryBoy : any;

  constructor(private service : DonationService) { }

  ngOnInit() {
    this.role=sessionStorage.getItem('role');
    this.username = sessionStorage.getItem('username');
    console.log(this.username);
    if(this.role=='restaurant'){
        this.service.fetchRestaurantProfile(this.username).subscribe(data => {
        console.log(data)
        this.restaurant = data;
      })
    }
    if(this.role=='charity'){
        this.service.fetchCharityProfile(this.username).subscribe(data => {
        console.log(data)
        this.charity = data;
    })
  }
    if(this.role=='deliveryBoy'){
        this.service.fetchDeliveryBoyProfile(this.username).subscribe(data => {
        console.log(data)
        this.deliveryBoy = data;
        console.log(this.deliveryBoy);
    })
}
  }
  public edit(){
    if(this.editable=='false')
    this.editable="true";
    else
    this.editable="false";
  }
  onFileChanged(event){
    this.selectedFile=event.target.files[0]
  }
  onUpload(){
    //saving file to db 
  }

  updateRestaurantProfile(restaurant : Restaurant){
    this.editable="false";
    console.log(restaurant)
    this.service.updateRestaurantProfile(restaurant).subscribe((data)=>{
      console.log(data);
      this.restaurant=data;
    })
  }

  updateCharityProfile(charity : Charity){
    this.editable="false";
    console.log(charity)
    this.service.updateCharityProfile(charity).subscribe((data)=>{
      console.log(data);
      this.charity=data;
    })
  }

  updateDeliveryBoyProfile(deliveryBoy : DeliveryBoy){
    this.editable="false";
    console.log(deliveryBoy)
    this.service.updateDeliveryboyProfile(deliveryBoy).subscribe((data)=>{
      console.log(data);
      this.deliveryBoy=data;
    })
  }
}
