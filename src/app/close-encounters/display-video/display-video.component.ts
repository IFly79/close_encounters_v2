import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-display-video',
  templateUrl: './display-video.component.html',
  styleUrls: ['./display-video.component.scss']
})
export class DisplayVideoComponent implements OnInit, OnChanges {
  @Input() videoLinkEmbed: string;
  public videoLink: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  ngOnChanges() {
    this.videoLink = this.getSafeUrl();
  }

  // Transform the video url into a safe one to avoid code injection
  getSafeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoLinkEmbed);
  }
}
