import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @ViewChild("topNav", { read: ElementRef }) topNav: ElementRef;

  showTopnav() {
    let topNav = this.topNav.nativeElement;
    if (topNav.className === "topnav") {
      topNav.className += " responsive";
    } else {
      topNav.className = "topnav";
    }
  }

}
