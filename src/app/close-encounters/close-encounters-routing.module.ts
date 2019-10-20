import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CloseEncountersComponent } from './close-encounters.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: CloseEncountersComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes), SharedModule]
})
export class CloseEncountersRoutingModule {}
