import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as L from 'leaflet';
import { ActivatedRoute } from '@angular/router';
import * as mockVendors from '../mock-vendors.json';
import { UserService } from '../../users/user.service';


let apiToken = environment.MAPBOX_API_KEY;
const iconRetinaUrl = 'assets/leaflet/images/marker-icon-2x.png';
const iconUrl = 'assets/leaflet/imagesmarker-icon.png';
const shadowUrl = 'assets/leaflet/images/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-vendor-page',
  templateUrl: './vendor-page.component.html',
  styleUrls: ['./vendor-page.component.scss']
})
export class VendorPageComponent implements OnInit {

  mockVendors:any = (mockVendors as any).default;
  vendorId;
  currentVendor;

  constructor(private route: ActivatedRoute, public userService:UserService) { }

  toggleFavorite() {
    // console.log(this.userService.currentUser.favorites)
    if(!this.userService.currentUser.favorites.includes(this.currentVendor.locationName)){
      this.userService.currentUser.favorites.push(this.currentVendor.locationName)
    } else {
      this.userService.currentUser.favorites = this.userService.currentUser.favorites.filter(vendor => vendor != this.currentVendor.locationName)
    }
    console.log(this.userService.currentUser.favorites)
  }

  ngOnInit(): void {

    // console.log(parseInt(this.route.snapshot.params.id));
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.vendorId = id;
    this.currentVendor = this.mockVendors.find(x => x.id == id);
    // this.router.navigate(['/vendor', this.vendorId]);
    console.log(this.currentVendor.locationName, this.vendorId);

    const map = L.map('vendorMap').setView([this.currentVendor.geolocation.lat, this.currentVendor.geolocation.long], 17);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 20,
      minZoom: 13,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: apiToken,
    }).addTo(map);
    var marker = L.marker([this.currentVendor.geolocation.lat, this.currentVendor.geolocation.long], { title: this.currentVendor.locationName }).addTo(map);   

    let popup = L.popup();

    function onMapClick(e) {
      console.log(marker)
      console.log(e)
      popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.target.options.title)
        .openOn(map);
    }

    marker.on('click', onMapClick);
  }

}
