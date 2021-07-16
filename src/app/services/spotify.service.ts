import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  constructor(private http: HttpClient) {}
  
  getQuery(query:string){
    const url = `https://api.spotify.com/v1${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer QDvhV1VIjzxY-DgnXvYZqFavMtuETI6KSW-3r9iSkjldoA14yZl2WWJdNrkn3vYXxW-r98K-823otV3UXk'
    });
   return this.http.get(url, {headers});
  }
  
  getNewReleases(){
  return this.getQuery('/browse/new-releases')
    .pipe( map( data => data['albums'].items));
  }

  getArtistas(termino:string){
  return this.getQuery(`/search?q=${termino}&type=artist&limit=15`)
    .pipe( map( data => data['artists'].items));
  }

  getArtist(id:string){
    return this.getQuery(`/artists/${id}`)
    // .pipe( map(data => data['name']))
  } 

  getTopTracks(id:string){
    return this.getQuery(`/artists/${id}/top-tracks?country=us`)
    .pipe( map( data => data['tracks']))
  }
}