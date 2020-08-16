import { Component, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';

//Services
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  @Output() notify = new EventEmitter();

  @ViewChild("searchBarComponent", { read: ElementRef }) searchBarComponent: ElementRef;
  @ViewChild("searchIcon", { read: ElementRef }) searchIcon: ElementRef;

  itemsQuantity = 0;

  constructor(
    private cartService: CartService,
    private renderer: Renderer2
  ) { }

  ngDoCheck() {
    this.itemsQuantity = this.cartService.getItemsQuantity();
  }

  showSearchBar() {
    if (this.searchBarComponent.nativeElement.style.display == "none" || getComputedStyle(this.searchBarComponent.nativeElement).display == "none") {
      this.renderer.setStyle(this.searchBarComponent.nativeElement, "display", "flex");
      this.renderer.setProperty(this.searchIcon.nativeElement, "innerHTML", "close");
    }
    else {
      this.renderer.setStyle(this.searchBarComponent.nativeElement, "display", "none");
      this.renderer.setProperty(this.searchIcon.nativeElement, "innerHTML", "search");
    }
  }

}