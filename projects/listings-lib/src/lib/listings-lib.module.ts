import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListingsLibComponent } from './listings-lib.component';
import { ListingsComponent } from './components/listings/listings.component';

@NgModule({
  declarations: [
    ListingsLibComponent,
    ListingsComponent
  ],
  imports: [CommonModule, MaterialModule, FormsModule, HttpClientModule],
  exports: [ListingsLibComponent,CommonModule, FormsModule, HttpClientModule  ]
})
export class ListingsLibModule { }
