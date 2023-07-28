import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video, YoutubeResponse } from '../models/youtube.models';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private _youtubeUrl: string = "https://www.googleapis.com/youtube/v3";
  private _apiKey: string = "";
  private _playlist: string = "UUuaPTYj15JSkETGnEseaFFg";
  private _nextPageToken: string = "";

  constructor(private _http: HttpClient) { }
  
  getVideos(): Observable<Video[]> {
    const url: string = `${this._youtubeUrl}/playlistItems`;
    const params = new HttpParams()
      .set("part", "snippet")
      .set("maxResults", "20")
      .set("playlistId", this._playlist)
      .set("key", this._apiKey)
      .set("nextPageToken", this._nextPageToken);

    return this._http.get<YoutubeResponse>(url, { params })
      .pipe(map(resp => {
        this._nextPageToken = resp.nextPageToken;
        return resp.items.map(video => video.snippet);
      })
    );
  }
}
