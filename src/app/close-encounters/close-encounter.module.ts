import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';

import { CloseEncountersComponent } from './close-encounters.component';
import { CloseEncountersRoutingModule } from './close-encounters-routing.module';
import { DisplayVideoComponent } from './display-video/display-video.component';
import { HttpClientModule } from '@angular/common/http';
import { LaunchpadComponent } from './launchpad/launchpad.component';
import { SharedModule } from '../shared/shared.module';
import { SearchListDisplayComponent } from './search-list-display/search-list-display.component';
import { SearchYoutubeComponent } from './search-youtube/search-youtube.component';
import { VinyleComponent } from './vinyle/vinyle.component';

@NgModule({
  declarations: [
    CloseEncountersComponent,
    DisplayVideoComponent,
    LaunchpadComponent,
    SearchListDisplayComponent,
    SearchYoutubeComponent,
    VinyleComponent
  ],
  imports: [
    CommonModule,
    CloseEncountersRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [],
  entryComponents: [SearchListDisplayComponent]
})
export class CloseEncountersModule {}
