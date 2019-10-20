import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, RouterModule, FlexLayoutModule],
  exports: [RouterModule, MaterialModule, FlexLayoutModule]
})
export class SharedModule {}
