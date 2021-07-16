import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {
  artista:any = {};
  loadingArtist:boolean = true;
  topTrack:any[] = [];

  
  constructor(private router:ActivatedRoute, private spotify:SpotifyService) {
    this.loadingArtist = true;
    this.router.params.subscribe( params => {
        this.getArtista(params['id'])
        this.getTopTracks(params['id'])
    })
   }

   getArtista(id:string){
    this.loadingArtist = true
     this.spotify.getArtist( id )
     .subscribe( artist => {
       console.log(artist)
       this.artista = artist;
       this.loadingArtist = false; 
     })
   }

   getTopTracks(id:string){
    this.spotify.getTopTracks(id)
    .subscribe(topTracks => {
      this.topTrack = topTracks
      console.log(topTracks)
    })
   }


}
