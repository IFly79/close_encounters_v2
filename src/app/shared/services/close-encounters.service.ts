import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CloseEncountersService {
  public videoLink: string;
  constructor() {}

  getVideoLink() {
    return this.videoLink;
  }

  setVideoLink(videoLink: string) {
    this.videoLink = videoLink;
  }
}
