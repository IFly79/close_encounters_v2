import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VideoListModel } from '../model/video-list';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  constructor(private http: HttpClient) {}
  getVideoBySearchList(search: string): Observable<VideoListModel> {
    return this.http.get<VideoListModel>(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDpCz8p09911DR2755aWLKxVMhqZOLb4g0&part=snippet&q=${search}&maxResults=20`
    );
  }
}
