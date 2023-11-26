import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episodies } from './episodies';

@Injectable({
  providedIn: 'root'
})
export class EpisodiesService {

  private urlAPi = 'https://rickandmortyapi.com/api/episode'

  constructor(private http:HttpClient) { }

  getEpisodes(): Observable<any>{
    return this.http.get<Episodies[]>(this.urlAPi);
  }
}
