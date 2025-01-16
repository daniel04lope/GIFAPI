import { Component } from '@angular/core';
import { GifsServiceService } from '../../../gifs/Service/gifs.service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor( private gifsService: GifsServiceService){}

  get tags(){
    return this.gifsService.tagsHistory;
  }

  searchTag(tag: string){
    
    this.gifsService.searchTag(tag)
  }
}
