// angular
import { NgModule } from '@angular/core';
// Material
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  exports: [
    MatCardModule,
    MatInputModule,
    MatDividerModule,
  ],
})
export class MaterialModule { }
