import { Identifiers } from '@angular/compiler';

export class VideoModel {
  public snippet: Snippet;
  public id: IdVideo;
}

class Snippet {
  public title: string;
  public description: string;
  public thumbnails: Thumbnails;
}

class Thumbnails {
  public medium: Url;
  public default: Url;
}

class Url {
  public url: string;
}

class IdVideo {
  public videoId: string;
  public playListId: string;
}
