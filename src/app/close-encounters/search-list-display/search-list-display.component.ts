import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { DisplayVideo } from 'src/app/shared/model/displayVideo';

@Component({
  selector: 'app-search-list-display',
  templateUrl: './search-list-display.component.html',
  styleUrls: ['./search-list-display.component.scss']
})
export class SearchListDisplayComponent implements OnInit {
  public image: DisplayVideo[];

  constructor(private dialogRef: MatDialogRef<SearchListDisplayComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.image = data.url;
  }

  ngOnInit() {}

  close(link: string) {
    this.dialogRef.close(link);
  }
}
