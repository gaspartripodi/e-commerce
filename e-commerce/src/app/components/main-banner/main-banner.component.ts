import { Component } from '@angular/core';

//Main banner data
import { mainBannerData } from '../../../assets/main-banner-data';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent {

  mainBannerData = mainBannerData;

}