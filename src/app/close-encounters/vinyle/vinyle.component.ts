import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-vinyle',
  templateUrl: './vinyle.component.html',
  styleUrls: ['./vinyle.component.scss']
})
export class VinyleComponent implements OnInit, OnChanges {
  public vinyle: HTMLElement;
  public intervalID: any;
  public deg: number;
  public vinyleBool: boolean;

  constructor() {
    this.deg = 0;
    this.vinyleBool = false;
  }

  ngOnInit() {}

  getVinyle(vinyle: HTMLElement) {
    this.vinyle = vinyle;
  }

  vinyleState(vinyleBool: boolean) {
    // this.vinyleBool != this.vinyleBool;
    this.vinyleBool = vinyleBool;

    if (this.vinyleBool) {
      console.log('ok');

      this.intervalID = setInterval(() => {
        this.vinyle.style.transform = 'rotate(' + this.deg + 'deg)';
        this.deg = (this.deg + 10) % 360;
      }, 50);
    } else if (!this.vinyleBool) {
      clearInterval(this.intervalID);
      console.log('mehg');
    }
  }

  playIntro(audio: HTMLMediaElement) {
    audio.src = '../../assets/sounds/notesclose/notesspeedloop.mp3';
    audio.play();
  }

  ngOnChanges() {}
}
