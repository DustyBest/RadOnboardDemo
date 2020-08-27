import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as L from 'leaflet';
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

  constructor() { }

  ngOnInit(): void {

    const map = L.map('vendorMap').setView([32.752600, -117.221610], 17);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 20,
      minZoom: 13,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: apiToken,
    }).addTo(map);
    var marker = L.marker([32.752600, -117.221610], { title: "My House!" }).addTo(map);   

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
