import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newSongs:any[] = [];
  loading:boolean = true;
  error:boolean;

  constructor(private spotify: SpotifyService ) {
    this.error = false
    this.spotify.getNewReleases()
    .subscribe( data => {
      console.log(data);
      this.newSongs = data;
      this.loading = false;
    }, (errorServidor) => {
      this.error = true
      this.loading = false
      console.log(errorServidor)
    })

  }
  ngOnInit(): void {
  }

}