import { Component } from '@angular/core';
import { GifsServiceService } from '../../../gifs/Service/gifs.service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor( private gifsService: GifsServiceService){}
 activado:boolean = false;
  get tags(){
    return this.gifsService.tagsHistory;
  }

  searchTag(tag: string){
    
    this.gifsService.searchTag(tag)
  }
  modooscuro() {
    if (this.activado){
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      this.activado=false;
    }
    else{ document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      this.activado=true;
    }
   
  }
}
