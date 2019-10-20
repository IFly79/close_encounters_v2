import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DisplayVideo } from 'src/app/shared/model/displayVideo';
import { SearchListDisplayComponent } from '../search-list-display/search-list-display.component';
import { VideoListModel } from 'src/app/shared/model/video-list';
import { VideoModel } from 'src/app/shared/model/video';
import { YoutubeService } from '../../shared/services/youtube.service';

@Component({
  selector: 'app-search-youtube',
  templateUrl: './search-youtube.component.html',
  styleUrls: ['./search-youtube.component.scss']
})
export class SearchYoutubeComponent implements OnInit {
  @Output() videoLink: EventEmitter<string>;

  public youtubeSearch: FormGroup;
  public search: string;
  public video = [] as DisplayVideo[];

  constructor(private youtubeService: YoutubeService, private dialog: MatDialog) {
    this.videoLink = new EventEmitter(true);
  }

  ngOnInit() {
    this.youtubeSearch = new FormGroup({
      search: new FormControl('Search')
    });
  }

  // Fill an array with the video's useful data
  onSubmit() {
    this.video = [] as DisplayVideo[];
    this.youtubeService.getVideoBySearchList(this.youtubeSearch.value.search).subscribe((data: VideoListModel) => {
      data.items.forEach(function(element: VideoModel) {
        this.video.push({
          videoThumbnail: element.snippet.thumbnails.medium.url,
          videoId: element.id.videoId,
          title: element.snippet.title
        }) as DisplayVideo[];
      }, this);
      this.openDialog(this.video);
    });
  }

  // Open an overlay window to display the video's link
  openDialog(image: DisplayVideo[]) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      url: image
    };
    const dialogRef = this.dialog.open(SearchListDisplayComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.videoLink.emit(result);
    });
  }
}
