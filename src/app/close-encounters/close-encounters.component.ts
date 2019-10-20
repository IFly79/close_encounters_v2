import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-close-encounters',
  templateUrl: './close-encounters.component.html',
  styleUrls: ['./close-encounters.component.scss']
})
export class CloseEncountersComponent implements OnInit {
  public timeout: number;
  public isVideo = false;
  public videoLink: string;

  constructor() {}

  ngOnInit() {}

  // @param audio

  playIntro(audio: HTMLMediaElement) {
    audio.src = '../../assets/sounds/notesclose/notesspeedloop.mp3';
    audio.play();
  }
  sonUn(audio: HTMLMediaElement) {
    audio.src = '../../assets/sounds/rondun.mp3';
    audio.play();
  }

  stop(audio: HTMLMediaElement) {
    audio.pause();
  }

  moins(audio: HTMLMediaElement) {
    audio.volume = audio.volume - 0.1;
  }

  plus(audio: HTMLMediaElement) {
    audio.volume = audio.volume + 0.1;
  }

  loop(audio: HTMLMediaElement) {
    audio.loop = true;
  }

  fadeout(audio: HTMLMediaElement) {
    window.clearTimeout(this.timeout);
    this.timeout = window.setTimeout(() => {
      audio.volume = audio.volume - 0.1;
      if (audio.volume > 0.1) {
        this.fadeout(audio);
      } else {
        audio.volume = 0;
      }
    }, 1200);
  }

  launchVideo(event: string) {
    this.videoLink = event;
    this.isVideo = true;
  }
}
