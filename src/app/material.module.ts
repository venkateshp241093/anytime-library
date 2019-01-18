import { NgModule } from '@angular/core';


import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';

const modules = [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
];

@NgModule({
  exports: [...modules],
  imports: [...modules],
})
export class MaterialModule {}
