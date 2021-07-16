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
  // paises:any[] = []; 

  constructor(private spotify: SpotifyService ) {
    this.spotify.getNewReleases()
    .subscribe( data => {
      console.log(data);
      this.newSongs = data;
      this.loading = false;
    })

    // this.spotify.getCountri()
    // .subscribe( (resp:any) => {
    //   this.paises = resp
    //   console.log(resp)
    // })
  }


  ngOnInit(): void {
  }

}