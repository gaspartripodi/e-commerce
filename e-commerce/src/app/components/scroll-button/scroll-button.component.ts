import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.css']
})
export class ScrollButtonComponent {

  showGoUpButton: boolean;
  SHOW_SCROLL_HEIGHT = 400;
  HIDE_SCROLL_HEIGHT = 200;

  scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ((window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop) > this.SHOW_SCROLL_HEIGHT) {
      this.showGoUpButton = true;
    } else if (this.showGoUpButton &&
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop)
      < this.HIDE_SCROLL_HEIGHT) {
      this.showGoUpButton = false;
    }
  }

}