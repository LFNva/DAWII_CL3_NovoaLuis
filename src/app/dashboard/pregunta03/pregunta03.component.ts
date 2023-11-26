import { Component, OnInit } from '@angular/core';
import { EpisodiesService } from './episodies.service';
import { Episodies } from './episodies';

@Component({
  selector: 'app-pregunta03',
  templateUrl: './pregunta03.component.html',
  styleUrl: './pregunta03.component.css'
})
export class Pregunta03Component{
  episodes: Episodies[] = []
  displayedColumns: string[] = ["Id", "Name", "Episode", "Air_Date"]

  constructor(private episodeService: EpisodiesService){

  }
  ngOnInit(): void {
    this.filtro();
  }

  filtro():void{
    this.episodeService.getEpisodes()
      .subscribe(
        data => {
          this.episodes = data.results.filter((episodes:any) => episodes.id % 2 !== 0)
        }
      );
  }

}
