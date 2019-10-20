import { Component, OnInit } from '@angular/core';
import WaveSurfer from 'node_modules/wavesurfer.js';
import CursorPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.cursor.min.js';

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.scss']
})
export class LaunchpadComponent implements OnInit {
  wave: WaveSurfer = null;

  constructor() {}

  ngOnInit() {
    const ELEMENTS = document.querySelectorAll('#launch td');
    const path = '../../../assets/sounds/instru/';
    const AUDIOS = [
      //1
      'batt00.wav',
      //2
      'batt01.wav',
      //3
      'batt02.wav',
      //4
      'piano00.wav',
      //5
      'piano01.wav',
      //6
      'piano02.wav',
      //7
      'reagge00.wav',
      //8
      'reagge01.wav',
      //9
      'reagge02.wav',
      //10
      'guit00.wav',
      //11
      'guit01.wav',
      //12
      'guit02.wav'
    ];

    ELEMENTS.forEach((image, index) => {
      // Add event listener to the image element
      image.addEventListener('click', () => {
        // Create a new audio for each pad
        const audio = new Audio(path + AUDIOS[index]);
        // Play the audio
        audio.play();
        this.onPreviewPressed(path + AUDIOS[index]);
      });
    });
  }

  generateWaveform(): void {
    this.wave = WaveSurfer.create({
      container: '#waveform',
      waveColor: '#00ec3b',
      progressColor: '#00ec3d',
      plugins: [
        CursorPlugin.create({
          container: '#wave-cursor',
          showTime: true,
          opacity: 1,
          customShowTimeStyle: {
            'background-color': '#000',
            color: '#fff',
            padding: '2px',
            'font-size': '10px'
          }
        })
      ]
    });
    this.wave.on('ready', () => {
      this.wave.play();
    });
  }

  onPreviewPressed(url): void {
    if (!this.wave) {
      this.generateWaveform();
    }
    this.wave.load(url);
  }

  onStopPressed(): void {
    this.wave.stop();
  }
}
