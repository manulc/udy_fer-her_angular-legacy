import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/youtube.models';
import { YoutubeService } from 'src/app/services/youtube.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: Video[] = [];

  constructor(private _youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.cargarVideos();
  }

  mostrarVideo(video: Video): void {
    Swal.fire({
      html: `
      <h4>${video.title}</h4>
      <hr>
      <iframe width="100%"
              height="315"
              src="https://www.youtube.com/embed/${video.resourceId.videoId}"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture"
              allowfullscreen>
      </iframe>
      `
    });
  }

  cargarVideos(): void {
    this._youtubeService.getVideos().subscribe(videos => this.videos.push(...videos));
  }
}
