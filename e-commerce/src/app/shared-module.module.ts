import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

//Components
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ScrollButtonComponent } from './components/scroll-button/scroll-button.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
    MatInputModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    RouterModule
  ],
  declarations: [
    TopBarComponent,
    NavComponent,
    ProductComponent,
    FooterComponent,
    SearchBarComponent,
    ScrollButtonComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
    MatInputModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    TopBarComponent,
    NavComponent,
    ProductComponent,
    FooterComponent,
    SearchBarComponent,
    ScrollButtonComponent
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }
  ]
})
export class SharedModule { }